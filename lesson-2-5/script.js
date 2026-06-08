const inputPrice = document.querySelector("#price");
const inputQuantity = document.querySelector("#quantity");
const selectDiscount = document.querySelector("#discount");
const selectDelivery = document.querySelector("#delivery");
const selectCurrency = document.querySelector("#currency");
const calcBtn = document.querySelector("#calcBtn");

const promocodeEl = document.querySelector("#promocode");
const lastTotalEl = document.querySelector("#lastTotalValue");
const resultEl = document.querySelector("#result");
const subtotalEl = document.querySelector("#subtotal");
const discountEl = document.querySelector("#discountAmount");
const deliveryEl = document.querySelector("#deliveryCost");
const totalEl = document.querySelector("#total");
const errorEl = document.querySelector("#error");

const COURIER_COST = 150;
const PROMOCODES = ["SAVE10", "SAVE25", "FREESHIP"];

let previousFormattedTotal = null;
function createFormatter(amount, currency) {
  const locale = currency === "UAH" ? "uk-UA" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
}

function hideError() {
  errorEl.classList.add("hidden");
}

function calculate() {
  const price = Number(inputPrice.value);
  const quantity = Number(inputQuantity.value);
  const discount = Number(selectDiscount.value);
  const delivery = selectDelivery.value;
  const currency = selectCurrency.value;

  if (
    Number.isNaN(price) ||
    price <= 0 ||
    Number.isNaN(quantity) ||
    quantity <= 0
  ) {
    showError("Введіть коректні числові значення для ціни та кількості.");
    return;
  }

  let deliveryCost = delivery === "courier" ? COURIER_COST : 0;
  const subtotal = price * quantity;
  let promoDiscount = 0;
  const promocode = promocodeEl.value.trim().toUpperCase();

  if (promocode) {
    if (promocode === "SAVE10") {
      promoDiscount = 0.1;
    } else if (promocode === "SAVE25") {
      promoDiscount = 0.25;
    } else if (promocode === "FREESHIP") {
      deliveryCost = 0;
    } else {
      showError("Невалідний промокод");
      return;
    }
  }

  const discountAmount = subtotal * (discount + promoDiscount);
  const total = subtotal - discountAmount + deliveryCost;

  subtotalEl.textContent = createFormatter(subtotal, currency);
  discountEl.textContent =
    discountAmount > 0
      ? `- ${createFormatter(discountAmount, currency)}`
      : createFormatter(0, currency);

  deliveryEl.textContent = createFormatter(deliveryCost, currency);
  const formattedTotal = createFormatter(total, currency);

  if (previousFormattedTotal) {
    lastTotalEl.textContent = `Останній розрахунок: ${previousFormattedTotal}`;
  }

  totalEl.textContent = formattedTotal;
  previousFormattedTotal = formattedTotal;
  resultEl.classList.remove("hidden");
  hideError();
}

// [selectDiscount, selectDelivery, selectCurrency].forEach((select) => {
//   select.addEventListener("change", calculate);
// });

// [inputPrice, inputQuantity].forEach((input) => {
//   input.addEventListener("input", calculate);
// });

calcBtn.addEventListener("click", () => calculate());
