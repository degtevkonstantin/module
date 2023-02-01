// Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. 
// Вывести суммарный возраст всех пользователей.

// Input: [{ name: “Ivan”, age: 24 },
//  { name: “Oleg”, age: 16}, 
// { name: “Igor”, age: 24}]

arr = [
      { 
            name: 'Ivan', 
            age: 24 
      },
     {
            name: 'Oleg', 
            age: 16
      },
      { 
            name: 'Igor', 
            age: 24
      }
];

const sumAge = (array) =>{
      let result = array.reduce(function(accumulator, currentValue) {

	      return accumulator + currentValue.age;
      },0);

      return result;
};

console.log(sumAge(arr));
