const listEl = document.querySelector("#list");
const processBtn = document.querySelector("#processBtn");
const clicker = document.querySelector("#clicker");

const randomValuesLenght = 10;
const MIN_VALUE = 1;
const MAX_VALUE = 100;
const FILTER_VALUE = 50;

const generateRandomDigits = (length, min, max) => {
  const arr = [];
  for (let i = 0; i <= length; ++i) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
};

const doubledArray = (arr) => {
  return arr.map((num) => num * 2);
};

const filterArray = (arr) => {
  return arr.filter((num) => num > FILTER_VALUE);
};

const getSum = (arr) => {
  return arr.reduce((acc, value) => acc + value, 0);
};

function generateList() {
  const arr = generateRandomDigits(randomValuesLenght, MIN_VALUE, MAX_VALUE);
  const doubled = doubledArray(arr);
  const filtered = filterArray(doubled);
  const summed = getSum(filtered);
  return { arr: filtered, total: summed };
}

const renderList = () => {
  const data = generateList();

  data.arr.forEach((element) => {
    listEl.innerHTML += `<li>${element}</li>`;
  });
  const totalEl = document.createElement("p");
  totalEl.id = "totalEl";
  totalEl.innerText = `Total: ${data.total}`;
  listEl.insertAdjacentElement("afterend", totalEl);
};

processBtn.addEventListener("click", () => {
  listEl.innerHTML = "";
  const old = document.querySelector("#totalEl");
  if (old) old.remove();
  renderList();
});

let clicks = 0;

clicker.addEventListener("click", () => {
  clicks++;
  console.log(`Кліків: ${clicks}, this:`, this);
});
