// Написать функцию, принимающую на вход массив чисел,
//  функцию фильтрации и функцию преобразования, которая 
// фильтрует массив, преобразует данные, а затем выводит их.

// Input: [1, 2, 3, 4], (el) => el %2 == 0, (el) => el * 2

// Output:
// 4
// 8

let arr = [1, 2, 3, 4];

const filt =  (array) => {
  newArr = array.filter((x) => x % 2 == 0);
  array = newArr.map((x) => x*2);

  return array;
}

console.log(filt(arr));