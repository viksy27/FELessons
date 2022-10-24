let menuBtn = document.querySelector('.header__btn');
let menu = document.querySelector('.menu');
let menuItem = document.querySelector('.menu__link');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuItem.classList.toggle('hidden');
    body.classList.toggle('lock');
});