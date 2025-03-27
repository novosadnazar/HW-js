//Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
string = friends.join(", ")
console.log(string);

//Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
cards.splice(3, 9, "10");
const cardToRemove = 'Карточка-3';
const cardToInsert = 'Карточка-6';
const cardToUpdate = 'Карточка-4';
const indexElement = cards.indexOf(cardToRemove); 
console.log(indexElement);
console.log(cards); 
if (indexElement !== -1) {
    cards.splice(indexElement, 1)
}
console.log(cards);
cards.push(cardToInsert);
console.log(cards);
cards.splice(1, 1, cardToUpdate); 

console.log(cards);
//Видалення (по індексу), метод indexOf()

