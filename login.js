window.onload = function () {

  const toggle = document.getElementById("togglePass");
  toggle?.addEventListener("click", function () {
    const passInput = document.getElementById("loginPassword");
    passInput.type = passInput.type === "password" ? "text" : "password";
  });

 
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Input:", loginEmail, loginPassword);
    console.log("Stored:", storedUser);

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (
      storedUser.email.toLowerCase() === loginEmail.toLowerCase() &&
      storedUser.password === loginPassword
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
};
