let hamico = document.querySelector(".header-hamico")
let line = document.querySelector(".header-line")
let drawer = document.querySelector(".header-drawer")
let body = document.querySelector("body")

hamico.addEventListener('click' , ()=>{
    line.classList.toggle("header-line--open")
    drawer.classList.toggle("header-drawer--open")
    body.classList.toggle("freeze")
})

// fixed footer
/*
let main = document.querySelector(".main")
let footer = document.querySelector(".footer")
let footer_height = footer.clientHeight;
if (screen.width > 700) {
    main.style.marginBottom = footer_height + "px"
}
window.addEventListener('resize' , ()=>{
    footer_height = footer.clientHeight;
    if (screen.width > 700) {
        main.style.marginBottom = footer_height + "px"
    }else{
        main.style.marginBottom = 0 + "px"
    }
    
})

*/