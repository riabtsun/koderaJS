const registerForm = document.querySelector("#registerForm");

const successEl = document.querySelector("#success");
const submitBtn = document.querySelector("#submit");

const NAME_REGEX = /^[а-яА-ЯёЁa-zA-ZїЇіІєЄґҐ\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_HAS_UPPERCASE = /[A-ZА-ЯЇІЄҐ]/;
const PASSWORD_HAS_DIGIT = /[0-9]/;

const MIN_AGE = 13;
const MAX_AGE = 120;

function validateName(name) {
  if (!name) return "Введіть ім'я";
  if (name.length < 2) return "Ім'я має бути мінімум 2 символи";
  if (!NAME_REGEX.test(name)) return "Ім'я може містити тільки літери";
  return null;
}

function validateEmail(email) {
  if (!email) return "Введіть email";
  if (!EMAIL_REGEX.test(email)) return "Невалідний формат email";
  return null;
}

function validatePassword(password) {
  if (!password) return "Введіть пароль";
  if (password.length < 8) return "Пароль має бути мінімум 8 символів";
  if (!PASSWORD_HAS_UPPERCASE.test(password))
    return "Пароль має містити велику літеру";
  if (!PASSWORD_HAS_DIGIT.test(password)) return "Пароль має містити цифру";
  return null;
}

function validatePasswordConfirm(password, confirm) {
  if (!confirm) return "Підтвердіть пароль";
  if (password !== confirm) return "Паролі не співпадають";
  return null;
}

function validateAge(ageString) {
  if (!ageString) return null; // вік необов'язковий

  const age = Number(ageString);
  if (Number.isNaN(age)) return "Вік має бути числом";
  if (age < 13) return "Мінімальний вік — 13";
  if (age > 120) return "Перевір вік ще раз 🙂";
  return null;
}

function validateTerms(isAgree) {
  return isAgree ? null : "Потрібна згода з умовами";
}

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

function errorOnBlurToggle(inputName, error) {
  const errorEl = document.querySelector(`#error-${inputName}`);
  if (error) {
    showError(inputName, error);
  } else {
    registerForm[inputName].classList.remove("invalid");
    errorEl.classList.remove("error");
    errorEl.textContent = "";
  }
}

registerForm.name.addEventListener("blur", () => {
  const error = validateName(registerForm.name.value.trim());
  errorOnBlurToggle("name", error);
});

registerForm.email.addEventListener("blur", () => {
  const error = validateEmail(registerForm.email.value.trim());
  errorOnBlurToggle("email", error);
});

registerForm.password.addEventListener("blur", () => {
  const error = validatePassword(registerForm.password.value);
  errorOnBlurToggle("password", error);
});

registerForm.passwordConfirm.addEventListener("blur", () => {
  const error = validatePasswordConfirm(
    registerForm.password.value,
    registerForm.passwordConfirm.value,
  );
  errorOnBlurToggle("passwordConfirm", error);
});

registerForm.age.addEventListener("blur", () => {
  const error = validateAge(registerForm.age.value.trim());
  errorOnBlurToggle("age", error);
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = registerForm.name.value.trim();
  const email = registerForm.email.value.trim();
  const password = registerForm.password.value;
  const passwordConfirm = registerForm.passwordConfirm.value;
  const age = registerForm.age.value.trim();
  const terms = registerForm.terms.checked;

  clearErrors();

  const errors = {
    name: validateName(name),
    email: validateEmail(email),
    password: validatePassword(password),
    passwordConfirm: validatePasswordConfirm(password, passwordConfirm),
    age: validateAge(age),
    terms: validateTerms(terms),
  };

  let hasErrors = false;
  for (const [field, message] of Object.entries(errors)) {
    if (message) {
      showError(field, message);
      hasErrors = true;
    }
  }
  if (!hasErrors) {
    registerForm.classList.add("hidden");
    successEl.classList.remove("hidden");
    console.log("Дані для відправки:", { name, email, password, age });
  }
});
