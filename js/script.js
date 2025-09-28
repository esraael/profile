var typed=new Typed(".typing" , {
    strings:[" ", "Web Designer" , "Frontend Developer" , "Basic Programming  Instructor" , "Frontend instructor"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// -----------------Aside--------------------
const nav=document.querySelector(".nav"),
      navlist=nav.querySelectorAll("li"),
      totalnavlist=navlist.length,
      allsection=document.querySelectorAll(".section"),
      totalsection=allsection.length;
      for(let i=0 ; i<totalnavlist;i++){
         const a=navlist[i].querySelector("a");
         a.addEventListener("click" , function(){
            for(let i=0 ; i<totalsection ;i++){
                allsection[i].classList.remove("back-section")
            }
            for(let j=0 ; j<totalnavlist ; j++){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    allsection[j].classList.add("back-section")
                }
                navlist[j].querySelector("a").classList.remove("active")
            }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200){
                asidesectiontogglerbtn();
              }
    })
}
function showSection(element){
    for(let i=0 ; i<totalsection ;i++){
        allsection[i].classList.remove("active")
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#" +target).classList.add("active")
}
function updateNav(element){
    for(let i=0 ; i<totalsection ;i++){
        navlist[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target===navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click" , function(){
    const sectionindex=this.getAttribute("data-section-index")
    
    showSection(this)
    updateNav(this)
})
const navtogglerbtn=document.querySelector(".nav_toggler"),
      aside=document.querySelector(".aside");
      navtogglerbtn.addEventListener("click" , ()=>{
        asidesectiontogglerbtn();
      })
      function asidesectiontogglerbtn(){
        aside.classList.toggle("open");
        navtogglerbtn.classList.toggle("open")
        for(let i=0 ; i<totalsection ;i++){
            allsection[i].classList.toggle("open")
        }
      }



















