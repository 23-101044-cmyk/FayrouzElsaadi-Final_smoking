const slidesTrack = document.querySelector('.slides-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.arrow1');
const nextBtn = document.querySelector('.arrow2');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 3500;
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



let array1 = [
    {
        img: "assets/footerimg1.png",
        title: "Healthier Lungs",
        text: "Within weeks of quitting, lung function improves and breathing becomes easier.",
    },
        {
        img: "assets/footerimg2.png",
        title: "Financial Freedom",
        text: "Save thousands yearly and invest in what truly matters to you.",
    },
        {
        img: "assets/footerimg3.png",
        title: "Better Quality of Life",
        text: "More energy, better sleep, and improved overall well-being.",
    },

];


let html = "";
for (let i = 0; i < array1.length; i++) {
  html += `


                <div class="card2">
                    <div class="card22imgdiv">
                        <img src="${array1[i].img}" alt="" class="card22img">
                        <h5 class="card22title">${array1[i].title}</h5>
                    </div>
                    <p class="card22p">${array1[i].text}</p>
                </div>
        
    
  `;
}

document.getElementById("array1").innerHTML = html;



const header = document.querySelector('header');
const triggerSection = document.querySelector('#trigger-section');

window.addEventListener('scroll', () => {
    const sectionTop = triggerSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});



const button = document.getElementById("toggle-mode");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


const heroButton = document.querySelector('.herotext');
const sec1 = document.getElementById('trigger-section');

heroButton.addEventListener('click', () => {
  sec1.scrollIntoView({ behavior: 'smooth' });
});
