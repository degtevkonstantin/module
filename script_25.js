// Написать функцию, принимающую на вход строку, 
// написанную в стиле snake_case и возвращающую эту же строку,
// но уже в стиле camelCase.

// Input: find_and_replace_element_of_array

// Output: findAndReplaceElementOfArray

const formCamelCase = (string) => {
  const arrString = string.split(['_']);
  let resultArr = arrString.map((element) => {

    return element[0].toUpperCase() + element.slice(1);
  });
  resultArr[0] = arrString[0];
  resultString = resultArr.reduce((accumulator, currentValue) => {

    return accumulator + currentValue;
  });

  return resultString;
};

console.log(formCamelCase('find_and_replace_element_of_array'));
