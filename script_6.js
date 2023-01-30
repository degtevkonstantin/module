//     Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
//     Вывести имена тех пользователей, возраст которых больше 18 лет.

//     Input: [{ name: “Ivan”, age: 24 },
//     { name: “Oleg”, age: 16},
//     { name: “Igor”, age: 24}]
// Output:
// Ivan
// Igor


let arr = [{ name: 'Ivan', age: 24 },
{ name: 'Oleg', age: 16},
{ name: 'Igor', age: 24}]

let newArr = arr.filter ((x) => x.age > 18)

arr = newArr.map((x,) => {
    return x.name
})

console.log(arr)