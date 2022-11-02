// Variable naming styles:
let snake_case;
let CamelCase;
let lowerCamelCase;

let userName = prompt('Enter your name, please!');
alert(`Hi, ${userName}!`);

const currentYear = 2022;
let userYearOfBirth = +prompt('Enter your year of birth, please!', 0);
let userAge = currentYear - userYearOfBirth;
alert(`You are ${userAge} years old ;)`);

let sideOfSquare = +prompt('Enter the length of the side of the square, please!', 0);
let perimeter = sideOfSquare * 4;
alert(`Perimeter of your square = ${perimeter}`);

let circleRadius = +prompt('Enter circle radius, please!', 0);
let circleArea = Math.PI * (circleRadius ** 2);
alert(`Area of your circle = ${circleArea}`);

let distance = +prompt('Enter the distance in km, please!');
let time = +prompt('How much time do you have?', 0);
let speed = (distance / time) * 60;
alert(`Your speed should be ${speed.toFixed(1)}/h`);

const currentEuro = 0.987899;
let userDollars = +prompt('Enter the amount in dollars, please!', 0);
let dollarsInEuro = currentEuro * userDollars;
alert(`Your amount is ${dollarsInEuro} euro.`);

