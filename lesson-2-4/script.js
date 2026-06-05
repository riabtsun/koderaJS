// Прочитай значення input'ів.
// Конвертуй явно в числа.
// Перевір, що обидва — числа (через Number.isNaN).
// Якщо хоча б одне — NaN, виведи "Введіть числа". Інакше — суму.
const sumBtn = document.querySelector("#sumBtn");
const result = document.querySelector("#result");

sumBtn.addEventListener("click", () => {
  const aInput = document.querySelector("#a").value;
  const bInput = document.querySelector("#b").value;
  const a = Number(aInput);
  const b = Number(bInput);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    result.textContent = "Введіть числа";
    return;
  }
  result.textContent = a + b;
});

function safeAdd(a, b) {
  if (a === null || b === null) {
    return null;
  }
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return null;
  }

  return numA + numB;
}

console.log(safeAdd(5, 3)); // 8
console.log(safeAdd("5", "3")); // 8 — конвертує рядки
console.log(safeAdd("hello", 3)); // null — повертає null, якщо неможливо додати
console.log(safeAdd(null, 5)); // null
console.log(safeAdd(undefined, 5)); // null
