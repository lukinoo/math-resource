"use strict";

// custom Select
//custom Select 1
const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

// custom Select 2
const select2 = document.querySelector(".select2");
const options_list2 = document.querySelector(".options-list2");
const options2 = document.querySelectorAll(".option2");

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  options_list.classList.toggle("borderVisual");
});

//show & hide options list 2
select2.addEventListener("click", () => {
  options_list2.classList.toggle("active");
  select2.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  options_list2.classList.toggle("borderVisual");
});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    options_list.classList.toggle("borderVisual");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});
//select option 2
options2.forEach((option2) => {
  option2.addEventListener("click", () => {
    options.forEach((option2) => {
      option2.classList.remove("selected");
    });
    select2.querySelector("span").innerHTML = option2.innerHTML;
    option2.classList.add("selected");
    options_list2.classList.toggle("active");
    options_list2.classList.toggle("borderVisual");
    select2.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});
// swich pages Myprofile/recovery
const profileInformation = document.querySelector("#profile-option-one");
const profilePassword = document.querySelector("#profile-option-two");
const profileForm = document.querySelector("#my-profile-form");
const passwordForm = document.querySelector("#postPassword");

profilePassword.addEventListener("click", function () {
  profilePassword.style.color = "black";
  profilePassword.style.fontWeight = "bold";
  profileInformation.style.color = "#707070";
  profileInformation.style.fontWeight = "400";
  profileForm.style.display = "none";
  passwordForm.style.display = "flex";
});

profileInformation.addEventListener("click", function () {
  profileInformation.style.color = "black";
  profileInformation.style.fontWeight = "bold";
  profilePassword.style.color = "#707070";
  profilePassword.style.fontWeight = "400";
  profileForm.style.display = "flex";
  passwordForm.style.display = "none";
});

// myProfile page Hide/Show password

// toggle the type attribute
function showPassword(passwordId, eyeIcon) {
  const password = document.querySelector("#" + passwordId);
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  eyeIcon.classList.toggle("fa-eye-slash");
}
