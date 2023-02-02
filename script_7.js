// Написать функцию, принимающую массив целых чисел и целое число число N.
//  В самой функции вычислить sum, прибавляя к нему каждый раз элементы 
//  массива по порядку до тех пор, пока sum не превысит заданное число N. 
//  Полученное значение функция должна вернуть.

// Input: [5,10, 15, 20, 10, 25, 20, 30, 15], 55

// Output: 60


const arr = [5,10, 15, 20, 10, 25, 20, 30, 15];

const calcSumElements = (number) => {

  return result = arr.reduce((sum, element) => {
    if (sum <= number) {

      return sum + element;
    } else {

      return sum;
    };
  });
};

console.log(calcSumElements(55))