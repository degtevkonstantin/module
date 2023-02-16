// Написать функцию, принимающую массив строк и выводящих их на экран, используя цикл while.
// Элементы из массива извлекать с помощью оператора .pop()

const arr = ['1', '2', '3', '4', '5'];

const outputNumber = (array) => {
  while (array.length > 0) {
    let number = array.pop();
    alert(number);
  };
  
};

outputNumber(arr);