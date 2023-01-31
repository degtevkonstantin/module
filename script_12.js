// Заполнить двумерный массив таблицей квадратов целых чисел от 0 до 100 и 
// вывести её в удобочитаемом виде.  


let arr = Array(10);
for (let i = 1; i < 11; i++){
    arr[i]=[...Array(10)].map((_, j) => ((j*10-1)+i))
}
for (let i = 1; i < 11; i++){
newArr = arr.map((x)=> x.map ((y) => y**2))
}
newArr[1] = arr[1]
for (let i = 1; i < 11; i++){
  newArr[i][0] = arr[i][0]
}
console.log(arr)
console.log(newArr)
console.log(newArr[1][1])

