/*
Задание 3
Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
*/

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => {
      if (user.gender === gender) {
        return user;
      }
    })
    .map(user => user.name);
};

// const getUsersWithGender = (users, gender) =>
//   users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
