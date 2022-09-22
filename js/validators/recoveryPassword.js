const pass = document.querySelector("#id_password");
const passwRep = document.querySelector("#repeatPassword");

const passMsg = document.querySelectorAll(".pass-msg");
const failures = document.querySelectorAll(".failure-icon");
const successes = document.querySelectorAll(".success-icon");

// failures.forEach((item) => item.classList.add("error"));

// swich pages password/notification

const savePassword = document.querySelector("#remember-button");
const passwordSection = document.querySelector(".recoverySection");
const notificationSection = document.querySelector(".successful-pass-change");

const inputArray = [pass, passwRep];

savePassword.addEventListener("click", () => {
  inputArray.forEach((item, i) => {
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
  });

  if (inputArray.every((item) => item.value !== "")) {
    passwordSection.style.display = "none";
    notificationSection.style.display = "flex";
  }
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

// Password change notification
