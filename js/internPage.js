const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
// button part
const enterAnswer = document.querySelector("#enter-answer-button");
const correctPassword = document.querySelector(".correctPassword");
const wrongPassword = document.querySelector(".wrongPassword");
const hintButton = document.querySelector("#hint-button");

// Pop up
function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

hintButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// button part

function getInputValue() {
  let internInput = document.getElementById("internInput").value;
  if (internInput === "correct") {
    enterAnswer.style.display = "none";
    correctPassword.style.display = "flex";
    wrongPassword.style.display = "none";
  } else {
    wrongPassword.style.display = "block";
  }
}
