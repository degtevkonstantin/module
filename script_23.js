// Имеется массив строк. Строки в массиве могут повторяться любое количество раз.
//  Вывести уникальные строки и их количество в массиве.

// Input: [“aaa”, “bbb”, “ccc”, “aaa”, “bbb”, “”, aaa“”]

// Output: 
// aaa 3
// bbb 2
// ccc 1

const arr = [ 'aaa', 'bbb', 'ccc', 'aaa', 'bbb', '', 'aaa'];

const calcElements = (array) => {
  resultObj = array.reduce((accumulator, element) => {
    accumulator[element] = (accumulator[element] || 0) + 1;

    return accumulator;
    }, {});
  delete resultObj[''];
  
  return resultObj;
};

console.log(calcElements(arr));