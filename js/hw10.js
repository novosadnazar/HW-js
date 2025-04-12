// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки
const array = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur ", "adipisicing", "elit",
];
const processArray = (array, callback) => callback(array);
const findSumString = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  return sum;
};

const findMinString = (arr) => {
  let minString = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < minString.length) {
      minString = arr[i];
    }
  }
  return minString;
};

const findMaxString = (arr) => {
  let maxString = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > maxString.length) {
      maxString = arr[i];
    }
  }
  return maxString;
};

console.log(`Сума всіх елементів масиву: ${processArray(array, findSumString)}`);
console.log(`Мінімальний елемент масиву: ${processArray(array, findMinString)}`);
console.log(`Максимальний елемент масиву: ${processArray(array, findMaxString)}`);


// Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції
const opperations = (callback, a, b) => callback(a, b);
const fnAdd = (a, b) => `Результат додавання числа ${a} + ${b} = ${a + b}`;
const fnMinus =  (a, b) => `Результат мінусовання числа ${a} - ${b} = ${a - b}`;
const fnMultiply = (a, b) => `Результат множення числа ${a} * ${b} = ${a * b}`;
const fnDivision =  (a,b) => `Результат ділення числа ${a} : ${b} = ${a / b}`;
console.log(opperations(fnAdd, 30, 4));
console.log(opperations(fnMinus, 40, 10));
console.log(opperations(fnDivision, 100, 5));
console.log(opperations(fnMultiply, 2, 10)) 