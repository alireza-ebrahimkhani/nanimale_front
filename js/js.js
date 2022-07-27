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

//entrance
let header = document.querySelector(".header")
let body_body = document.querySelector("body")
//let overlay = document.querySelector(".overlay")
if (window.scrollY == 0){
    body_body.classList.add('freeze-force')
    document.addEventListener("DOMContentLoaded", function() {
        let logoMotion = document.querySelector(".logoMotion-motion")
        logoMotion.play();
        logoMotion.addEventListener("complete",()=>{
        body_body.classList.remove('freeze-force')
        header.style.zIndex = 402 
    })
});
} 


document.addEventListener("DOMContentLoaded", function(){
    let elements = document.getElementsByTagName('lottie-player');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('play', (event) => {
        event.target.shadowRoot.querySelector('svg').style.transform = '';
      });
      elements[i].play();
    }
  });