const hamico = document.querySelector(".header-hamico")
const line = document.querySelector(".header-line")
const drawer = document.querySelector(".header-drawer")
const body = document.querySelector("body")

hamico.addEventListener('click' , ()=>{
    line.classList.toggle("header-line--open")
    drawer.classList.toggle("header-drawer--open")
    body.classList.toggle("freeze")
})
