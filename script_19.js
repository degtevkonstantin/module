// Написать функцию, которая принимает на вход E-mal в виде строки 
// и возвращает объект вида { username, domain }

// Input: “ivanov.oleg@pochta.com”

// Output: {
//  username: “ivanov.oleg”,
//  domain: “pochta.com”
// }

let mail = 'ivanov.oleg@pochta.com'

const formString = (string) => {
  arrayMailUser = string.split('@');
  Result = {
    username: arrayMailUser[0],
    ldomain: arrayMailUser[1],
  }

  return Result;
};

console.log(formString(mail));