// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const imgElement = document.querySelector("img");
imgElement.src =
  "https://www.5.ua/media/pictures/original/294284.jpg?t=1725796426";
console.log(imgElement);

// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
const linkElement = document.querySelector("link");
linkElement.href =
    "https://static.independent.co.uk/2024/09/26/15/iStock-1463288473-1.jpg?width=1200&height=630&fit=crop";
imgElement.alt = "ochechi";
console.log(imgElement);
console.log(linkElement);

// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст
const listElement = document.querySelector("ul li");
listElement.textContent = "Los Angeles";
console.log(listElement.textContent);

