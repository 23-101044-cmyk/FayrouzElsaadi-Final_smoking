const slidesTrack = document.querySelector('.slides-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.arrow1');
const nextBtn = document.querySelector('.arrow2');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 2500;
let autoSlide;


function updateSlide() {
    slidesTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}


function startAutoSlide() {
    autoSlide = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}




nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

/* Init */
startAutoSlide();
