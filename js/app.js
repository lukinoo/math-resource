const cardsWrapper = document.getElementById("cards-wrapper");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const childDropdown = document.querySelectorAll(".child-dropdown");
const childDropdownContent = document.querySelectorAll(
  ".child-dropdown-content"
);
const authForm = document.querySelector("#auth-form");
const passwordForm = document.querySelector("#pass-form");
const passFormRecoveryBtn = document.querySelector("#recovery");
const registrationBtnOnRecovery = document.querySelector(
  "#registration-on-recovery"
);
const emailForm = document.querySelector("#email-form");
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

// --------------- Filters

// filter btns
const filterBtns = document.querySelectorAll(".sorting .filter-buttons");

// filter containers
const filterContainers = document.querySelectorAll(".filter-container");

// დავამატე borderActive ფუნქცია .
window.addEventListener("load", () => {
  filterBtns[0].addEventListener("click", () => {
    removeActiveFilter(
      filterContainers[1],
      filterContainers[2],
      filterBtns[1],
      filterBtns[2]
    );
    filterContainers[0].classList.toggle("active-filter");
    filterBtns[0].classList.toggle("borderActive");
    console.log("test");
  });
  filterBtns[1].addEventListener("click", () => {
    removeActiveFilter(
      filterContainers[0],
      filterContainers[2],
      filterBtns[0],
      filterBtns[2]
    );
    filterContainers[1].classList.toggle("active-filter");
    filterBtns[1].classList.toggle("borderActive");
  });
  filterBtns[2].addEventListener("click", () => {
    removeActiveFilter(
      filterContainers[0],
      filterContainers[1],
      filterBtns[0],
      filterBtns[1]
    );
    filterContainers[2].classList.toggle("active-filter");
    filterBtns[2].classList.toggle("borderActive");
  });
});
// RemoveActiveFilter-ში დავამატე RemoveBorderActive.
const removeActiveFilter = (item1, item2, item3, item4) => {
  if (item1.classList.contains("active-filter")) {
    item1.classList.remove("active-filter");
  }
  if (item2.classList.contains("active-filter")) {
    item2.classList.remove("active-filter");
  }
  if (item3.classList.contains("borderActive")) {
    item3.classList.remove("borderActive");
  }
  if (item4.classList.contains("borderActive")) {
    item4.classList.remove("borderActive");
  }
};

const contentContainerItems = document.querySelectorAll(
  ".content-container .item"
);
const contentContainerAuthors = document.querySelectorAll(
  ".content-container .tag"
);

window.addEventListener("load", () => {
  contentContainerItems.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("chosen");
    });
  });
  contentContainerAuthors.forEach((author) => {
    author.addEventListener("click", () => {
      author.classList.toggle("clicked");
    });
  });
});

// const swiper = new Swiper('.swiper', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });

// console.log(swiper);

// ----x-----x---- Filters

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

registrationButton.addEventListener("click", () => {
  addClass(authForm);
  addClass(registerForm);
});

recoveryButton.addEventListener("click", () => {
  addClass(authForm);
  addClass(emailForm);
});

registrationButtonOnEmail.addEventListener("click", () => {
  addClass(registerForm);
  removeClass(emailForm);
});

passFormRecoveryBtn.addEventListener("click", () => {
  addClass(emailForm);
  removeClass(passwordForm);
});

registrationBtnOnRecovery.addEventListener("click", () => {
  addClass(registerForm);
  removeClass(passwordForm);
});

recoveryAgainBtn.addEventListener("click", () => {
  addClass(emailForm);
  removeClass(recoveryTab);
  removeClass(authContainer);
  errorMsgRemove(recoveryEmail);
  errorMsgRemove(failureIcon[4]);
  errorMsgRemove(errorMessage[4]);
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailFld.value.trim() !== "" && passFld.value.trim() !== "") {
    addClass(authForm);
    addClass(authContainer);
    addClass(myProfile);
  } else {
    engine(emailFld, 0);
    engine(passFld, 1);
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    region.value.trim() !== "" &&
    school.value.trim() !== "" &&
    grade.value.trim() !== "" &&
    registeringEmail.value.trim() !== "" &&
    repeatPassword.value.trim() !== "" &&
    registeringEmail.value.trim() !== ""
  ) {
    addClass(authContainer);
    addClass(successPage);
    registerForm.reset();
  } else {
    engine(firstName, 5);
    engine(lastName, 6);
    engine(region, 7);
    engine(school, 8);
    engine(grade, 9);
    engine(registeringEmail, 10);
    engine(newPassword, 11);
    engine(repeatPassword, 12);
  }
});

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (recoveryEmail.value.trim() !== "") {
    addClass(recoveryTab);
    addClass(authContainer);
    emailForm.reset();
  } else {
    engine(recoveryEmail, 4);
  }
});

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (recoveryPass.value.trim() !== "" && repeatRecPass.value.trim() !== "") {
    addClass(authContainer);
    addClass(successPassPage);
    addClass(passwordForm);
    passwordForm.reset();
  } else {
    engine(recoveryPass, 2);
    engine(repeatRecPass, 3);
  }
});

profileOptionTwo.addEventListener("click", () => {
  addClass(passwordForm);
  removeClass(authContainer);
  removeClass(myProfile);
});
