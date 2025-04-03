// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
    for (let i = 0; i < array.length; i += 1){
console.log(`${i + 1} - ${array[i]}`);
    }
    return
}
logItems(["Mango", "Poly", "Ajax"]);

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord){
    let totals = 0;
    for (pricePerWord of message) {
        totals += pricePerWord;
    }
    return totals;
}
console.log(calculateEngravingPrice([20, 300, 1000]));

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
    let word = string.split(" ");
    let longestWord = "";
    for (let words of word) {
        if (words.length > longestWord.length) {
            longestWord = words;
        }
    }
    return longestWord;
}
console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit"));
   

//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
//Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
//Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  if (string.length <= 40) {
      return string;
  } else {
      return string.slice(0, 40) + " ..";
  }
}
console.log(
  formatString(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio, ea st consequuntur apeorporis ab, assumenda minima amet architecto et!"
  )
);

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) { 
    const wordss = message.toLowerCase();
  if (wordss.includes("sale") || wordss.includes("spam")) {
      return true;
  }
    return false;
}
console.log(checkForSpam("Lorem ipsum dolor sit amet sale "));
console.log(checkForSpam("Lorem ipsum dolor sit amet "));
