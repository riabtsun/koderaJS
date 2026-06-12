const moodText = document.querySelector("#mood");

const energeticBtn = document.querySelector("#energetic");
const tiredBtn = document.querySelector("#tired");
const happyBtn = document.querySelector("#happy");
const thoughtfulBtn = document.querySelector("#thoughtful");
const resetBtn = document.querySelector("#reset");

function updateMood(mood) {
  moodText.textContent = `Як я зараз: ${mood.textContent}`;

  switch (mood.id) {
    case "energetic":
      document.body.style.backgroundColor = "lightgreen";
      break;
    case "tired":
      document.body.style.backgroundColor = "lightcoral";
      break;
    case "happy":
      document.body.style.backgroundColor = "lightyellow";
      break;
    case "thoughtful":
      document.body.style.backgroundColor = "lightgray";
      break;
  }
}

let moodButtons = [energeticBtn, tiredBtn, happyBtn, thoughtfulBtn];

moodButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateMood(btn);
  });
});

resetBtn.addEventListener("click", () => {
  moodText.textContent = "Як я зараз: [настрій]";
  document.body.style.backgroundColor = "";
});
