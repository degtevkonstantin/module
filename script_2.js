// Имеется массив, заполненный целочисленными числами. Написать функцию, принимающую
// этот массив и выводящую элементы только с четным индексом, не используя условный или
// тернарный оператор.

// Input: [14, 53, 23, 53, 13, 55, 7, 34, 3, 6]

// Output: [14, 23, 13, 7, 3]

let arr = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];
const filtIndex = (array) => {
    newArr = array.filter((element, index) => {
        condition = index % 2;
        condition = Boolean(boolean)

        return !condition
        });

    return newArr;
};

console.log(filtIndex(arr))