const slides = document.getElementsByClassName("carousel-item");

let slidePosition = 0;
const totalSlides = slides.length;
const breadcrumbContainer = document.getElementById('breadcrumbs')


function createBreadcrumbs() {
    for (let slide of slides) {
        const newBreadcrumb = document.createElement('span')
        newBreadcrumb.classList.add('breadcrumb')
        breadcrumbContainer.appendChild(newBreadcrumb)
    }
}

function makeBreadcrumbsInactive() {
    for (let breadcrumb of breadcrumbs) {
        breadcrumb.classList.remove('breadcrumb-active')
    }
}

function changeSlide() {
    hideAllSlides()
    makeBreadcrumbsInactive()

    slides[slidePosition].classList.add('carousel-item-visible')
    breadcrumbs[slidePosition].classList.add('breadcrumb-active')
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToPrevSlide() {
    hideAllSlides();
    console.log("vag")
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
        console.log(slidePosition)

    }
    else {
        slidePosition--
        console.log(slidePosition)
    };
    changeSlide()
}


function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    changeSlide();
}

setInterval(moveToNextSlide, 6000)

createBreadcrumbs()
const breadcrumbs = document.getElementsByClassName('breadcrumb')
breadcrumbs[0].classList.add('breadcrumb-active')

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)