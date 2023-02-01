// Заполнить двумерный массив таблицей квадратов целых чисел от 0 до 100 и 
// вывести её в удобочитаемом виде.  

const creatTable = () => {
  let array = Array(11);

  for (let counter = 0; counter < 11; counter++) {
    array[counter] = [...Array(10)].map((_, element) => ((element * 10 - 1) + counter ));
  };

  for (let i = 1; i < 11; i++) {
    resultArray = array.map((element1) => element1.map((element2) => element2 ** 2))
  };

  for (let i = 1; i < 11; i++) {
    resultArray[i][0] = array[i][0];
  };

  let counter = 0;

  resultArray[0] = array[0].map((element) => {
    element = counter;
    counter = counter + 1;
    return element
  })

  resultArray[0][0] = 'готово'
  
  return resultArray;
};
console.table(creatTable());

