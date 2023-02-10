// Написать функцию, принимающую на вход ФИО в виде одной строки.
// Функция должна возвращать объект вида 
// { first_name: “Имя”, last_name: “Фамилия”, patronymic_name: “Отчество”}

// Input: “Иванов Пётр Андреевич”

// Output: { first_name: “Пётр”, last_name: “Иванов”, patronymic_name: “Андреевич”}

const fio = 'Иванов Пётр Андреевич';

const formattingToObject = (string) => {
  const arrayFio = string.split(' ');
  const result = {
    first_name: arrayFio[1],
    last_name: arrayFio[0],
    patronymic_name: arrayFio[2] 
  }

  return result;
};

console.log(formattingToObject(fio));