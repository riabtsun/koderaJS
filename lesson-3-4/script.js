const statusInput = document.querySelector("#status");
const showStatusBtn = document.querySelector("#showStatus");
const statusResultEl = document.querySelector("#statusResult");

const passwordInput = document.querySelector("#password");
const checkPasswordBtn = document.querySelector("#checkPassword");

function showStatusResult(message) {
  if (message === "loading") {
    statusResultEl.style.backgroundColor = "blue";
    statusResultEl.textContent = "Завантажуємо...";
  } else if (message === "success") {
    statusResultEl.style.backgroundColor = "green";
    statusResultEl.textContent = "Готово!";
  } else if (message === "error") {
    statusResultEl.style.backgroundColor = "red";
    statusResultEl.textContent = "Сталась помилка";
  } else if (message === "warning") {
    statusResultEl.style.backgroundColor = "yellow";
    statusResultEl.textContent = "Увага!";
  } else {
    statusResultEl.style.backgroundColor = "grey";
    statusResultEl.textContent = "Невідомий статус";
  }
}

function switchStatusResult(message) {
  switch (message) {
    case "loading":
      statusResultEl.style.backgroundColor = "blue";
      statusResultEl.textContent = "Завантажуємо...";
      break;
    case "success":
      statusResultEl.style.backgroundColor = "green";
      statusResultEl.textContent = "Готово!";
      break;
    case "error":
      statusResultEl.style.backgroundColor = "red";
      statusResultEl.textContent = "Сталась помилка";
      break;
    case "warning":
      statusResultEl.style.backgroundColor = "yellow";
      statusResultEl.textContent = "Увага!";
      break;
    default:
      statusResultEl.style.backgroundColor = "grey";
      statusResultEl.textContent = "Невідомий статус";
      break;
  }
}

const statusList = {
  loading: { bg: "blue", text: "Завантажуємо..." },
  success: { bg: "green", text: "Готово!" },
  error: { bg: "red", text: "Сталась помилка" },
  warning: { bg: "yellow", text: "Увага!" },
};

function statusListRender(message) {
  if (statusList[message]) {
    statusResultEl.style.backgroundColor = statusList[message].bg;
    statusResultEl.textContent = statusList[message].text;
    return;
  }

  statusResultEl.style.backgroundColor = "grey";
  statusResultEl.textContent = "Невідомий статус";
}

showStatusBtn.addEventListener("click", () => {
  //   showStatusResult(statusInput.value.trim());
  //   switchStatusResult(statusInput.value.trim());
  statusListRender(statusInput.value.trim());
});

function validatePassword(password) {
  const errors = [];
  if (!password.length) errors.push("Пароль обов'язковий");
  if (password.length < 8) errors.push("Мінімум 8 символів");
  if (!/[0-9]/.test(password)) errors.push("Має містити хоча б одну цифру");
  if (!/[A-Z]/.test(password)) errors.push("Має містити велику літеру");
  if (!/[!@#$%^&*]/.test(password)) errors.push("Має містити спецсимвол");
  console.log(errors);

  return errors;
}

checkPasswordBtn.addEventListener("click", () => {
  validatePassword(passwordInput.value);
});
