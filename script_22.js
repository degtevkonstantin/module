// Написать функцию, которая принимает три параметра:
// массив array и два числа start и end.
// Функция должна возвращать массив фрагмент массива array, 
// начиная с индекса start и заканчивая end.

// Input: [13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6

// Output: [34, 21, 44]


const arr = [13, 14, 32, 23, 34, 21, 44, 47, 86];

const segmentArray = (array, start, end) => {
  if (start < 0 || end < start || end > (array.length - 1)){
    alert('Введены не корректные данные')
  }
  const resultArray = array.filter((_, index) => end >= index && index >= start)
  return resultArray;
}

console.log(segmentArray(arr, 4, 6));