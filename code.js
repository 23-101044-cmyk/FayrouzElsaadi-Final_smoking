
if (!localStorage.getItem("localUser")) {
  const localUser = {
    username: "souad",
    password: "123"
  };
  localStorage.setItem("localUser", JSON.stringify(localUser));
}

// Login function
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("localUser"));

  if (username === storedUser.username && password === storedUser.password) {
    // Correct login
    window.location = "home.html";
  } else {
    // Wrong username or password
    document.getElementById("error").textContent = "ERROR: wrong username or password, try again.";
  }
}



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
