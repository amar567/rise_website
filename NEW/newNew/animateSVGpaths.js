// credit : https://codepen.io/kezo777/pen/qBbbVmN?editors=1100

pathsList = document.getElementsByTagName('path')

container = document.getElementById('ourServicesContainer')
// console.log(container.isIntersecting)

const iObserver = new IntersectionObserver(items => {

    // Intersecting? (is the element in the available viewport)
    if (items[0].isIntersecting) {
        // Log visibility
        // console.log('Visible? Yes');
        // pathsList.forEach(path => {
        //     path.className = 'draw-logo'
        // });
        for (const path of pathsList) {
            path.classList.add('draw-logo')
            // console.log({path});
        }
        // console.log(pathsList);
        
    } else {
        // console.log('Visible? No')
        for (const path of pathsList) {
            path.classList.remove('draw-logo')
            // console.log({path});
        }
        visiblity = 'invisible';
        statusText = 'Nothing is visible, scroll!';
    }

});

// Loop through and observe intersect items
iObserver.observe(container)