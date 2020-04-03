/*
Задание 9
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
*/

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

// const getNamesSortedByFriendsCount = users =>
//   users
//     .sort((prev, next) => prev.friends.length - next.friends.length)
//     .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
