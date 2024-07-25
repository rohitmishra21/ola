
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


let icon = document.querySelector("#icon");
let imges = document.querySelector(".immgine");
let drop = document.querySelector(".dropdown");
let changes = document.querySelectorAll(".change");
let arr = [
    "https://cdn.olaelectric.com/sites/evdp/pages/ec/ec_relationship_image_web_01.webp",
    "https://cdn.olaelectric.com/sites/evdp/pages/home/home_global_gigafactory_ev_web.webp",
    "https://cdn.olaelectric.com/sites/evdp/pages/investor/ir_service.webp"
];

icon.addEventListener("click", () => {
  drop.style.visibility = "visible";
  gsap.to(".dropdown", {
    opacity: 1,
  });
});

changes.forEach(change => {
    change.addEventListener("mouseenter", () => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      imges.style.backgroundImage = `url(${arr[randomIndex]})`;
    });
});

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page-2 h1",
    scroller:".main",
    markers:true,
    start:"top 27%",
    end:"top 0",
    scrub:3,
  }
})

tl.to(".page-2 h1",{
  x:-150,
  
},"he")

tl.to(".page-2 h2",{
  x:80,
  
},"he")
tl.to(".page-2 #vidio",{
  width:"80%"
  
},"he")

