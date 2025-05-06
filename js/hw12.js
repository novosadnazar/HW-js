// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "nazar",
  age: 14,
  hobby: "text",
  premium: true,
};
user.mood = "Happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);
const keys = Object.keys(user);
console.log(keys);
for (let i of keys) {
  console.log(`${i}: ${user[i]}`);
}

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей

const objA = {
  propertyA: false,
  propertyB: true,
  propertyC: false,
};
const countProps = (obj) => {
  return Object.keys(objA).length;
};
countProps()

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
  roman: 4,
  nazar: 7,
  dima: 2,
  vlad: 8,
};

const findBestEmployee = (employees) => {
  const keys = Object.keys(employees);
  let bestEmployee = "";
  let maxTasks = 0;

  for (let name of keys) {
    console.log(`${name}: ${employees[name]}`);
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

findBestEmployee(employees)

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salaries = {
  roman: 1000,
  nazar: 1100,
  dima: 8000,
  vlad: 6000,
};

const countTotalSalary = (employees) => {
  for (let name in employees) {
    console.log(`"${name}":"${employees[name]}"`);
  }
};

countTotalSalary(salaries);


// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const getAllPropValues = (arr, prop) => {
  // console.log(arr);
  // console.log(prop);
  let result = [];
  for (const item of arr) {
    // console.log(item);
    // console.log(item[prop]);
    result.push(item[prop])
  }
  return result;
}


const product = [
  {
    name: "apple",
    price: 112,
    count: 20,
    weight: "2kg",
  },

  {
    name: "banan",
    price: 150,
    count: 29,
    weight: "4kg",
  },

  {
    name: "orange",
    price: 90,
    count: 199,
    weight: "10kg",
  },
];

console.log(getAllPropValues(product, "name"));
console.log(getAllPropValues(product, "price"));
console.log(getAllPropValues(product, "count"));
console.log(getAllPropValues(product, "weight"));


// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = (allProdcuts, productName) => {
  // console.log(allProdcuts);
  // console.log(productName);
  for (const productC of allProdcuts) {
    console.log(productC);
    if (productC.name === productName) {
      return productC.price * productC.count;
    }
  }

}

const productB = [
  {
    name: "apple",
    price: 112,
    count: 20,
    weight: "2kg",
  },

  {
    name: "banan",
    price: 150,
    count: 29,
    weight: "4kg",
  },

  {
    name: "orange",
    price: 90,
    count: 199,
    weight: "10kg",
  },
];
const { name, price, count, weight, } = productB



console.log(calculateTotalPrice(productB, "apple"));
console.log(calculateTotalPrice(productB, "banan"));
console.log(calculateTotalPrice(productB, "orange"));