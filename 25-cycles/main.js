// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = +prompt('Enter your age:', 0);
if (age > 0 && age <= 11) {
    alert('Hi, kid!');
} else if (age >=12 && age <= 17) {
    alert('Hi, teenager))');
} else if ( age >=18 && age <= 59) {
    alert ('Hi, man');
} else if (age >= 60) {
    alert ('Hi! Have you seen dinosaurs?');
} else if (age < 0) {
    alert('How is it possible?');
} else {
    +prompt('Enter your age, motherfucker !!', 0);
}

alert('NEXT TASK)');
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let num = +prompt('Enter a number from 0 to 9: ');
switch(num) {
    case 0: {
        alert('0 - )');
        break;
    }
    case 1: {
        alert('1 - !');
        break;
    }
    case 2: {
        alert('2 - @');
        break;
    }
    case 3: {
        alert('3 - #');
        break;
    }
    case 4: {
        alert('4 - $');
        break;
    }
    case 5: {
        alert('5 - %');
        break;
    }
    case 6: {
        alert('6 - ^');
        break;
    }
    case 7: {
        alert('7 - &');
        break;
    }
    case 8: {
        alert('8 - *');
        break;
    }
    case 9: {
        alert('9 - (');
        break;
    }
    default: {
        +prompt('Enter a number from 0 to 9, baby!', 0)
    }
}
    
alert('NEXT TASK)');
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let start1 = +prompt('Enter the beginning of the range', 0);
let end1 = +prompt('Enter the end of the range', 0);
let sum1 = 0;
while (start1 <= end1) {
    sum1 += start1;
    start1++;
}
alert(`The sum of your range of numbers ${sum1}`);

alert('NEXT TASK)');
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let num1 = +prompt('Enter the first number', 0);
let num2 = +prompt('Enter the second number', 0);
while(num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
        num1 = num1 % num2;
    } else {
        num2 = num2 % num1
    }
}
let divisor = num1 + num2;
alert(`Greatest common divisor ${divisor}`);

alert('NEXT TASK)');
// Запитай у користувача число і виведи всі дільники цього числа.

let num3 = +prompt('Enter a number', 0);

for(let i = 1; i < num3; i++) {
    if(num3 % i == 0) {
        alert(`All divisors of your number ${i}`) 
    }
}

alert('NEXT TASK)');
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let num4 = 0;
let pal = 0;
while(num4.length !== 5) {
    num4 = prompt('Enter a five-digit number');
    pal = num4.split('').reverse().join('');

    if (num4 === pal) {
        alert("It's a palindrome!");
    } else {
        alert("It's not a palindrome!");
    }
}

alert('NEXT TASK)');
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumUser = +prompt('Enter your sum, $', 0);
let discountSum3 = sumUser - (sumUser * 0.03);
let discountSum5 = sumUser - (sumUser * 0.05);
let discountSum7 = sumUser - (sumUser * 0.07);

if (sumUser >= 200 && sumUser < 300) {
    alert(`Congratulations! You have received a 3% discount! Amount payable ${discountSum3}$`);
} else if (sumUser >= 300 && sumUser < 500) {
    alert(`Congratulations! You have received a 5% discount! Amount payable ${discountSum5}$`);
} else if (sumUser >= 500) {
    alert(`Congratulations! You have received a 7% discount! Amount payable ${discountSum7}$`);
} else {
    alert(`Amount payable ${sumUser}$`);
}

alert('NEXT TASK)');
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let num5 = 0;
let additional = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for(let i = 1; i <= 10; i++) {
    num5 = +prompt('Enter 10 numbers: ', 0);
    if (num5 === 0) {
        zero += 1;
    } else if (num5 % 2 === 0 && num5 > 0) {
        even += 1;
        additional += 1;
    } else if (num5 % 2 !== 0 && num5 > 0) {
        odd += 1;
        additional += 1;
    } else if (num5 % 2 === 0 && num5 < 0) {
        even += 1;
        negative += 1;
    }  else if (num5 % 2 !== 0 && num5 < 0) {
        odd += 1;
        negative += 1;
    } else if (num5 % 2 === 0 && num5 > 0) {
        odd += 1;
        additional += 1;
    }
}
alert(`More than zero = ${additional};
less than zero = ${negative};
zeros = ${zero};
even = ${even};
odd = ${odd}.`)

alert('NEXT TASK)');
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.  
// (думаю в задании опечатка, цикл должен завершаться при клике на "отмена")

while (true) {
    let day = confirm('Sunday. Do you wanna see next day?');
    if (day === false) {
        break;
    }
    day = confirm('Monday. Do you wanna see next day?');
    if (day === false) {
        break;
    } 
    day = confirm('Tuesday. Do you wanna see next day?');
    if (day === false) {
        break;
    }
    day = confirm('Wednesday. Do you wanna see next day?');
    if (day === false) {
        break;
    }
    day = confirm('Thursday. Do you wanna see next day?');
    if (day === false) {
        break;
    }
    day = confirm('Friday. Do you wanna see next day?');
    if (day === false) {
        break;
    } 
    day = confirm('Saturday. Do you wanna see next day?');
    if (day === false) {
        break;
    }
}

alert('NEXT TASK)');
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом:  кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

alert('Guess a number from 0 to 100 ;)'); 
let start = 0;
let end = 100;
let middle = 50;

while (start <= end) {
    middle = Math.floor((start + end) / 2);

    let userValue = confirm(`Your number ${middle} ?`); 
    
    if(userValue === true) {
        alert('Cheer! Victory!!)))');

    } else if (userValue === false) {

        let checkValue = confirm(`Your number more than ${middle}?`);

        if(checkValue === true) {
            start = middle + 1;
        } else if (checkValue === false) {
            end = middle - 1;
        }
    }
}

alert('NEXT TASK)');
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for(x = 2; x <= 9; x++) {
    console.log(`Multiplication table ${x}`)
    for(y = 1; y <= 10; y++) {
        console.log(`${x} * ${y} = ${ x * y}`)
    }
}

alert('NEXT TASK)');
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
// (cделала вместо введенной даты п-лем - текущую дату)

let date = new Date();
alert(`Today is ${date}`);
let question = confirm('Do you wanna see the next day?');

while(question === true) {
date.setDate(date.getDate() + 1)
question = confirm('Do you wanna see the next day?');

    if(question === true) {
        alert(`Next day is ${date}`);
    } else {
        break;
    }
}



