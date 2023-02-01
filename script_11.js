// Заполнить двумерный массив таблицей умножения от 0 до 10 
// и вывести её в удобочитаемом виде.

const createTable = () => {
    let array = Array(10);

    for (let i = 1; i < 10; i++) {
        array[i] = [...Array(10)].map((_, j) => i * j);
    };

    for (let i = 1; i < 10; i++) {
        array[i].shift()
    };

    return array;
};

console.table(createTable());
