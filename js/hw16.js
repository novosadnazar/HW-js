//  Завдання 1
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function ({ login, email }) {
    this.login = login,
        this.email = email
}

Account.prototype.getInfo = function () {
    console.log(`login ${this.login}, email: ${this.email}`);
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Завдання 2
// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const user = new User("Alex", 21, 1000);
user.getInfo();

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

console.log(storage.getItems()); // ["Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор"]

storage.addItem('Дроїд');
console.log(storage.items); // ["Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд"]

storage.removeItem('Пролонгер');
console.log(storage.items); // ["Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд"]
