// Имеется массив объектов вида [{ name: “Milk”, price: 20, amount: 15 }, …],
// хранящий список товаров с их ценой и остатком на складе.
// Используя оператор map заполните новый массив суммарной стоимостью каждого товара на складе
// (price * amount).

// Input: [{ name: “Milk”, price: 20, amount: 15 },
// { name: “Coffee”, price: 30, amount: 17 },
// { name: “Tea”, price: 10, amount: 14 }]

// Output: [{ name: “Milk”, total: 300 },
// { name: “Coffee”, total: 510 },
// { name: “Tea”, total: 140 }]

let arr = [ {name: 'Milk', price: 20, amount: 15 },
{name:'Coffee', price: 30, amount: 17 },
{name:'Tea', price: 10, amount: 14 } ]

const newArr = arr.map((x,) => {
    return{
        name: x.name,
        total: x.price * x.amount,
    }
})

console.log(newArr);