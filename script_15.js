// Написать функцию, принимающую на вход массив чисел,
//  функцию фильтрации и функцию преобразования, которая 
// фильтрует массив, преобразует данные, а затем выводит их.

// Input: [1, 2, 3, 4], (el) => el % 2 == 0, (el) => el * 2

// Output:
// 4
// 8

const arr = [1, 2, 3, 4];

const filterAndConvertion = (array, filter, transformation) => {
  const newArr = array.filter(filter);
  const array = newArr.map(transformation);

  return array;
}

console.log(filterAndConvertion(arr,(el) => el % 2 == 0, (el) => el * 2));