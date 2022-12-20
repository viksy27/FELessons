//Створити сторінку, що показує нумерований список пісень

let playList = [
    {author: "THE BROKEN VIEW", song:"SOMETHING BETTER"},
    {author: "GREEN DAY", song:"21 GUNS"}, 
    {author: "YODELICE", song:"FAMILIAR FIRE"},
    {author: "PLACEBO", song:"BEGIN THE END"},
    {author: "BLINK-182", song:"I MISS YOU"},
    {author: "SUM 41", song:"PIECES"},
    {author: "BRING ME THE HORIZON", song:"LUDENS"},
    {author: "THREE DAYS GRACE", song: "I HATE EVERYTHING ABOUT YOU"},
];

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let modal = document.querySelector('#myModal');
let btn = document.querySelector(".myBtn");
let span = document.querySelector(".close");

btn.addEventListener('click', function () {
    modal.style.display = "block"
});

span.addEventListener('click', function () {
    modal.style.display = "none"
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
});

let ol = document.getElementById('list');

function addList() {
    for (el of playList) {
        let li = document.createElement('li');
        li.classList.add('song');
        li.innerHTML = `Band: ${el.author}, the song: ${el.song}`;
        ol.appendChild(li);
    }
};
addList();