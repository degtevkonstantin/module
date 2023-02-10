// Написать функцию, принимающую два числа и любую операцию над этими числами (сложение, вычитание или др.).
//  В функции выполнить эту операцию и вернуть результат.



const calculator = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    case '**':
      return firstNumber ** secondNumber;
    default:
      return 'Не корректная операция'
  }
};

console.log(calculator(3, 4, '*'));

