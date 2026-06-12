function calculatePrice(price, quantity, hasDiscount) {
  const fullPrice = price * quantity;
  return hasDiscount ? fullPrice - (fullPrice / 100) * 10 : fullPrice;
}

// console.log(calculatePrice(100, 2, true));

function formatPrice(price) {
  return Intl.NumberFormat("ua-UK", {
    style: "currency",
    currency: "UAH",
  }).format(price);
}

// console.log(formatPrice(123.45));

let total = 0;

const items = [
  { name: "Книга", price: 250, qty: 2 },
  { name: "Олівець", price: 15, qty: 10 },
  { name: "Зошит", price: 45, qty: 5 },
];

function getItemSubtotal(item) {
  let subtotal = item.price * item.qty;
  return item.qty > 5 ? subtotal * 0.9 : subtotal;
}

function displayItem(item) {
  const subtotal = getItemSubtotal(item);
  console.log(`${item.name}: ${formatPrice(subtotal)}`);
}

for (const item of items) {
  total += getItemSubtotal(item);
  displayItem(item);
}

console.log(`Total: ${formatPrice(total)}`);
