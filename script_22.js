// Написать функцию, которая принимает три параметра:
// массив array и два числа start и end.
// Функция должна возвращать массив фрагмент массива array, 
// начиная с индекса start и заканчивая end.

// Input: [13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6

// Output: [34, 21, 44]


const arr = [13, 14, 32, 23, 34, 21, 44, 47, 86];

const editArr = (array, start, end) => {
  resultArray = array.filter((_,index) => {
  if (end >= index && index >= start) {
    
    return true;
  } else {

    return false;
  }

})

  return resultArray;
}

console.log(editArr(arr,4,6));