document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

 
  document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));

 
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value);
  const terms = document.getElementById("terms").checked;
  const profilePic = document.getElementById("profilePic").files[0];

  let isValid = true;


  function showError(id) {
    const field = document.getElementById(id);
    field.classList.add("error");
    isValid = false;
  }

  if (!/^[A-Za-z ]{3,}$/.test(fullName) || /(.)\1{2,}/.test(fullName) || /\d/.test(fullName)) {
    showError("fullName");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError("email");
  }

  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    showError("password");
  }

  if (password !== confirmPassword) {
    showError("confirmPassword");
  }

  if (!/^\d{10}$/.test(phone)) {
    showError("phone");
  }

  if (!gender) {
    alert("Please select gender.");
    isValid = false;
  }

  
  const age = new Date().getFullYear() - new Date(dob).getFullYear();
  if (!dob || age < 18) {
    showError("dob");
  }

  if (address.length < 10) {
    showError("address");
  }

  if (city === "") {
    showError("city");
  }

  if (skills.length === 0) {
    alert("Please select at least one skill.");
    isValid = false;
  }

  if (!terms) {
    alert("Please accept the terms.");
    isValid = false;
  }

  if (!isValid) return;


  if (profilePic) {
    const reader = new FileReader();
    reader.onloadend = function () {
      const profilePicBase64 = reader.result;
      saveUser(profilePicBase64);
    };
    reader.readAsDataURL(profilePic);
  } else {
    saveUser(null);
  }

  function saveUser(profilePicData) {
    const user = {
      fullName,
      email,
      password,
      phone,
      gender: gender.value,
      dob,
      address,
      city,
      skills,
      profilePic: profilePicData
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Now login.");
    window.location.href = "login.html";
  }
});
