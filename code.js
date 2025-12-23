
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
