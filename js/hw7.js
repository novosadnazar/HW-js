// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const mas = [3, 8, 100];
mas[1] = 10;
console.log(mas);


// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const greeting = ["Hello", "Hey", "Holla"];
greeting[3] = "hi";
console.log(greeting);

// Створити скрипт який поверне суму всіх чисел в масиві.
const listNumber = [12, 4, 56, 7, 10, 3];
let suma = 0;
for ( let i = 0; i < listNumber.length; i +=1){
if (listNumber[i] % 1 === 0) {
    suma += listNumber[i];
}
}
console.log(suma);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const arr = [4, 6, 7, 3, 9];
console.log(arr.length);
const number = arr[0];
console.log(number);
console.log(arr);
for(let io = 0; io < arr.length; io += 1){
    console.log(`число ${arr[io]}`);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const word = ["hey", "hi", "holla", "bonjure", "hello"];
for (let oi = 0; oi < word.length; oi+= 1) {
    if (word[oi].length > 5) {
        console.log(`${word[oi]} містить більше 5 символів`);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const secondNumber = [20, 10, 40, 99, 1, 29, 9, 400, 23, 111];
let max = secondNumber[0];
for (let r = 1; r < secondNumber.length; r+= 1) { 
    if (max < secondNumber[r]) { 
        max = secondNumber[r];
    }
}
console.log(max); 

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const num = [23, 87, 14, 56, 92, 3, 78, 45, 11, 67];
let f = [];
let cos = 0;
for (let s = 0; s < num.length; s += 1){
    if (num[s] % 2 === 0) {
        f[cos] = num[s]
    }
}
console.log(`Парні числа ${f}`);
