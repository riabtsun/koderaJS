const countDisplay = document.querySelector("#count");
const message = document.querySelector("#message");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");

let count = 0;

function updateMessage() {
  if (count === 0) {
    message.textContent = "Почни тиснути!";
  } else if (count < 5) {
    message.textContent = "Непогано, продовжуй!";
  } else if (count < 10) {
    message.textContent = "Молодець!";
  } else {
    message.textContent = "Шалено! Ти невпинний!";
  }
}

function updateUI() {
  countDisplay.textContent = count;
  updateMessage();

  if (count > 10) {
    countDisplay.classList.add("high");
    document.body.classList.add("alert");
  } else {
    countDisplay.classList.remove("high");
    document.body.classList.remove("alert");
  }
}

increaseBtn.addEventListener("click", () => {
  count += 1;
  updateUI();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});
