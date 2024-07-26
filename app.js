

let icon = document.querySelector("#iccon");
let imges = document.querySelector(".immgine");
let drop = document.querySelector(".dropdown");
let arr = [
  "https://cdn.olaelectric.com/sites/evdp/pages/ec/ec_relationship_image_web_01.webp",
  "https://cdn.olaelectric.com/sites/evdp/pages/home/home_global_gigafactory_ev_web.webp",
  "https://cdn.olaelectric.com/sites/evdp/pages/investor/ir_service.webp",
];
icon.addEventListener("click", () => {
  drop.style.visibility = "visible";
  gsap.to(".dropdown", {
    opacity: 1,
  });
  gsap.to("#iccon", {
    rotate: "45deg",
    duration: 1,
  });
});

icon.addEventListener("dblclick", () => {
  drop.style.visibility = "hidden";
  gsap.to(".dropdown", {
    opacity: 0,
  });
  gsap.to("#iccon", {
    rotate: "0deg",
    duration: 1,
  });
});


const strings = document.querySelectorAll(".string");
const initialPath = "M 10 100 Q 650 80 1290 100";
const finalPath = "M 10 100 Q 650 80 1290 100";

for (let i = 0; i < strings.length; i++) {
  const string = strings[i];

  string.addEventListener("mousemove", (dets) => {
    const newPath = `M 10 100 Q ${dets.x} ${dets.y} 1290 100`;
    gsap.to("svg path", {
      attr: { d: newPath },
    });
  });

  string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      ease: "elastic.out(1,0.2)",
      duration: 0.7,
    });
  });
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(0.8)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1)";
});

document.querySelector(".swiper").addEventListener("mousemove", () => {
  cursor.style.transform = "scale(3)";
  cursor.innerHTML = "ola";
});
document.querySelector("#vidio").addEventListener("mousemove", () => {
  cursor.style.transform = "scale(3)";
  cursor.innerHTML = "ola";
});
document.querySelector(".swiper").addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1)";
  cursor.innerHTML = "";
});
document.querySelector("#vidio").addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1)";
  cursor.innerHTML = "";
});
document.querySelector(".page-3").addEventListener("mousemove", () => {
  cursor.style.transform = "scale(3)";
  cursor.style.filter = "sepia(100%);";
  cursor.style.backgroundColor = "silver";
  cursor.innerHTML = "";
});
document.querySelector(".page-3").addEventListener("mouseleave", () => {
  cursor.style.transform = "scale(1)";
  cursor.style.filter = "";
  cursor.style.backgroundColor = "";
  cursor.innerHTML = "";
});

document.querySelector(".change-2").addEventListener("moseenter", () => {
  const mi = document.querySelector("#he");

  if (mi) {
    // Check if the image element exists
    mi.src =
      "vidio/ola.mp4";
  } else {
  }
});
document.querySelector(".change-3").addEventListener("mouseenter", () => {
  const mi = document.querySelector("#he");

  if (mi) {
    // Check if the image element exists
    mi.src =
      "vidio/olaa.mp4";
  } else {
  }
});
document.querySelector(".change").addEventListener("mouseenter", () => {
  const mi = document.querySelector("#he");

  if (mi) {
    mi.src =
      "vidio/ola2.mp4";
  } else {
  }
});
document.querySelector(".change-1").addEventListener("mouseenter", () => {
  const mi = document.querySelector("#he");

  if (mi) {
    mi.src =
      "vidio/ola-4.mp4";
  } else {
  }
});




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

var tl = gsap.timeline(
{  
  scrollTrigger:{
    trigger:".page-2 h1",
    scroller:".main",
    start:"top 30%",
    end:"top 0",
    scrub:2
}
  }
)

tl.to(".page-2 h1",{
  x:-100,

},"he")
tl.to(".page-2 h2",{
  x:100
},"he")
tl.to(".page-2 #vidio",{
  width:"90%"
},"he")


