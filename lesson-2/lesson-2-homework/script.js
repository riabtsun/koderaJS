// Створи «профіль користувача»: змінні через const/let, усі примітивні типи, шаблонні рядки, перетворення типів.
// Покажи різницю == і === та пастки приведення типів на 3 прикладах.

const username = "John";      // Рядок (String)
const birthYear = 1994;       // Число (Number)
let isOnline = true;          // Булевий тип (Boolean)
let currentBalance = 150.50;  // Число з плаваючою комою
let bio = null;               // Відсутність значення (Null)
let city;                     // Невизначений тип (Undefined)

// Унікальний ідентифікатор користувача (Symbol)
const userId = Symbol("user_12345"); 
// Шаблонні рядки
const greeting = `Привіт, ${username}!`;

const stringBalance = String(currentBalance); // Явне: число -> рядок
const numericCity = Number(city);             // Явне: undefined -> NaN (Not a Number)
const booleanStatus = Boolean(birthYear);     // Явне: число 1994 -> true

// true
console.log(5 == "5");
console.log(1 == true);
console.log(0 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == []);

console.log(2 == true); //false
