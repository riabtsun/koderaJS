// const totalMinutes = 145;
// // Виведи: "2 години 25 хвилин"

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(`${hours} години ${minutes} хвилин`);

const priceInput = document.querySelector("#price");
const output = document.querySelector("#output");
const currencySelect = document.querySelector("#currency");
const localeSelect = document.querySelector("#locale");

function getSelectValue(select) {
  return select?.value || "";
}

function createFormatter(locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });
}

function formatePrice(price) {
  const value = Number(price);
  if (!Number.isFinite(value)) {
    return "Невірне значення ціни";
  }

  const currency = getSelectValue(currencySelect);
  const locale = getSelectValue(localeSelect);
  return createFormatter(locale, currency).format(value);
}

function updateOutput() {
  output.textContent = formatePrice(priceInput.value);
}

if (priceInput && output && currencySelect && localeSelect) {
  priceInput.addEventListener("input", updateOutput);
  currencySelect.addEventListener("change", updateOutput);
  localeSelect.addEventListener("change", updateOutput);

  updateOutput();
}

function padTime(value) {
  console.log(
    `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "00")}`,
  );
  return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "00")}`;
}

padTime(65);
padTime(3599);
padTime(0);

