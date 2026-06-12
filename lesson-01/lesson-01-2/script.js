console.log("Привіт зі script.js!");

document.querySelector("h1").style.color = "tomato";
console.log("Title:", document.querySelector("h1").textContent);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  // Згенеруй випадковий колір. Простий спосіб:
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;
});