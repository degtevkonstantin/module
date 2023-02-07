// Имеется массив с финансовыми переводами вида: 
// [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...]. 
// Вычислить среднюю сумму всех переводов и рассчитать для каждого объекта 
// отклонение от среднего и записать в поле diff. 
// Например, при средней сумме перевода в 2000 отклонение для перевода 
// { from: ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 1000;

// Input: [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, 
// { from: ‘Ivan’, to: ‘Igor’, amount: 2000}, 
// { from: ‘Oleg’, to: ‘Igor’, amount: 1500}]

// Output: 2000, [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500, diff: 500}, 
// { from: ‘Ivan’, to: ‘Igor’, amount: 2000, diff: 0}, 
// { from: ‘Oleg’, to: ‘Igor’, amount: 1500, diff: -500}]


const arr = [
  {
    from: 'Ivan',
    to: 'Oleg',
    amount: 2500
  },
  {
    from: 'Ivan',
    to: 'Igor',
    amount: 2000
  },
  {
    from: 'Oleg',
    to: 'Igor',
    amount: 1500
  }
];

const calcDiff = (array) => {
  const sumAmout = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  const medium = sumAmout / array.length
  const result = array.map((element) => {
    return {
      from: element.from,
      to: element.to,
      amount: element.amount,
      diff: medium - element.amount
    };
  });

  return result;
}

console.log(calcDiff(arr));