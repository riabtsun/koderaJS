const itemsList = document.querySelector("#list");
const items = Array.from(document.querySelectorAll("#list li"));
const names = items.map((item) => item.textContent);
const sortBtn = document.querySelector("#sortBtn");

sortBtn.addEventListener("click", () => {
  itemsList.innerHTML = names
    .sort((a, b) => a.localeCompare(b, "uk"))
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");
});

function safeEqual(a, b) {
  if (Object.is(a, b)) { 
    return true;
  }

  if (typeof a === "number" && typeof b === "number") {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    }
  }

  if (a && b && typeof a === "object" && typeof b === "object") {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (const key of aKeys) {
      if (!Object.prototype.hasOwnProperty.call(b, key)) {
        return false;
      }

      const aValue = a[key];
      const bValue = b[key];

      if (Object.is(aValue, bValue)) {
        continue;
      }

      if (
        typeof aValue === "number" &&
        typeof bValue === "number" &&
        Number.isNaN(aValue) &&
        Number.isNaN(bValue)
      ) {
        continue;
      }

      return false;
    }

    return true;
  }

  return false;
}

console.log(safeEqual(1, 1)); // true
console.log(safeEqual(NaN, NaN)); // true
console.log(safeEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(safeEqual({ a: 1 }, { a: 2 })); // false
console.log(safeEqual(1, "1")); // false
