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
