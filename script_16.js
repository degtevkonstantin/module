// Написать функцию, принимающую на вход неотформатированный номер 
// телефона и возвращающую его в отформатированном виде.

// Input: 88005553535

// Output: 8 (800) 555-35-35

let nummer = '88005553535'

const phoneFormat = (nummer,) => {

  return nummer.replace(/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g, '8 ($2) $3-$4-$5');
};

console.log(phoneFormat(nummer))