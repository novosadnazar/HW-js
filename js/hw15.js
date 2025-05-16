//завдання 1
const users = [
  { name: "Alice", balance: 3200 },
  { name: "Bob", balance: 4100 },
  { name: "Charlie", balance: 5800 },
  { name: "David", balance: 5000 },
  { name: "Eva", balance: 2816 },
];
const calculateTotalBalance = (users) => users.reduce((acc, balance) => acc + balance.balance, 0);


console.log(calculateTotalBalance(users)); // 20916
//завдання 2
const userss = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  { name: "Sheree Anthony", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Ross Vazquez", friends: ["Marilyn Mcintosh"] },
];

const getUsersWithFriend = (userss, friendName) => {
    const userFiltered = userss.filter((user) => {
        const findHasFriend = user.friends.includes(friendName)
        return findHasFriend 
       
    });
     const userNames = userFiltered.map((user) => user.name);
     return userNames;
};


console.log(getUsersWithFriend(userss, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(userss, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
//завдання 3
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const users1 = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
  {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
  { name: "Moore Hensley", friends: [] },
  { name: "Carey Barr", friends: ["Sharlene Bush"] },
  { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
];
// const getNamesSortedByFriendsCount = users => {
//     const userCopy = [...users];
//     // треба відсортувати копію нашого масиву за кількістю друзів
//     const sorteredUser = userCopy.sort((a, b) => {
//         const sorteredA = a.friends.length;
//         console.log(sorteredA);
//         const sorteredB = b.friends.length;
//         return sorteredA - sorteredB;
//     })
//     return sorteredUser.map((user) => user.name);

// };

// const getNamesSortedByFriendsCount = (users) => {
//   const userCopy = [...users];
//     const sorteredUser = userCopy.sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
//     return sorteredUser
// };

const getNamesSortedByFriendsCount = (users) => [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users1));      
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//4завдання
const users2 = [
  { name: "Alice", skills: ["html", "css", "js"] },
  { name: "Bob", skills: ["css", "react", "nodejs"] },
  { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];
const getSortedUniqueSkills = (users) => {
  const alldSkils = users.flatMap((user) => user.skills);
  const deleteUser = alldSkils.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
  return deleteUser.sort();
};
console.log(getSortedUniqueSkills(users))
console.log(getSortedUniqueSkills(users));