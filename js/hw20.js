// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)
const gallery = document.querySelector(".gallery");
const item = gallery.querySelector("li");
const img = item.querySelector("img");
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    gallery.scrollBy({ left: 200 });
  } else {
    gallery.scrollBy({ left: -200 });
  }
});
// Завдання 2

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

const controls = document.getElementById("controls")
const input = controls.querySelector("input");
const btnElCreat = controls.querySelector('[data-action="render"]')
const btnElDelete = controls.querySelector('[data-action="destroy"]')
const boxes = document.getElementById("boxes")

btnElCreat.addEventListener("click", createBoxes);
btnElDelete.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  amount = Number(input.value);
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;
    newElement.style.backgroundColor = randomColor();
    newElement.style.margin = "10px";
    boxes.appendChild(newElement);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}