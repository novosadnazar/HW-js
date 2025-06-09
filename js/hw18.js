// Завдання 1
const item = document.querySelectorAll("#categories  .item");
item.forEach((element) => {
    const title = element.querySelector("h2").textContent;
    const elements = element.querySelectorAll("ul li").length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elements}`);
});
//завдання 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const list = document.getElementById("ingredients");
const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

list.append(...items);

//завдання 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

//завдання 4
let counterValue = 0;

const valueSpan = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateUI = () => {
  valueSpan.textContent = counterValue;
}

const increment = () => {
  counterValue += 1;
  updateUI();
}

const decrement = () => {
  counterValue -= 1;
  updateUI();
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);