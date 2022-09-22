// // myProfile page Hide/Show password

// // toggle the type attribute
// function showPassword(passwordId, eyeIcon) {
//   const password = document.querySelector("#" + passwordId);
//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
//   // toggle the eye slash icon
//   eyeIcon.classList.toggle("fa-eye-slash");
// }

// // Password change notification

// // swich pages password/notification

// const savePassword = document.querySelector("#remember-button");
// const passwordSection = document.querySelector(".recoverySection");
// const notificationSection = document.querySelector(".successful-pass-change");

// savePassword.addEventListener("click", function () {
//   passwordSection.style.display = "none";
//   notificationSection.style.display = "flex";
// });
