const form = document.querySelector("#registerForm");
const successEl = document.querySelector("#success");

const passwordVisibilyti = document.querySelector("#visibilyti-password");

passwordVisibilyti.style.cursor = "pointer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

passwordVisibilyti.addEventListener("click", () => {
  if (registerForm.password.type === "password") {
    registerForm.password.type = "text";
  } else {
    registerForm.password.type = "password";
  }
});

const storageEmail = localStorage.getItem("email");
form.email.value = storageEmail;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const validatуMsg = validateEmail(email);

  if (validatуMsg) {
    showError(form.email.id, validatуMsg);
  } else {
    localStorage.setItem("email", email);
    clearErrors();
    form.classList.add("hidden");
    successEl.classList.remove("hidden");
  }
});

function showError(fieldId, message) {
  const errorEl = document.querySelector(`#error-${fieldId}`);
  const inputEl = document.querySelector(`#${fieldId}`);

  errorEl.textContent = message;
  inputEl.classList.add("invalid");
  inputEl.nextElementSibling.classList.add("error");
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));
}

function validateEmail(email) {
  if (!email) return "Введіть email";
  if (!EMAIL_REGEX.test(email)) return "Невалідний формат email";
  return null;
}
