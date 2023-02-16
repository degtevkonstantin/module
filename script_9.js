// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
//  Рассчитать минимальный и максимальный возраст всех пользователей.
//  Результат записать в объект вида { min: …, max: … }

// Input: [{ name: “Ivan”, age: 24 }, 
// { name: “Oleg”, age: 16},
//  { name: “Igor”, age: 24}]

// Output: { min: 16, max: 24 }

const arr =  [
  { 
    name: 'Ivan', 
    age: 24 
  },
  { 
    name: 'Igor', 
    age: 23
  },
  {
    name: 'Oleg', 
    age: 16
  }
];

const seatchMaxMin = (array) => {
  const  initialValue = array[0]
  let max = array[0].age;
  let min = array[0].age;
  const resultArr = array.reduce((accumulator,currentValue) => {
    if (accumulator.age <= currentValue.age >= max ) {
      max = currentValue.age;
    };

    if (accumulator.age > currentValue.age < min) {
      min = currentValue.age;
    };

    return {
      age: currentValue.age,
      Max: max,
      Min: min
    };
  }, initialValue);

  return {
    Min: resultArr.Min,
    Max: resultArr.Max
  };
};

console.log(seatchMaxMin(arr));