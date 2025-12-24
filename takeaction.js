const button = document.getElementById("toggle-mode");

button.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});




const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn"); // renamed variable

submitBtn.addEventListener("click", () => {

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value.trim();
  const message = document.getElementById("message").value.trim();


  if (!firstName || !lastName || !email || !date || !message) {
    alert("Please fill in all fields.");
    return;
  }


  const formData = {
    firstName,
    lastName,
    email,
    date,
    message,
    submittedAt: new Date().toLocaleString()
  };
  localStorage.setItem("contactFormData", JSON.stringify(formData));


  const msg = document.getElementById("successMsg");
  msg.style.display = "block";

  form.reset();

  submitBtn.textContent = "Successfully booked";
  submitBtn.disabled = true;


  setTimeout(() => {
    msg.style.display = "none";
  }, 4000);
});



document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contactBtn");
  const footer = document.getElementById("footer");

  contactLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default jump
    footer.scrollIntoView({ behavior: "smooth" });
  });
});



window.addEventListener("load", () => {
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    // Fill the progress bar smoothly
    const interval = setInterval(() => {
        progress += Math.random() * 10; // random increment
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            // Fade out preloader
            preloader.style.opacity = 0;
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 100);
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



document.getElementById("takeActionBtn").addEventListener("click", () => {
    document.querySelector(".cont").scrollIntoView({
        behavior: "smooth"
    });
});

