
const UniteArray = (array) => {
  array = array[0].concat(array[1], array[2]);

  return array;
};

console.log(UniteArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));