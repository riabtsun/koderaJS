const button = document.querySelector("#changeBtn");
const greeting = document.querySelector("#greeting");
const counter = document.querySelector("#counter");

let clicks = 0;

button.addEventListener("click", () => {
  clicks = clicks + 1;
  greeting.textContent = "Натиснуто " + clicks + " раз!";
  counter.textContent = "Натиснуто: " + clicks + " разів";
});
