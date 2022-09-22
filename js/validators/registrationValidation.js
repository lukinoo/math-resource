//show forms
const registrationBtn = document.getElementById("registration-button");

const registration = document.getElementById("registration-container");
const registrationNotification = document.getElementById(
  "successful-registration"
);

const passMsg = document.querySelectorAll(".email-msg");
const failures = document.querySelectorAll(".failure-icon");
const successes = document.querySelectorAll(".success-icon");

//inputs

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const school = document.querySelector("#school");
const email = document.querySelector("#register_email");
const password = document.querySelector("#id_password");
const repeatePassword = document.querySelector("#repeat_new_pass");

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
  repeatePassword,
];

registrationBtn.addEventListener("click", () => {
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
    registration.style.display = "none";
    registrationNotification.style.display = "flex";
  }
});
