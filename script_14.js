// Написать функцию, принимающую два числа и любую операцию над этими числами (сложение, вычитание или др.).
//  В функции выполнить эту операцию и вернуть результат.



function calc (a, b, x){
    if (x == '+'){
        return a + b
    } else if (x == '-'){
        return a - b
    } else if (x == '*'){
        return a * b
    } else if (x == '/'){
        return a / b
    } else if (x == '**'){
        return a ** b
    }}
    console.log(calc(3, 4, '*'))
    
