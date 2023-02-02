// Написать функцию, принимающую на вход строку, 
// написанную в стиле snake_case и возвращающую эту же строку,
// но уже в стиле camelCase.

// Input: find_and_replace_element_of_array

// Output: findAndReplaceElementOfArray

const FormCamelCase = (string) => {
  arrString = string.split(['_']);
  resultArr = arrString.map((element) => {

    return element[0].toUpperCase() + element.slice(1);
  });
  resultString = resultArr.reduce((accumulator, currentValue) => {

    return accumulator + ' ' + currentValue;
  });

  return resultString;
};

console.log(FormCamelCase('find_and_replace_element_of_array'));
