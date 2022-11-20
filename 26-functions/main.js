// Напиши всі можливі варіанти створення функцій.

// function declaration statement
function sum(a, b) {
    return a + b;
}

// function definition expression
let square = function(number) {
    return number * number;
}
let x = square(4);

let factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1); 
};
console.log(factorial(3));

// arrow function
let age = prompt("How old are you?", 18);

let welcome = (age < 18) ?
  () => alert('Hi!') :
  () => alert("Hello!");
welcome();

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function sum(a2, b2, c2) {
    return a2 * b2 * c2;
}
console.log(sum.length);


//Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

let num = +prompt(`Enter first number`, 0);
let num2 = +prompt(`Enter second number`, 0);

function number(num, num2) {
    if (num < num2) {
        return -1;
    } else if (num > num2) {
        return 1;
    } else {
        return 0;
    }
}
alert(number(num, num2));


// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial2(n) {
    return (n != 1) ? n * factorial2(n - 1) : 1;
}
alert(factorial2(5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let firstValue = prompt(`Enter first number`);
let secondValue = prompt(`Enter second number`);
let thirdValue = prompt(`Enter third number`);

function value(firstValue, secondValue, thirdValue) {
    result = Number(firstValue + secondValue + thirdValue)
    return result;
}
alert(value(firstValue, secondValue, thirdValue));


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let side = function(side1, side2) {
    if(side2 == undefined) {
        return side1 * side1;
    } else {
        return side1 * side2;
    }
}
console.log(side(5, 6));


// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfect(number) {
let check = 0;
    for(let i = 1; i<=number / 2; i++) {
            if(number % i === 0) {
            check += i;
            }
        }

        if(check === number && check !== 0) {
        console.log("Это идеальное число.");
        }  
        else {
        console.log("Это не идеальное число.");
        }  
    }
isPerfect(6);