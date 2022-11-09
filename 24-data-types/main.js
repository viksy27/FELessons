//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let num1 = 0.1;
let num2 = 0.2;
let num3 = ((num1 * 10) + (num2 * 10)) / 10;
console.log(num3);


//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let num4 = '1';
let num5 = 2;
let num6 = Number(num4) + num5;
console.log(num6);


//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let storage = +prompt('Enter flash drive storage in GB:', 0);
let storageInGb = storage * 1024;
const file = 820;
let amountStorage = Math.floor(storageInGb / file);
alert(`The flash drive will fit ${amountStorage} files`);


//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let sum = +prompt('Enter your sum, $', 0);
let price = +prompt('Enter the price of one chocolate, $', 0);
let chocolateAmount = sum / price;
let oddMoney = sum % price;
alert(`You can bye ${Math.floor(chocolateAmount)} chocolates, you have $${oddMoney}`);


// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). (хз, як через %)

let num7 = prompt('Enter a three-digit number');
let num7reverse = num7.split('').reverse().join('');
if (num7.length == 3) {
    alert(`Reverse of your number ${num7reverse}`);
} else {
    prompt('Enter a three-digit number');
}


//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let amountOfMoney = +prompt('Enter your amount of money, $', 0);
let persentOfDeposit = amountOfMoney * 0.05;
let userPresent = (persentOfDeposit / 12) * 2;
alert (`Your income $${userPresent}`);
