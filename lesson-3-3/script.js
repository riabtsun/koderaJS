const { log } = require("console");

const checkBtn = document.querySelector("#checkBtn");
const priceEl = document.querySelector("#price");
const outputEl = document.querySelector("#output");

checkBtn.addEventListener("click", () => {
  const priceValue = Number(priceEl.value);

  (Number.isNaN(priceValue) ?? priceValue <= 0)
    ? (outputEl.textContent = `Введіть коректну ціну`)
    : (outputEl.textContent = `Ціна: ${priceValue} грн`);
});

const defaults = {
  theme: "light",
  language: "en",
  notifications: true,
  fontSize: 14,
};

function mergeConfig(userConfig) {
  userConfig.theme ??= defaults.theme;
  userConfig.language ??= defaults.language;
  userConfig.notifications ??= defaults.notifications;
  userConfig.fontSize ?? defaults.fontSize;
  console.log(userConfig);
  return userConfig;
}

mergeConfig({ theme: "dark", fontSize: 0 });
// { theme: "dark", language: "en", notifications: true, fontSize: 0 }

function configure(options) {
  const port = options.port ?? 3000;
  const debug = options.debug ?? false;
  const retries = options.retries ?? 3;
  return { port, debug, retries };
}

console.log(configure({ port: 10 }));
