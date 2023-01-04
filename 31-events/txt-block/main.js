// Створити HTML-сторінку для відображення/редагування тексту.
// При відкритті сторінки текст відображається за допомогою тега div. 
// При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати.
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const block = document.getElementById('block');
const textarea = document.querySelector('.textarea');

document.addEventListener('keydown', function (event) {

    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        block.style.display = 'none';
        textarea.style.display = 'block';
        textarea.innerHTML = block.textContent;
        event.preventDefault();
    }

    if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        textarea.style.display = 'none';
        block.style.display = 'block';
        block.innerHTML = textarea.value;
        event.preventDefault();
    }
})