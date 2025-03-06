const result = 5 + 5 + "5";
console.log(typeof(result));
console.log(result);
const name1 = "my";
const name2 = "name is";
const nameResult = `${name1} ${name2} Viktor`;
console.log(nameResult);

const userName = "Олександро";
const payMent = "500грн";
console.log();
alert(`Дякуємо ${userName} до сплати ${payMent}`);

const email = "novosadnazar@icloud.com";
const resultMail = email.includes("@");
console.log(resultMail);

const admin = "admin";
const resultt = prompt("ти адмін чи юзер");
console.log(admin===result.trimStart());