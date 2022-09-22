const myPasswordBtn = document.querySelector("#my-password-button");

const passMsg = document.querySelectorAll(".email-msg");
const failures = document.querySelectorAll(".failure-icon");
const successes = document.querySelectorAll(".success-icon");

//recovery password

const firstPasword = document.querySelector("#id_password");
const newPassword = document.querySelector("#new_password");
const newPasswordRep = document.querySelector("#repeat_new_pass");

const inputs = [firstPasword, newPassword, newPasswordRep];

myPasswordBtn.addEventListener("click", function () {
  inputs.forEach((item, i) => {
    if (item.value === "") {
      passMsg[i + 7].classList.add("error");
      failures[i + 7].classList.add("error");
      successes[i + 7].classList.remove("success");
      item.classList.add("error");
      item.classList.remove("success");
    } else if (item.value !== "") {
      passMsg[i + 7].classList.remove("error");
      failures[i + 7].classList.remove("error");
      successes[i + 7].classList.add("success");
      item.classList.add("success");
      item.classList.remove("error");
    }
  });

  if (inputs.every((item) => item.value !== "")) {
    myProfile.style.display = "none";
    successfulChange.style.display = "flex";
  }
});

//profile

const successfulChange = document.querySelector("#successful-pass-change");
const notificationMsg = document.querySelector("#notificationMsg");
const myProfile = document.querySelector("#my-profile");

const myProfileBtn = document.querySelector("#my-profile-button");

const firstName = document.querySelector("#my-profile-first_name");
const lastName = document.querySelector("#my-profile-last_name");
const school = document.querySelector("#my-profile-school");
const email = document.querySelector("#my-profile-register_email");
const password = document.querySelector("#password");

const firstSelector = document.querySelector(".menuVisual-one");
const secondSelector = document.querySelector(".menuVisual-two");

const inputArray = [
  firstName,
  lastName,
  firstSelector.firstChild.nextSibling,
  school,
  secondSelector.firstChild.nextSibling,
  email,
  password,
];

myProfileBtn.addEventListener("click", function () {
  inputArray.forEach((item, i) => {
    if (item.value !== undefined) {
      if (item.value === "") {
        passMsg[i].classList.add("error");
        failures[i].classList.add("error");
        successes[i].classList.remove("success");
        item.classList.add("error");
        item.classList.remove("success");
      } else if (item.value !== "") {
        passMsg[i].classList.remove("error");
        failures[i].classList.remove("error");
        successes[i].classList.add("success");
        item.classList.add("success");
        item.classList.remove("error");
      }
    }
  });

  if (firstSelector.firstChild.nextSibling.innerText === "") {
    passMsg[2].classList.add("error");
    failures[2].classList.add("error");
    successes[2].classList.remove("success");
    firstSelector.style.border = "1px solid #ff7474";
  } else {
    passMsg[2].classList.remove("error");
    failures[2].classList.remove("error");
    successes[2].classList.add("success");
    firstSelector.style.border = "1px solid #bdd36e";
  }

  if (secondSelector.firstChild.nextSibling.innerText === "") {
    passMsg[4].classList.add("error");
    failures[4].classList.add("error");
    successes[4].classList.remove("success");
    secondSelector.style.border = "1px solid #ff7474";
  } else {
    passMsg[4].classList.remove("error");
    failures[4].classList.remove("error");
    successes[4].classList.add("success");
    secondSelector.style.border = "1px solid #bdd36e";
  }

  if (
    inputArray.every((item) => item.value !== "") &&
    secondSelector.firstChild.nextSibling.innerText !== "" &&
    firstSelector.firstChild.nextSibling.innerText !== ""
  ) {
    myProfile.style.display = "none";
    successfulChange.style.display = "flex";
    notificationMsg.innerHTML = "ინფორმაცია წარმატებით შეიცვალა";
  }
});
