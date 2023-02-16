// Имеется двумерный массив. Пользуясь возможностями ES6 синтаксиса
//  объединить его в одномерный массив.

// Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const uniteArray = (array) => {
  array = array[0].concat(array[1], array[2]);

  return array;
};

console.log(uniteArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));