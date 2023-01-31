// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
//  Рассчитать минимальный и максимальный возраст всех пользователей.
//  Результат записать в объект вида { min: …, max: … }

// Input: [{ name: “Ivan”, age: 24 }, 
// { name: “Oleg”, age: 16},
//  { name: “Igor”, age: 24}]

// Output: { min: 16, max: 24 }

const arr =  [{ name: 'Ivan', age: 24 },
    { name: 'Igor', age: 23},
   { name: 'Oleg', age: 16}
  ]
  const  initialValue = arr[0]
let max = arr[0].age;
let min = arr[0].age;
const newArr = arr.reduce((accumulator,currentValue) => {
  console.log(accumulator.age)
  console.log(currentValue.age)
  if (accumulator.age <= currentValue.age >= max ){
    console.log(currentValue.age)

    max = currentValue.age

     }
if(accumulator.age > currentValue.age < min){
      min = currentValue.age
     }
     return{
      age: currentValue.age,
      Max: max,
      Min: min
     }


}, initialValue)

console.log(newArr)