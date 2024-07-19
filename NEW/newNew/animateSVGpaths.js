// credit : https://codepen.io/kezo777/pen/qBbbVmN?editors=1100

pathsList = document.getElementsByClassName('path')


let options0 = {
    // root: document.querySelector("#scrollArea"),
    // rootMargin: "0px",
    // threshold: 1.0,
};

let callback = (entries, observer) => {

    // console.log(entries);
    entries.forEach((entry) => {
        // Each entry describes an intersection change for one observed
        
        if (entry.isIntersecting) {
            entry.target.classList.add('draw-logo')
        } else {
            entry.target.classList.remove('draw-logo')
        }

        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        // console.log(entry.isIntersecting);
        //   entry.rootBounds
        //   entry.target
        //   entry.time
    });
};

let observer = new IntersectionObserver(callback,options0);

for(item of pathsList){
    observer.observe(item)
}