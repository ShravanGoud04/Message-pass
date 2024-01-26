const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const message = document.querySelector(".message");
const error = document.querySelector(".error");

function displayMessage() {
  if (input.value) {
    message.textContent = input.value;
    input.value = "";
  } else {
    error.style.display = "block";
    setInterval(() => {
      error.style.display = "none";
    }, 10000);
  }
}
btn.addEventListener("click", displayMessage);
