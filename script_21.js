// Написать функцию, которая принимает на вход объект вида 
// { first_name: ‘Ivan’, last_name: ‘Ivanov’, email: ‘ivanov@pochta.com’ } и возвращает строку вида:
//  “Ivanov Ivan E-mail: ivanov@pochta.com”

const Data = {
  first_name: 'Ivan',
  last_name: 'Ivanov',
  email: 'ivanov@pochta.com'
};

const UniteDataInString = (object) => {

  return (
    ''.concat (object.last_name,' ', object.first_name, ' E-mail: ', object.email,)
  );
};

console.log(UniteDataInString(Data));