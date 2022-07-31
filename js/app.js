"use strict";

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
    showCainerBtn();
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
    showCainerBtn();
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
    showCainerBtn();
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
  // document.getElementById("containerHide").classList.add("mainContainer1");
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

// slider

const authorBox = document.getElementById("authorClear");
const classBox = document.getElementById("classClear");
const circleBox = document.getElementById("circleClear");
// const box12 = document.getElementById("filter_author_1");
const productContainers = [document.querySelector(".circle-container")];
const authorContainers = [document.querySelector(".author-container")];

const nxtBtn1 = [document.querySelector(".nxt-btn1")];
const preBtn1 = [document.querySelector(".pre-btn1")];
const nxtBtn2 = [document.querySelector(".nxt-btn2")];
const preBtn2 = [document.querySelector(".pre-btn2")];

productContainers.forEach((item, i) => {
  let productDimensions = item.getBoundingClientRect();

  let productrWidth = productDimensions.width;

  nxtBtn1[i].addEventListener("click", () => {
    item.scrollLeft += productrWidth / 3;
  });

  preBtn1[i].addEventListener("click", () => {
    item.scrollLeft -= productrWidth / 3;
  });
});

authorContainers.forEach((item, i) => {
  let authorDimensions = item.getBoundingClientRect();

  let authorWidth = authorDimensions.width;

  nxtBtn2[i].addEventListener("click", () => {
    item.scrollLeft += authorWidth / 3;
  });

  preBtn2[i].addEventListener("click", () => {
    item.scrollLeft -= authorWidth / 3;
  });
});

// Container

const searchBtn = document.querySelector(".search");

const mm = document.querySelectorAll(".closeBtn");

function clearBox(elementID, elementID2, elementID3) {
  // Empty filter Container

  document.getElementById(elementID).innerHTML = "";
  document.getElementById(elementID2).innerHTML = "";
  document.getElementById(elementID3).innerHTML = "";

  // Remove Filter active class
  const items = [...document.querySelectorAll(".clicked")];
  for (const item of items) {
    item.classList.remove("clicked");
  }

  // remove filter Chosen class
  const items2 = [...document.querySelectorAll(".chosen")];
  for (const item of items2) {
    item.classList.remove("chosen");
  }

  closeContainer();
}

// id = "authorClear";
// id = "circleClear";
// id = "classClear";
// addFilter

// Filterbox
const authorFilterBox = document.querySelector(".author");
const gradeFilterBox = document.querySelector(".gradeBox");
const circleFilterBox = document.querySelector(".circleBox");

// add/delete Author filter and active
function addAuthorFilter(element) {
  if (element.classList.contains("clicked")) {
    document.getElementById("filter_" + element.id).remove();
    showContainer();
    closeContainerFromButton(authorBox, circleBox, classBox);
  } else {
    const elements1 = `
  <div id="filter_${element.id}" class="containerTag">
    ${element.innerText} <button
    onclick="removeParents(this);"
    id="closeActive"
    class="closeBtn"
  >&nbsp;
  <img src="assets/closeBtn.png" alt="" />
  </button>
  </div>
`;
    authorFilterBox.insertAdjacentHTML("beforeend", elements1);
    showContainer();
  }
}
// add/delete Grade filter and active
function addGradeFilter(element2) {
  if (element2.classList.contains("clicked")) {
    document.getElementById("filter_" + element2.id).remove();
    showContainer();
    closeContainerFromButton(authorBox, circleBox, classBox);
  } else {
    const elements1 = `
  <div id="filter_${element2.id}" class="containerTag">
    ${element2.innerText} <button
    onclick="removeParents(this);"
    id="closeActive"
    class="closeBtn"
  >&nbsp;
  <img src="assets/closeBtn.png" alt="" />
  </button>
  </div>
`;
    gradeFilterBox.insertAdjacentHTML("beforeend", elements1);
    showContainer();
  }
}
// add/delete Circle filter and active
function addCircleFilter(element3) {
  if (element3.classList.contains("chosen")) {
    document.getElementById("filter_" + element3.id).remove();
    showContainer();
    closeContainerFromButton(authorBox, circleBox, classBox);
  } else {
    const elements1 = `
  <div id="filter_${element3.id}" class="containerTag">
    ${element3.innerText} <button
    onclick="removeParents(this);"
    id="closeActive"
    class="closeBtn"
  >&nbsp;
  <img src="assets/closeBtn.png" alt="" />
  </button>
  </div>
`;
    circleFilterBox.insertAdjacentHTML("beforeend", elements1);
    showContainer();
  }
}

// Remove button (delete div from Filter Container)

function removeParents(e) {
  let root = e.parentNode;
  root.parentNode.removeChild(root);
  console.log(root);
  let newRoot = root.id;
  let newStr = newRoot.substr(7, newRoot.length);
  console.log(newStr);
  document.getElementById(newStr).classList.remove("clicked");
  document.getElementById(newStr).classList.remove("chosen");
  closeContainerFromButton(authorBox, circleBox, classBox);
}

// Main Container show/hide

function showContainer() {
  document.getElementById("containerHide").style.display = "flex";
}
function closeContainer() {
  document.getElementById("containerHide").style.display = "none";
}

// Clear main Container after hide
function showCainerBtn() {
  const activeBorder = [...document.querySelectorAll(".filter-buttons")];

  if (
    activeBorder[0].classList.contains("borderActive") ||
    activeBorder[1].classList.contains("borderActive") ||
    activeBorder[2].classList.contains("borderActive")
  ) {
  } else {
    closeContainerFromButton(authorBox, circleBox, classBox);
  }
}

function closeContainerFromButton(authorBox, circleBox, classBox) {
  if (
    (authorBox.textContent.trim() === "" && circleBox.textContent.trim()) ===
      "" &&
    classBox.textContent.trim() === ""
  ) {
    closeContainer();
  } else {
    console.log("⛔️ Element is NOT empty");
  }
}
