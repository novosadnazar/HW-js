// творіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount = {
    ownerName: "Nazar",
    accountNumber: "UA292032",
    balance: 1000000000,
    deposit(money) {
        this.balance += money;
        return alert(`Ваш баланс поповнено на ${money}$`)
    },
    withdraw(money) {
        if (money > this.balance) {
            alert(`Недостатньо коштів!У вас на рахунку ${this.balance}$`)
        } else {
            alert(`Операція пройшла успішно!З рахунку знято: ${money}$`)
        }
    },
}
if (confirm("Бажаєте поповнити рахунок?")) {
    const money = Number(prompt("Введіть суму для поповнення"));
    if (!isNaN(money) && money > 0) {
        bankAccount.deposit(money);
    } else {
        alert("Невірні дані!");
    }
}
if (confirm("Бажаєте зняти гроші?")){
    const money = Number(prompt("Введіть суму для виведення"));
    if(!isNaN(money) && money > 0){
        bankAccount.withdraw(money);
    } else{
        alert("Недостатньо грошей на рахунку.");
    }
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: 20,
  humidity: 50,
  windSpeed: 10,
  addTemperature: function () {
    this.temperature = parseFloat(
      prompt("Введіть температуру в градусах Цельсія:")
    );
  },
  belowZero: function () {
    return this.temperature < 0;
  },
};

weather.addTemperature();

if (weather.belowZero()) {
  console.log("температура нижче 0 градусів Цельсія");
} else {
  console.log("температура вище або рівна 0 градусів Цельсія");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const user = {
  name: "Nazar",
  email: "mechnik@gmail.com",
  password: "qwerty",

  login: function () {
    const addEmail = prompt("Введіть свій email:");
    const addPassword = prompt("Введіть свій пароль:");

    if (addEmail === this.email && addPassword === this.password) {
      console.log("Вхід успішний. Вітаємо, " + this.name + "!");
    } else {
      console.log("Невірний email або пароль.");
    }
  },
};

user.login();
//  Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
  title: "Тачки",
  director: "Джон Лассетер",
  year: 2006,
  rating: 7,

  findMoviw: function () {
    return this.rating < 0;
  },

}
movie.findMoviw()

if (movie.findMoviw()) {
console.log(" рейтинг фільму вище 8");
} else {
console.log("рейтинг фільму нижче 8");
}
