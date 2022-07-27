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
        markers: true,
    });
});
  