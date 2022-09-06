"use strict";

// Hide/Show up auth-form Page
const authForm = document.querySelector("#auth-form");
const autoFormHide = document.getElementById("recovery-on-auth");
autoFormHide.addEventListener("click", () => {
  authForm.style.display = "none";
  emailForm.style.display = "flex";
});

// Cancel Button Remember password, show up Authorization
const emailForm = document.querySelector("#email-form");
const cancelBtn = document.getElementById("cancel");
const sendMail = document.getElementById("enter-send");

cancelBtn.addEventListener("click", () => {
  emailForm.style.display = "none";
  authForm.style.display = "flex";
});

// Send Again Button Click Event
const recoveryPassword = document.querySelector(".successful-recovery-tab");
const clickAgain = document.getElementById("sendAgain");

clickAgain.addEventListener("click", () => {
  recoveryPassword.style.display = "none";
  emailForm.style.display = "flex";
});

sendMail.addEventListener("click", () => {
  emailForm.style.display = "none";
  recoveryPassword.style.display = "flex";
});
// Home Page button Click Event
const homePageBtn = document.getElementById("homePageBtn");

homePageBtn.addEventListener("click", () => {
  recoveryPassword.style.display = "none";
  authForm.style.display = "flex";
});
//

//

//

//

const cardsWrapper = document.getElementById("cards-wrapper");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const childDropdown = document.querySelectorAll(".child-dropdown");
const childDropdownContent = document.querySelectorAll(
  ".child-dropdown-content"
);

const passwordForm = document.querySelector("#pass-form");
const passFormRecoveryBtn = document.querySelector("#recovery");
const registrationBtnOnRecovery = document.querySelector(
  "#registration-on-recovery"
);

const registerForm = document.querySelector("#register-form");
const authLinktoClick = document.querySelector("#auth-link");
const recoveryButton = document.querySelector(".recovery");
const registrationButton = document.querySelector("#registration-on-auth");
const registrationButtonOnEmail = document.querySelector(
  "#registration-on-email"
);
const selectDropdown = document.getElementsByTagName("select");

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let email = id("email"),
  enterBtn = id("enter"),
  emailFld = id("email"),
  passFld = id("pass"),
  password = id("pass"),
  firstName = id("first_name"),
  lastName = id("last_name"),
  region = id("region"),
  school = id("school"),
  grade = id("grade"),
  recoveryEmail = id("recovery_email"),
  recoveryPass = id("recovery_password"),
  repeatRecPass = id("repeat_pass"),
  registeringEmail = id("register_email"),
  newPassword = id("new_password"),
  repeatPassword = id("repeat_new_pass"),
  registrationBtn = id("registration-button"),
  successPage = id("successful-registration"),
  recoveryTab = id("successful-recovery-tab"),
  recoveryAgainBtn = id("send-to-recovery-again"),
  authContainer = id("auth-container"),
  successPassPage = id("successful-pass-change"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"),
  errorMessage = classes("email-msg"),
  myProfile = id("my-profile"),
  profileOptionTwo = id("profile-option-two"),
  selectedDiv = classes("selectDiv");

const addClass = (element) => {
  element.classList.add("active");
};

const removeClass = (element) => {
  element.classList.remove("active");
};

const errorMsgAdd = (element) => {
  element.classList.add("error");
};

const errorMsgRemove = (element) => {
  element.classList.remove("error");
};

const successMsgAdd = (element) => {
  element.classList.add("success");
};

const successMsgRemove = (element) => {
  element.classList.remove("success");
};

let engine = (id, serial) => {
  if (id.value.trim() === "") {
    errorMsgAdd(id);
    errorMsgAdd(failureIcon[serial]);
    errorMsgAdd(errorMessage[serial]);
    successMsgRemove(id);
    successMsgRemove(successIcon[serial]);
  } else {
    errorMsgRemove(id);
    errorMsgRemove(failureIcon[serial]);
    errorMsgRemove(errorMessage[serial]);
    successMsgAdd(id);
    successMsgAdd(successIcon[serial]);
  }
};

// registrationButton.addEventListener("click", () => {
//   addClass(authForm);
//   addClass(registerForm);
// });

// recoveryButton.addEventListener("click", () => {
//   addClass(authForm);
//   addClass(emailForm);
// });

// registrationButtonOnEmail.addEventListener("click", () => {
//   addClass(registerForm);
//   removeClass(emailForm);
// });

// passFormRecoveryBtn.addEventListener("click", () => {
//   addClass(emailForm);
//   removeClass(passwordForm);
// });

// registrationBtnOnRecovery.addEventListener("click", () => {
//   addClass(registerForm);
//   removeClass(passwordForm);
// });

// recoveryAgainBtn.addEventListener("click", () => {
//   addClass(emailForm);
//   removeClass(recoveryTab);
//   removeClass(authContainer);
//   errorMsgRemove(recoveryEmail);
//   errorMsgRemove(failureIcon[4]);
//   errorMsgRemove(errorMessage[4]);
// });

// authForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (emailFld.value.trim() !== "" && passFld.value.trim() !== "") {
//     addClass(authForm);
//     addClass(authContainer);
//     addClass(myProfile);
//   } else {
//     engine(emailFld, 0);
//     engine(passFld, 1);
//   }
// });

// registerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (
//     firstName.value.trim() !== "" &&
//     lastName.value.trim() !== "" &&
//     region.value.trim() !== "" &&
//     school.value.trim() !== "" &&
//     grade.value.trim() !== "" &&
//     registeringEmail.value.trim() !== "" &&
//     repeatPassword.value.trim() !== "" &&
//     registeringEmail.value.trim() !== ""
//   ) {
//     addClass(authContainer);
//     addClass(successPage);
//     registerForm.reset();
//   } else {
//     engine(firstName, 5);
//     engine(lastName, 6);
//     engine(region, 7);
//     engine(school, 8);
//     engine(grade, 9);
//     engine(registeringEmail, 10);
//     engine(newPassword, 11);
//     engine(repeatPassword, 12);
//   }
// });

// emailForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (recoveryEmail.value.trim() !== "") {
//     addClass(recoveryTab);
//     addClass(authContainer);
//     emailForm.reset();
//   } else {
//     engine(recoveryEmail, 4);
//   }
// });

// passwordForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (recoveryPass.value.trim() !== "" && repeatRecPass.value.trim() !== "") {
//     addClass(authContainer);
//     addClass(successPassPage);
//     addClass(passwordForm);
//     passwordForm.reset();
//   } else {
//     engine(recoveryPass, 2);
//     engine(repeatRecPass, 3);
//   }
// });

// profileOptionTwo.addEventListener("click", () => {
//   addClass(passwordForm);
//   removeClass(authContainer);
//   removeClass(myProfile);
// });

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
