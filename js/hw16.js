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
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// Завдання 4
// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.


class StringBuilder {
  constructor(initialValue) {
    this.vAlue = initialValue;
  }

  get value() {
    return this.vAlue;
  }

  append(str) {
    this.vAlue += str;
  }

  prepend(str) {
    this.vAlue = str + this.vAlue;
  }

  pad(str) {
    this.vAlue = str + this.vAlue + str;
  }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.vAlue); // '.^'

builder.prepend('^');
console.log(builder.vAlue); // '^.^'

builder.pad('=');
console.log(builder.vAlue); // '=^.^='

// Напиши клас Car із зазначеними властивостями і методами.
class Car {
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    const newSpeed = this.speed + value;
    this.speed = newSpeed > this.maxSpeed ? this.maxSpeed : newSpeed;
  }

  decelerate(value) {
    const newSpeed = this.speed - value;
    this.speed = newSpeed < 0 ? 0 : newSpeed;
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000