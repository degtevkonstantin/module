// Написать функцию, которая принимает три параметра:
// массив array и два числа start и end.
// Функция должна возвращать массив фрагмент массива array, 
// начиная с индекса start и заканчивая end.

// Input: [13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6

// Output: [34, 21, 44]


const arr = [13, 14, 32, 23, 34, 21, 44, 47, 86];

const segmentArr = (array, start, end) => {
  if (start >= 0 && end >= start) {
    resultArray = array.filter((_, index) => {
      end >= index && index >= start ? true : false;
      return resultArray;
    });
  } else {
    return alert('заданны некоректные значения')
  }
}

console.log(segmentArr(arr, 4, 6));