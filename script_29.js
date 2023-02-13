/*
Имеется объект {
  id: 123,
  first_name: ‘Ivan’,
  last_name: ‘Ivanov’,
  password: ’new password’,
  age: 15
 }

 Используя деструктуризацию, создать новые переменные firstName, 
 lastName, заполнив их значениями из first_name, last_name объектов.
*/

const user = {
  id: 123,
  first_name: 'Ivan',
  last_name: 'Ivanov',
  password: 'Mypwd!23',
  age: 15
}

const editUserData = (userData) => {
  const {id, first_name, last_name, password, age } = user;

  return {
    last_name,
    first_name
  };
};

console.log(editUserData(user));