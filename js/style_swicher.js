// =========swicher-====================
const styleswitchertoggle=document.querySelector('.style_switcher_toggler');
styleswitchertoggle.addEventListener("click" , ()=>{
    document.querySelector(".style_swicher").classList.toggle("open")
})
window.addEventListener("scroll" , ()=>{
    if(document.querySelector(".style_swicher").classList.contains("open"))
        {
        document.querySelector(".style_swicher").classList.remove("open")
    }
})
// ---------------------theme colors----------------------------
const alternatestyle=document.querySelectorAll(".alternate-style")
function setActiveStyle(color){
    alternatestyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled" , "true")
        }
    })
}
// ----------------night moon----------------
const daynight=document.querySelector(".day_night")
daynight.addEventListener("click" , ()=>{
    daynight.querySelector("i").classList.toggle("fa-sun")
    daynight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load" , ()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})



















