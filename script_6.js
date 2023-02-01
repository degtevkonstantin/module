//     Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }].
//     Вывести имена тех пользователей, возраст которых больше 18 лет.

//     Input: [{ name: “Ivan”, age: 24 },
//     { name: “Oleg”, age: 16},
//     { name: “Igor”, age: 24}]
// Output:
// Ivan
// Igor


let arr = [
    {
         name: 'Ivan', 
         age: 24 
    },
    { 
        name: 'Oleg',
        age: 16},
    { 
        name: 'Igor', 
        age: 24
    }
]

const filterArray = (array) => {
    const filtArr = array.filter ((element,) => element.age > 18);
    const resultArr = filtArr.map((element,) => {
        alert(element.name);

        return element.name;
    });

    return resultArr;
};

console.log(filterArray(arr));