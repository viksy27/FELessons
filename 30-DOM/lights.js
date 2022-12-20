// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

let colorBtn = document.getElementById('colorBtn');
let light = document.querySelectorAll('.light');

let arr = Array.from(light);

colorBtn.addEventListener('click', () => {
    if (arr[0].classList.contains('active')) {
        arr[0].classList.remove('active');
        arr[1].classList.add('active');
    } else if (arr[1].classList.contains('active')) {
        arr[1].classList.remove('active');
        arr[2].classList.add('active');
    } else if (arr[2].classList.contains('active')) {
        arr[2].classList.remove('active');
        arr[0].classList.add('active');
    };
});