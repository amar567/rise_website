

let orbit = document.querySelector(".orbit0");
let orbit1 = document.querySelector(".orbit1");
let circle1 = document.querySelector(".circle1div");
let circle2 = document.querySelector(".circle2div");
let circle3 = document.querySelector(".circle3div");
let circle4 = document.querySelector(".circle4div");
let circle5 = document.querySelector(".circle5div");
let circle6 = document.querySelector(".circle6div");
let circle7 = document.querySelector(".circle7div");
let circle8 = document.querySelector(".circle8div");
let circle9 = document.querySelector(".circle9div");
let circle10 = document.querySelector(".circle10div");

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

let demo = {
    rotation1: 0,
    radius1: 200,
    offset1:Math.PI / 2,

    rotation2: 0,
    radius2: 200,
    offset2:Math.PI,

    rotation3: 0,
    radius3: 200,
    offset3:Math.PI * 3/2,

    rotation4: 0,
    radius4: 200,
    offset4:Math.PI * 2,

    rotation5: 0,
    radius5: 350,
    offset5:Math.PI * 1/3,

    rotation6: 0,
    radius6: 350,
    offset6:Math.PI * 2/3 ,

    rotation7: 0,
    radius7: 350,
    offset7:Math.PI * 3/3,

    rotation8: 0,
    radius8: 350,
    offset8:Math.PI * 4/3,

    rotation9: 0,
    radius9: 350,
    offset9:Math.PI * 5/3,

    rotation10: 0,
    radius10: 350,
    offset10:Math.PI * 6/3,

};


gsap.set([circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,circle9,circle10],{
    xPercent: -50,
    yPercent: -50,
    x: centerX,
    y: centerY
});


gsap.set([orbit,orbit1], {
    xPercent: -50,
    yPercent: -50,
    x: centerX,
    y: centerY
});
// gsap.set([orbit2], {
//     xPercent: -50,
//     yPercent: -50,
//     x: centerX,
//     y: centerY
// });
// gsap.set([orbit3], {
//     xPercent: -50,
//     yPercent: -50,
//     x: centerX,
//     y: centerY
// });
// gsap.set([orbit4], {
//     xPercent: -50,
//     yPercent: -50,
//     x: centerX,
//     y: centerY
// });

gsap.to(demo, {
    duration: 15,

    rotation1: Math.PI * -2,
    offset1: Math.PI / 2,

    rotation2: Math.PI * -2,
    offset2: Math.PI ,

    rotation3: Math.PI * -2,
    offset3: Math.PI * 3/2,

    rotation4: Math.PI * -2,
    offset4: Math.PI * 2,

    rotation5: Math.PI * 2,
    offset5: Math.PI * 1/3,

    rotation6: Math.PI * 2,
    offset6: Math.PI * 2/3,

    rotation7: Math.PI * 2,
    offset7: Math.PI * 3/3,

    rotation8: Math.PI * 2,
    offset8: Math.PI * 4/3,

    rotation9: Math.PI * 2,
    offset9: Math.PI * 5/3,

    rotation10: Math.PI * 2,
    offset10: Math.PI * 6/3,

    
    ease: "none",
    repeat: -1,
    onUpdate: update
});

function update() {
    
    let x1 = centerX + Math.cos(demo.rotation1 - demo.offset1) * demo.radius1;
    let y1 = centerY + Math.sin(demo.rotation1 - demo.offset1) * demo.radius1;
    gsap.set(circle1, {
        // rotation: demo.rotation + "_rad",
        x: x1,
        y: y1
    });
    let x2 = centerX + Math.cos(demo.rotation2 - demo.offset2) * demo.radius2;
    let y2 = centerY + Math.sin(demo.rotation2 - demo.offset2) * demo.radius2;
    gsap.set(circle2, {
        // rotation: demo.rotation + "_rad",
        x: x2,
        y: y2
    });
    let x3 = centerX + Math.cos(demo.rotation3 - demo.offset3) * demo.radius3;
    let y3 = centerY + Math.sin(demo.rotation3 - demo.offset3) * demo.radius3;
    gsap.set(circle3, {
        // rotation: demo.rotation + "_rad",
        x: x3,
        y: y3
    });
    let x4 = centerX + Math.cos(demo.rotation4 - demo.offset4) * demo.radius4;
    let y4 = centerY + Math.sin(demo.rotation4 - demo.offset4) * demo.radius4;
    gsap.set(circle4, {
        // rotation: demo.rotation + "_rad",
        x: x4,
        y: y4
    });
    let x5 = centerX + Math.cos(demo.rotation5 + demo.offset5) * demo.radius5;
    let y5 = centerY + Math.sin(demo.rotation5 + demo.offset5) * demo.radius5;
    gsap.set(circle5, {
        // rotation: demo.rotation + "_rad",
        x: x5,
        y: y5
    });
    let x6 = centerX + Math.cos(demo.rotation6 + demo.offset6) * demo.radius6;
    let y6 = centerY + Math.sin(demo.rotation6 + demo.offset6) * demo.radius6;
    gsap.set(circle6, {
        // rotation: demo.rotation + "_rad",
        x: x6,
        y: y6
    });
    let x7 = centerX + Math.cos(demo.rotation7 + demo.offset7) * demo.radius7;
    let y7 = centerY + Math.sin(demo.rotation7 + demo.offset7) * demo.radius7;
    gsap.set(circle7, {
        // rotation: demo.rotation + "_rad",
        x: x7,
        y: y7
    });
    let x8 = centerX + Math.cos(demo.rotation8 + demo.offset8) * demo.radius8;
    let y8 = centerY + Math.sin(demo.rotation8 + demo.offset8) * demo.radius8;
    gsap.set(circle8, {
        // rotation: demo.rotation + "_rad",
        x: x8,
        y: y8
    });
    let x9 = centerX + Math.cos(demo.rotation9 + demo.offset9) * demo.radius9;
    let y9 = centerY + Math.sin(demo.rotation9 + demo.offset9) * demo.radius9;
    gsap.set(circle9, {
        // rotation: demo.rotation + "_rad",
        x: x9,
        y: y9
    });
    let x10 = centerX + Math.cos(demo.rotation10 + demo.offset10) * demo.radius10;
    let y10 = centerY + Math.sin(demo.rotation10 + demo.offset10) * demo.radius10;
    gsap.set(circle10, {
        // rotation: demo.rotation + "_rad",
        x: x10,
        y: y10
    });

}

