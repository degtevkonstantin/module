// В функцию подается несколько массивов. Вернуть один массив со всеми элементами.

const arr1 = [1, 2, 3, 4,];
const arr2 = ['1', '2', '3', '4'];
const arr3 = [
  {
    1:1
  },
  {
    u: 'ss'
  }
];

const uniteArrays = (...arrays) => {
  let uniteArr = [];

  uniteArr = uniteArr.concat(...arrays);

  return uniteArr;
};

console.log(uniteArrays(arr1, arr2, arr3))