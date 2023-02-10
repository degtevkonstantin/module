// Написать функцию, которая принимает на вход E-mal в виде строки 
// и возвращает объект вида { username, domain }

// Input: “ivanov.oleg@pochta.com”

// Output: {
//  username: “ivanov.oleg”,
//  domain: “pochta.com”
// }

const mail = 'ivanov.oleg@pochta.com';

const formattingToObject = (string) => {
  const arrayMailUser = string.split('@');
  const result = {
    username: arrayMailUser[0],
    ldomain: arrayMailUser[1],
  }

  return result;
};

console.log(formattingToObject(mail));