// Створити об"єкт, що описує автомобіль (виробник, модель, рік випуску, середня шв, обсяг пливного баку, середня витрата палива на 100км), і наступні методи для роботи з цим об'єктом:
// 1. метод, який виводить на екран інформацию про автомобіль
// 2. зміна імені водія
// 3. метод для перевірки імені водія
// 4. підрахунок необхідного часу та к-ті палива для подолання переданної відстані з середньою шв-ю
// 5. враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1год

let auto = {
    manufacturer: 'USA',
    model: 'Dodge',
    year: 2022,
    avgSpeed: 120,
    fuel: 60,
    fuelConsumption: 15,
    driver: 'Melman',
}

alert(Object.entries(auto).join('\n'));
let newDriverName = prompt('Enter a new driver name: ');
auto.driver = newDriverName;

let changeNameDriver = confirm('Do you wanna change the name of the driver?');
while (changeNameDriver === true) {
    newDriverName = prompt('Enter a new driver name: ');
    auto.driver = newDriverName;
    break;
}

let distance = +prompt('Enter your distance: ', 0);

let fullMinutes = (distance / auto.avgSpeed) * 60;
let fullHours = Math.floor(distance / auto.avgSpeed);
let minutes = fullMinutes % auto.avgSpeed;
console.log(minutes)


if(time > 4) {
    let hours = (time / 4).toFixed(2);
    alert(`You need ${hours}h`)
}
console.log(minutes);



