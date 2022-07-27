let height = window.innerHeight;


// cup lead
let cupLeadChange_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cup-section",
        pin: true,
        start:() => "0 0", 
        end:() => `+=${height * 2}`, 
        scrub: true, 
        //markers:true,
        }
    });
    cupLeadChange_tl
	.to(".cup-cup", {duration:2, delay:1, yPercent:-50, top:"50%"}, "-=1.8")
	.to(".cup-lead-1", {duration:2, delay:1, yPercent: -300}, "-=2")
	.to(".cup-cupGelato", {duration:2, y: -180}, "-=2")



// appear logo
ScrollTrigger.create({
    trigger: '.hero' ,
    invalidateOnRefresh: true,
    start: "center top", 
    end:() => `+=${height/2}`,
    onEnter: () => 
    document.querySelector('.header-container').classList.remove('header-home'),
    onLeaveBack: () => 
    document.querySelector('.header-container').classList.add('header-home'),
    //markers: true,
  });


  // header theme
  gsap.utils.toArray('.darkSec').forEach(thisDarkSec => {
    ScrollTrigger.create({
        trigger: thisDarkSec,
        start: 'top 2px ',
        end: 'bottom top',
        toggleClass:  { targets: '.header', className: 'header--dark' },
        //markers: true,
    });
});


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
    //header & float
    gsap.from(".header", {duration:1, delay:2.2, opacity:0})
    gsap.from(".star", {duration:1, delay:2.2, opacity:0})
    //jungle animation
    let jungle = gsap.timeline({delay:2.2,});
    jungle
    .from(".hero-plant0", {duration:.2, display:"none"})
    .from(".hero-hippopotamus", {duration:.2, display:"none"})
    .from(".hero-plant1", {duration:.2, display:"none"})
    .from(".hero-plant2", {duration:.2, display:"none"},"-=.5")
    .from(".hero-plant3", {duration:.2, display:"none"})
    .from(".hero-iguana", {duration:.2, display:"none"})
    .from(".hero-plant4", {duration:.2, display:"none"}, "-=.5")
    .from(".hero-plant5", {duration:.2, display:"none"})
    .from(".hero-polar_bear", {duration:1, xPercent:150, rotation: 360},"-=.5")
    .from(".hero-plant6", {duration:.2, display:"none"})
    .from(".hero-gorilla", {duration:2, xPercent:120, yPercent:120},"-=.5")
    .from(".hero-turtles", {duration:1, yPercent:100},"-=2")
    .from(".hero-tiger", {duration:.2, display:"none"}, "-=2")
    .from(".hero-plant7", {duration:.2, display:"none"},"-=2")
} 

