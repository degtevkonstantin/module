// Написать функцию, принимающую число N, и возвращающую массив длиной N,
// заполненный числами Фибоначчи. Числа Фибоначчи - элементы числовой последовательности,
// в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух
// предыдущих чисел (пример, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233).


const createArrayFibonacciNumbers = (number) => {
  const array = [0, 1];

  while (array.length < number && 2 < number) {
    let index1 = array.length - 1;
    let index2 = array.length - 2;
    let arrNum = array[index1] + array[index2];
    array.push(arrNum);
  };

  return array;  
};

console.log(createArrayFibonacciNumbers(5));
