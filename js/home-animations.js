let height = window.innerHeight;

  let cup_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cup-section",
        pin: true,
        start:() => "0 0", 
        end:() => `+=${height * 2}`, 
        scrub: true, 
      }
  });

  cup_tl
    .from(".cup-cup", {yPercent: 100})

// cup lead
let cupLeadChange_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cup-section",
        start:() => "0 0", 
        end:() => `+=${height * 2}`, 
        scrub: true, 
        markers:true,
        }
    });
    cupLeadChange_tl
	.to(".cup-lead-1", {duration:2, delay:1, yPercent: -200})
	.to(".cup-cupGelato", {duration:2, y: -200}, "-=2")
	.to(".cup-slogan", {duration:2, opacity: 0}, "-=2")

// appear logo
ScrollTrigger.create({
    trigger: '.hero-section' ,
    invalidateOnRefresh: true,
    start: "center top", 
    end:() => `+=${height/2}`,
    onEnter: () => 
    document.querySelector('.header-container').classList.remove('header-home'),
    onLeaveBack: () => 
    document.querySelector('.header-container').classList.add('header-home'),
    //markers: true,
  });