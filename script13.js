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

const filtType = (array) => {
    filtTypeArr = array.map((element) => {
        if (typeof element === 'string') {

            return 'это строка';
        } else if (typeof element === typeof Number(element)) {

            return 'это число';
        } else if (typeof element === typeof Boolean(element)) {

            return 'это булево значение';
        } else {

            return 'Неизвестное значение';
        };
    });

    return filtTypeArr;
};

console.log(filtType(arr));