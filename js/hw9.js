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
   