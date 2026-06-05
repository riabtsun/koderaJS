const inputPrice = document.querySelector("#price");
const inputQuantity = document.querySelector("#quantity");
const selectDiscount = document.querySelector("#discount");
const selectDelivery = document.querySelector("#delivery");
const selectCurrency = document.querySelector("#currency");
const calcBtn = document.querySelector("#calcBtn");

const resultEl = document.querySelector("#result");
const subtotalEl = document.querySelector("#subtotal");
const discountEl = document.querySelector("#discountAmount");
const deliveryEl = document.querySelector("#deliveryCost");
const totalEl = document.querySelector("#total");
const errorEl = document.querySelector("#error");

const COURIER_COST = 150;

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

calcBtn.addEventListener("click", () => {
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
  }

  const subtotal = price * quantity;
  const discountAmount = subtotal * discount;
  const deliveryCost = delivery === "courier" ? COURIER_COST : 0;
  const total = subtotal - discountAmount + deliveryCost;

  subtotalEl.textContent = createFormatter(subtotal, currency);
  discountEl.textContent =
    discountAmount > 0
      ? `- ${createFormatter(discountAmount, currency)}`
      : createFormatter(0, currency);

  deliveryEl.textContent = createFormatter(deliveryCost, currency);
  totalEl.textContent = createFormatter(total, currency);
  resultEl.classList.remove("hidden");
  hideError();
});
