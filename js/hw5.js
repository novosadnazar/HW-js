// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
// const coffee = "Кава";
// const tea = "Чай";
// const juice = "Сік";
// const result = prompt(`виберіть напій зі списку ${coffee} ${tea} ${juice}`);
// switch (result) {
//   case coffee:
//     alert(`Ви обрали ${coffee}`);
//     break;
//   case tea:
//     alert(` Ви обрали ${tea}`);
//     break;
//   case juice:
//     alert(`Ви обрали ${juice}`);
//   default:
//     alert("Такого напою немає в списку");
// }

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний
// const messenge = prompt("Введіть текст");
// const monday = "Понеділок";
// const tuesday = "Вівторок";
// const wednesday = "Середа";
// const thursday = "Четвер";
// const friday = "П'ятниця";
// const saturday = "Субота";
// const sunday = "Неділя";
// switch (messenge) {
//   case monday:
//   case tuesday:
//   case wednesday:
//   case thursday:
//   case friday:
//     alert("Це робочий день");
//     break;
//   case saturday:
//   case sunday:
//     alert("Це вихідний день");
//   default:
//     alert("День введено не правильно");
//     break;
// }

//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
// const month = parseInt(prompt("Введіть номер місяця (1-12):"));
// let season;
// switch (month) {
//   case month:
//   case 12:
//   case 1:
//   case 2:
//     season = "Зима";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = "Весна";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = "Літо";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     season = "Осінь";
//     break;
//   default:
//     season = "НЕ правильний номер місяця";
//     break;
// }
// console.log(` Пора року ${season}`);

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const red = "червоний";
const green = "зелений";
const yellow = "жовтий";
const color = prompt("Виберіть колір (червоний, зелений, жовтий)");
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
const firstNumber = 720;
const secondNumber = 40;
const oper = "/" ;
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
console.log(result);