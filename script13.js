// Имеется, массив заполненный значениями разных типов данных. 
// Написать функцию, принимающую этот массив и выводящую на экран в 
// для каждого элемента “Это строка” если выражение строкового типа, 
// “Это число” для чисел и “Это булево значение” для значений типа boolean.
//  Для остальных значений вывести “Неизвестное значение”.

// Input: [“str”, 123, “123”, true, null, {}, 2]

// Output:

// Это строка
// Это число
// Это строка
// Это булево значение
// Неизвестное значение
// Неизвестное значение
// Это число


const arr = ['str', 123, '123', true, null, {}, 2];

const OutputType = (array) => {
  filterTypeArr = array.map((element) => {
    switch (typeof element){
    case typeof 'string': 
    return 'это строка';

      case typeof Number(element): 
      return 'это число';

      case typeof Boolean(element):
        return 'это булево значение';

      default:
      return 'Неизвестное значение';
  }
  });

  return filterTypeArr;
};

console.log(OutputType(arr));