
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}


const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  const card = document.getElementById("userCard");

  const skillsList = user.skills.map(skill => `<li>${skill}</li>`).join("");

  card.innerHTML = `
    ${user.profilePic ? `<img src="${user.profilePic}" alt="Profile Picture" style="width:120px; border-radius:50%; box-shadow:0 0 8px gray;">` : ''}
    <p><strong>Full Name:</strong> ${user.fullName}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Gender:</strong> ${user.gender}</p>
    <p><strong>Date of Birth:</strong> ${user.dob}</p>
    <p><strong>Address:</strong> ${user.address}</p>
    <p><strong>City:</strong> ${user.city}</p>
    <p><strong>Skills:</strong> <ul>${skillsList}</ul></p>
  `;
}

// Logout button
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out successfully.");
  window.location.href = "login.html";
});
