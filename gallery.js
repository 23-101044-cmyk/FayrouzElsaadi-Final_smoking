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
