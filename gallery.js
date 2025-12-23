const images = [
  "assets/arrayimg.png",
    "assets/arrayimg2.png",
  "assets/homecard4.png",
  "assets/slider1.jpg",
  "assets/slider5.jpg",
  "assets/slider6.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.querySelector(".heroimg").style.backgroundImage = `url(${randomImage})`;




const popups = [
  document.querySelector(".popup"),
  document.querySelector(".popup2"),
  document.querySelector(".popup3"),
  document.querySelector(".popup4")
];

let current = 0;
const total = popups.length;

// Initialize positions
popups.forEach((p, i) => {
  p.style.left = i === 0 ? "0" : "100%";
});

// Function to slide to next
function goToSlide(nextIndex) {
  const currentPopup = popups[current];
  const nextPopup = popups[nextIndex];

  currentPopup.style.left = "-100%"; // current slides left
  nextPopup.style.left = "0";         // next slides in

  current = nextIndex;
}

// Auto-slide every 4 seconds
let interval = setInterval(() => {
  const next = (current + 1) % total;
  goToSlide(next);
}, 4000);

// Select SVGs directly for arrow clicks
const rightArrowSvg = document.querySelector(".right-arrow svg");
const leftArrowSvg = document.querySelector(".left-arrow svg");

rightArrowSvg.addEventListener("click", () => {
  const next = (current + 1) % total;
  goToSlide(next);
  resetInterval();
});

leftArrowSvg.addEventListener("click", () => {
  const prev = (current - 1 + total) % total;
  const currentPopup = popups[current];
  const prevPopup = popups[prev];

  currentPopup.style.left = "100%"; // current slides right
  prevPopup.style.left = "0";       // previous slides in

  current = prev;
  resetInterval();
});

// Reset interval after manual click
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    const next = (current + 1) % total;
    goToSlide(next);
  }, 4000);
}


const button = document.getElementById("toggle-mode");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});




document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contactBtn");
  const footer = document.getElementById("footer");

  contactLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default jump
    footer.scrollIntoView({ behavior: "smooth" });
  });
});






const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.getElementById("lightboxClose");

cards.forEach(card => {
  card.addEventListener("click", () => {

    const bgDiv = card.querySelector("div[class^='card-bg']");
    if (bgDiv) {

      const bgImage = window.getComputedStyle(bgDiv).backgroundImage;

      lightboxImg.style.backgroundImage = bgImage;

      lightbox.style.display = "flex";
    }
  });
});


lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.style.backgroundImage = "";
});


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightboxClose.click();
  }
});




window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});



document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href !== "#") {
      e.preventDefault(); 
      const preloader = document.getElementById("preloader");
      preloader.style.display = "flex";
      preloader.style.opacity = "1";
      setTimeout(() => {
        window.location.href = href;
      }, 300); 
    }
  });
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});


scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    const currentPage = window.location.pathname.split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
