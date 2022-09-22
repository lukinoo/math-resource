const autoFormHide = document.getElementById("recovery-on-auth");
autoFormHide.addEventListener("click", () => {
  authForm.style.display = "none";
  emailForm.style.display = "flex";
});

const emailVal = document.querySelector("#email");
const passwordVal = document.querySelector("#id_password");
const emailMsg = document.querySelectorAll(".email-msg");
const failures = document.querySelectorAll(".failure-icon");
const successes = document.querySelectorAll(".success-icon");
const enterButton = document.querySelector("#enter");

const inputArray = [emailVal, passwordVal];

enterButton.addEventListener("click", () => {
  inputArray.forEach((item, i) => {
    if (item.value === "") {
      emailMsg[i].classList.add("error");
      failures[i].classList.add("error");
      successes[i].classList.remove("success");
      item.classList.add("error");
      item.classList.remove("success");
    } else if (item.value !== "") {
      emailMsg[i].classList.remove("error");
      failures[i].classList.remove("error");
      successes[i].classList.add("success");
      item.classList.add("success");
      item.classList.remove("error");
    }
  });
});

const recEmail = document.querySelector("#recovery_email");

const sendMail = document.getElementById("enter-send");
const emailFormVisible = document.querySelector("#email-form");

if (emailFormVisible.style.display !== "none") {
  sendMail.addEventListener("click", () => {
    if (recEmail.value === "") {
      emailMsg[2].style.display = "block";
      failures[2].classList.add("error");
      successes[2].classList.remove("success");
      recEmail.classList.add("error");
      recEmail.classList.remove("success");
    } else if (recEmail.value !== "") {
      emailMsg[2].style.display = "none";
      failures[2].classList.remove("error");
      successes[2].classList.add("success");
      recEmail.classList.add("success");
      recEmail.classList.remove("error");
    }
  });
}

// sendMail.addEventListener("click", () => {
//     emailForm.style.display = "none";
//     recoveryPassword.style.display = "flex";
//   });
