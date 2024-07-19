gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

// console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=1200px',
    pin: '#horizontal-scoll',
    scrub: true,
    invalidateOnRefresh: true
  }
});


let sectionsLeft = gsap.utils.toArray(".leftPanel");
let sectionsRight = gsap.utils.toArray(".rightPanel");

// console.log(sectionsLeft, sectionsRight);

sectionsLeft.forEach(div => {

  gsap.from(div, {
    xPercent: -100,
  })

  gsap.to(div, {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: div,
      start: '-2000%',
      // markers:true,
      // pin: true,
      scrub: 1,
      snap: 1 / (div.length - 1),
      end: '-750%'
    },
  });
});

sectionsRight.forEach(div => {

  gsap.from(div, {
    xPercent: 100,
  })

  gsap.to(div, {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: div,
      start: '-2000%',
      // markers:true,
      // pin: true,
      scrub: 1,
      snap: 1 / (div.length - 1),
      end: '-750%'
    },
  });
});