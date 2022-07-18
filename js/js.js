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
let main = document.querySelector(".main")
let footer = document.querySelector(".footer")
let footer_height = footer.clientHeight;
if (window.innerWidth >= 700) {
    main.style.marginBottom = footer_height + "px"
}else {
    main.style.marginBottom = 0 ;
}
window.addEventListener('resize' , ()=>{
    footer_height = footer.clientHeight;
    if (window.innerWidth >= 700) {
        console.log('hi')
        main.style.marginBottom = footer_height + "px"
    }else{
        main.style.marginBottom = 0 + "px"
    }
})

// rotate find me 
let star = document.querySelector('.star-shape')
window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    star.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
}

 //hide find me
 let star_btn = document.querySelector('.star')
window.addEventListener('scroll' , ()=>{
    if (window.innerWidth >= 700) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                star_btn.classList.add("star--hide");
            }else{
                star_btn.classList.remove("star--hide");
            }
    }else{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - footer.clientHeight) {
            star_btn.classList.add("star--hide");
        }else{
            star_btn.classList.remove("star--hide");
        }
    }
})

//
