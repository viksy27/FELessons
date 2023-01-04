// Створити HTML-сторінку з блоком тексту в рамці.
// Реалізувати можливість змінювати розмір блоку,
// якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

// const container = document.querySelector('.container');
const block = document.querySelector('.block');
const btn = document.querySelector('.btn');

function resize(event) {
    block.style.width = `${event.pageX - 200}px`
    block.style.height = `${event.pageY - 200}px`
    console.log(event.pageY)
}

btn.addEventListener('mousedown', function () {
    document.addEventListener('mousemove', resize)
})

document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', resize)
})




// const div = document.querySelector('.test')
// const div2 = document.querySelector('.test2')

// div2.addEventListener('mousedown', () => {
//     document.addEventListener('mousemove', findMouse)
// })

// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', findMouse)
// })

// function findMouse(event) {
//     div.style.width = ${event.pageX}px
//     div.style.height = ${event.pageY - 400}px
// }