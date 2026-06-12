const ageInputEl = document.querySelector("#age");
const checkAgeBtn = document.querySelector("#checkAgeBtn");
const ageStatusEl = document.querySelector("#ageStatus");

const dayInputEl = document.querySelector("#day");
const checkDayBtn = document.querySelector("#checkDayBtn");
const dayQouteEl = document.querySelector("#dayQuote");

function checkAge(age) {
  const inputAge = Number(age);
  if (inputAge < 0 || Number.isNaN(inputAge)) return "Введіть коректний вік";
  if (inputAge <= 12) return "Дитина";
  if (inputAge <= 17) return "Підліток";
  if (inputAge <= 64) return "Дорослий";
  return "Пенсіонер";
}

checkAgeBtn.addEventListener("click", () => {
  ageStatusEl.textContent = checkAge(ageInputEl.value);
});

function getDaySentiment(day) {
  const inputDay = Number(day);
  if (inputDay === 1) return "Початок тижня — найважче позаду 💪";
  if (inputDay === 2 || inputDay === 3) return "Робочий ритм 🎯";
  if (inputDay === 4) return "Майже п'ятниця 🚀";
  if (inputDay === 5) return "Вихідні близько! 🎉";
  if (inputDay === 6 || inputDay === 7) return "Час відпочити 🌴";
  return "Невалідний день";
}

checkDayBtn.addEventListener("click", () => {
  dayQouteEl.textContent = getDaySentiment(dayInputEl.value);
});
