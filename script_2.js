// Имеется массив, заполненный целочисленными числами. Написать функцию, принимающую
// этот массив и выводящую элементы только с четным индексом, не используя условный или
// тернарный оператор.

// Input: [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]

// Output: [14, 23, 13, 7, 3]

const arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

const filterIndex = (array) => {
  const resultArray = [];
  
  for (let i = 0; i < array.length; i += 2) {
    resultArray.push(array[i]);
  };

  return resultArray;
};

console.log(filterIndex(arr))