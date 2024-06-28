// <!-- rc-carousel wrapper, set total tiles count including duplicate items -->
{/* <div class="rc-carousel" style="--tiles: 4;">
    <!-- rc-carousel-strip animation -->
    <div class="rc-carousel-strip">
        <!-- Flexbox -->
        <div class="rc-carousel-box">

            <div class="rc-carousel-item glass">
                <img class="rc-carousel-item-image"
                    src="https://a.storyblok.com/f/79434/x/df6a77389d/dhl-with-white-bg.svg" alt="dhl" />
            </div> */}



const options = { method: 'GET', headers: {} };
// https://wdy3gn5h.nocodb.com/#/nc/view/

// // https://wdy3gn5h.nocodb.com/#/nc/view/6eff141d-bae0-4f2f-9471-e276dde4c10f
// https://wdy3gn5h.nocodb.com/#/base/77babce2-f1f3-45e6-8a4d-c9e818fc903b

tableID = '96a1aa81-cad6-4ffd-b677-7e71fc455793'

fetch('https://app.nocodb.com/api/v1/db/public/shared-view/' + tableID + '/rows', options)
    .then(response => response.json())
    .then(response => {
        // console.log(response)

        number = response.list.length
        first2rows = Math.floor(number / 3);
        lastRow = first2rows + (number % 3);

        firstRowOfcarousel = document.createElement('div')
        firstRowOfcarousel.className = "rc-carousel"
        firstRowOfcarousel.style = "--tiles:" + lastRow *2

        firstRowOfcarouselStrip = document.createElement('div')
        firstRowOfcarouselStrip.className = "rc-carousel-strip"

        firstRowOfcarouselBox = document.createElement('div')
        firstRowOfcarouselBox.className = "rc-carousel-box"

        listOfIncubateesInRow = []

        for (let index = 0; index < first2rows; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        for (let index = 0; index < first2rows; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        // console.log(listOfIncubateesInRow);
        duplicatelistOfIncubateesInRow = listOfIncubateesInRow

        // firstRowOfcarouselBox.append(listOfIncubateesInRow)
        for (const child of listOfIncubateesInRow) {
            firstRowOfcarouselBox.appendChild(child);
        }

        // console.log(firstRowOfcarouselBox);
        firstRowOfcarouselStrip.appendChild(firstRowOfcarouselBox)
        firstRowOfcarousel.appendChild(firstRowOfcarouselStrip)


        secondRowOfcarousel = document.createElement('div')
        secondRowOfcarousel.className = "rc-carousel"
        secondRowOfcarousel.style = "--tiles:" + lastRow *2

        secondRowOfcarouselStrip = document.createElement('div')
        secondRowOfcarouselStrip.className = "rc-carousel-strip reverse"

        secondRowOfcarouselBox = document.createElement('div')
        secondRowOfcarouselBox.className = "rc-carousel-box"

        listOfIncubateesInRow = []

        for (let index = first2rows ; index < first2rows * 2; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        for (let index = first2rows ; index < first2rows * 2; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        // console.log(listOfIncubateesInRow);
        duplicatelistOfIncubateesInRow = listOfIncubateesInRow

        // secondRowOfcarouselBox.append(listOfIncubateesInRow)
        for (const child of listOfIncubateesInRow) {
            secondRowOfcarouselBox.appendChild(child);
        }

        // console.log(secondRowOfcarouselBox);
        secondRowOfcarouselStrip.appendChild(secondRowOfcarouselBox)
        secondRowOfcarousel.appendChild(secondRowOfcarouselStrip)


        thirdRowOfcarousel = document.createElement('div')
        thirdRowOfcarousel.className = "rc-carousel"
        thirdRowOfcarousel.style = "--tiles:" + lastRow*2

        thirdRowOfcarouselStrip = document.createElement('div')
        thirdRowOfcarouselStrip.className = "rc-carousel-strip"

        thirdRowOfcarouselBox = document.createElement('div')
        thirdRowOfcarouselBox.className = "rc-carousel-box"

        listOfIncubateesInRow = []

        for (let index = first2rows*2 ; index < number; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        for (let index = first2rows*2 ; index < number; index++) {

            newDiv = document.createElement('div')
            newDiv.className = 'rc-carousel-item glass'


            newImg = document.createElement('img')
            newImg.src = response.list[index].Logo[0].signedUrl
            newImg.className = 'rc-carousel-item-image'
            newImg.title = response.list[index]["Name of Incubatee"]

            newDiv.appendChild(newImg)

            listOfIncubateesInRow.push(newDiv)

        }
        // console.log(listOfIncubateesInRow);
        duplicatelistOfIncubateesInRow = listOfIncubateesInRow

        // thirdRowOfcarouselBox.append(listOfIncubateesInRow)
        for (const child of listOfIncubateesInRow) {
            thirdRowOfcarouselBox.appendChild(child);
        }

        // console.log(thirdRowOfcarouselBox);
        thirdRowOfcarouselStrip.appendChild(thirdRowOfcarouselBox)
        thirdRowOfcarousel.appendChild(thirdRowOfcarouselStrip)


        document.getElementById('carousel_container').append(
            firstRowOfcarousel,
            secondRowOfcarousel,
            thirdRowOfcarousel
        )


        // console.log(response.list)


        // document.getElementById('carousel_container').append(firstRowOfcarousel, secondRowOfcarousel, thirdRowOfcarousel)

        // console.log(number,first2rows,lastRow);
    })
    .catch(err => console.error(err));