// завдання 1
//Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
const inputElement = document.querySelectorAll('input[name="color"]');
inputElement.forEach((inpt) => {
  inpt.addEventListener("change", () => {
    document.body.style.backgroundColor = inpt.value;
  });
});

document.body.style.backgroundColor = document.querySelector(
  'input[name="color"]:checked'
).value;
 
// завдання 2
//Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const inptEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");
inptEl.addEventListener("input", () => {
    const value = inptEl.value.trim();
    outputEl.textContent = value === "" ? "незнайомець" : value;
})

//завдання 3
//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
const input = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
textEl.style.fontSize = input.value + "px";
input.addEventListener("input", () => {
    const size = input.value + "px";
    textEl.style.fontSize = size;
});