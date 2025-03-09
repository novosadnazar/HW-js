// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const coffee = "кава";
const tea = "чай";
const juice = "сік";

let result1 = prompt(`Виберіть напій зі списку: ${coffee} ${tea} ${juice}`);

if (result1) {
  result1 = result1.trim().toLowerCase();
}

switch (result1) {
  case coffee:
    alert(`Ви обрали ${coffee}`);
    break;
  case tea:
    alert(`Ви обрали ${tea}`);
    break;
  case juice:
    alert(`Ви обрали ${juice}`);
    break;
  default:
    alert("Такого напою немає в списку");
}

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний
let messenge = prompt("Введіть любий день тижня");
const monday = "понеділок";
const tuesday = "вівторок";
const wednesday = "середа";
const thursday = "четвер";
const friday = "п'ятниця";
const saturday = "субота";
const sunday = "неділя";
messenge = messenge.trim().toLowerCase();
switch (messenge) {
  case monday:
  case tuesday:
  case wednesday:
  case thursday:
  case friday:
    alert("Це робочий день");
    break;
  case saturday:
  case sunday:
    alert("Це вихідний день");
    break;
  default:
    alert("День введено не правильно");
    break;
 }

//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
let month = prompt("Введіть номер місяця (1-12):").trim().toLowerCase(); 
let season;
month = parseInt(month);
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;
  default:
    season = "НЕ правильний номер місяця"; 
    break;
}

season = alert(`Пора року: ${season}`);

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const red = "червоний";
const green = "зелений";
const yellow = "жовтий";
const color = prompt("Виберіть колір (червоний, зелений, жовтий)").trim().toLowerCase();
switch (color) {
  case red:
    alert("стоп");
    break;
  case green:
    alert("йти");
    break;
  case yellow:
    alert("чекати");
    break;
  default:
    alert("Taкого кольору не має!")
    break;
}

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const firstNumber = parseFloat(prompt("Введіть перше число:").trim().toLowerCase());
const oper = prompt("Введіть оператор (+, -, *, /):").trim().toLowerCase();
const secondNumber = parseFloat(prompt("Введіть друге число:").trim().toLowerCase());
let result;
switch (true) {
  case (oper === "+"):
    result = firstNumber + secondNumber
    break;
case (oper === "-"):
  result = firstNumber - secondNumber
  break;
  case (oper === "*"):
result = firstNumber * secondNumber
break;
case (oper === "/"):
  result = (secondNumber === 0) ? "Помилка: ділення на нуль!" : firstNumber / secondNumber;
  break;
  default:
    result = "Невідомий оператор"
    break;
}
result = alert(result);