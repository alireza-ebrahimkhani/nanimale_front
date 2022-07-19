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
        //markers:true,
        }
    });
    cupLeadChange_tl
    .to(".cup-lead-8", {duration:1, display:"none"})
    .to(".cup-lead-7", {duration:1, display:"none"})
    .to(".cup-lead-6", {duration:1, display:"none"})
    .to(".cup-lead-5", {duration:1, display:"none"})
    .to(".cup-lead-4", {duration:1, display:"none"})
    .to(".cup-lead-3", {duration:1, display:"none"})
    .to(".cup-lead-2", {duration:1, display:"none"})
	.to(".cup-lead-1", {duration:2, delay:1, yPercent: -200})
	.to(".cup-cupGelato", {duration:2, y: -200}, "-=2")
	.to(".cup-slogan", {duration:2, opacity: 0}, "-=2")

// appear logo
gsap.to(".header-center",{
    scrollTrigger: {
        trigger: ".header-center",
        start:() => "50% top", 
        end:() => `+=${height/2}`, 
        markers:true,
        toggleClass: "header-center-show"
        }
})