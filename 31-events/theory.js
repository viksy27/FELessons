/* <button onclick="alert('Hellooooo Yopta')" type="button">Click</button>    - событие через атрибут html  */

// const button = document.querySelector('.button');                          - собітие через DOM-объект
// button.onclick = function() {
    // alert('You click on my button, nigga!!')
// }


// function showConsole() {                                                   -вінесение ф-ии отдельно, ПРИСВАИВАТЬ БЕЗ СКОБОК
//     console.log('Click!!!')
// }
// button.onclick = showConsole;



// element.addEventListener(event, handler, [options])                        -обработчик событий addEventListener
// button.addEventListener('click', function(e) {
//     console.log('Click!')
// })
// button.addEventListener('click', function(e) {
    //     console.log('Click again!')
    // })



// function showConsole2() {                                                  -вынесение ф-ии отдельно
//     console.log('Click!')
// button.removeEventListener('click', showConsole2)                          -удаление события после выполнения ф-ии
// }
// button.addEventListener('click', showConsole2)



// button.addEventListener('click', showConsole, options);                             -options - параметры
// button.addEventListener('click', showConsole, {"capture": false});                  -можно писать параметры внутри скобок

// const options = {
//     "capture": false,           фаза, на которой должен сработать обработчик
//     "once": false,              если true - тогда обработчик будет автоматически удален после выполнения
//     "passive": false            если true, то указывает, что обработчик никогда не вызовет preventDefault()
// }




// function showConsole(event) {
//     console.log(event.type)                        тип события
//     console.log(event.target)                      обьект, на котором сработал обработчик
//     console.log(event.currentTarget)               обьект, к которому назначен обработчик
//     console.log(event.clientX)                     положение курсора по оси Х
//     console.log(event.clientY)                     положение курсора по оси Y
//     console.log(event)                             все детали события
// }




// ВСПЛЫТИЕ И ПОГРУЖЕНИЕ
// Всплытие - когда на эл-те происходит событие, обработчики сначала срабатывают на нем, потом на его родителе, затем выше и т.д. вверх по цепочке предков

// const block = document.querySelector('.block')
// const blockInner = document.querySelector('.block_inner')
// const blockInnerInner = document.querySelector('.block_inner-inner')

// block.addEventListener('click', function(event){
//     console.log('Клик на блок')
//     console.log(event.target)
// })

// blockInner.addEventListener('click', function(event){
//     console.log('Клик на блок второго уровня')
// }, {"capture: true"})                                            -отловили момент погружения и вывели его в консоль

// blockInner.addEventListener('click', function(event){
//     console.log('Клик на блок третьего уровня')
    // event.stopPropagation()                                      -останавливает всплытие
// })




// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

// const btn = document.querySelectorAll('.btn')
// function showConsole() {
//     console.log('WOW!')
// }
// button.forEach(buttonItem => {
//     buttonItem.addEventListener('click', showConsole)              -ф-я сработает при клике на любую
//                                                                     из кнопок(или на обьект внутри нее),
//                                                                     но лучше писать след:
// })

// const lesson = document.querySelector('.lesson')                   -родительский блок для .btn
// function showConsole() {
//     console.log('WOW!')
// }
// lesson.addEventListener('click', function(event) {                 -добавление обработчика для родителя,
//     if (event.target.closest('.btn'){                               вместо нескольких для детей
//         showConsole()
//     })
// })




// const menuBody = document.querySelector('.menu');                   -родительский .menu
// document.addEventListener('click', menu);                           -событие при клике на .menu
// function menu(event) {
//     if (event.target.closest('.menu_btn')) {                        -если в родительском .menuесть .menu_btn
//         menuBody.classList.toggle('_active');                       -даю/забираю ._active
//     }
//     if (!event.target.closest('.menu')) {                           -если клик НЕ на .menu
//         menuBody.classList.remove('_active');                       -закрываю .menu
//     }
// }
// document.addEventListener('keydown', function (event) {
//     console.log(event.code);                                           -проверка кода 'Esc'
//     if (event.code === 'Escape') {                                     -закріваю меню по нажатию 'Esc'
//         menuBody.classList.remove('_active')
//     }
// })


// ДЕЙСТВИЯ БРАУЗЕРА ПО УМОЛЧАНИЮ
// const link = document.querySelector('.link');
// link.addEventListener('click', function (event) {
//     console.log('Something')
//     event.preventDefault()                                      - отмена действия браузера по умолчанию
// })                                                              (переход по ссылке)


// link.onclick = function() {
//     console.log('Something')
//     return false;                                               тоже чамое, что и preventDefault()
// }


// link.addEventListener('click', function (event) {
//     console.log('Something');
// }, { "passive": true });
// })                                                              - отмена действия браузера по умолчанию




// ТИПЫ СОБЫТИЙ МЫШИ
// Простые:
// mousedown / mouseup         -кнопка мыши нажата/отпущена над эл-ом
// mouseover / mouseout        -курсор над эл-ом и ушел с эл-та
// mousemove                   -каждое движение мыши над эл-ом
// contextmenu                 -ПКН

// Комплексные:
// click                       -mousedown/mouseup над одним и тем же эл-ом при исп-ии основной кнопки мыши
// dblclick                    -двойной клик на эл-те

// const button = document.querySelector('.button');
// button.addEventListener('mousedown', function (event) {
//     console.log(`Нажата кнопка ${event.which}`)
// })

// button.addEventListener('click', function (event) {
//     console.log('Нажата основная кнопка мыши')
// })

// button.addEventListener('contextmenu', function (event) {
//     console.log('Вызвано контекстное меню(не основная кнопка мыши)')
// })

// event.which 1 - нажата основная кнопка мыши
// event.which 2 - нажата средняя кнопка мыши
// event.which 3 - нажата НЕ основная кнопка мыши


// КООРДИНАТЫ
// clientX / clientY
// pageX / pageY

// const blockForMouse = document.querySelector('.block_for_mouse');
// blockForMouse.addEventListener('mousemove', function (event) {
//     blockForMouse.innerHTML =                                               -вывожу координаты курсора
//         `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;       (относ-но окна бр-ра) в эл-т
// });


// НАВЕДЕНИЕ МЫШИ:
// mouseover / mouseout, relatedTarget
// mouseenter / mouseleave

// Для mouseover:
// event.target                - эл-т, на который курсор перешел
// event.relatedTarget         - эл-т, с которого курсор ушел

// Для mouseout:
// event.target                - эл-т, с которого курсор ушел
// event.relatedTarget         - эл-т, на который курсор перешел


// const blockForMouse = document.querySelector('.block_for_mouse');
// blockForMouse.addEventListener('mouseover', function (event) {
//     blockForMouse.innerHTML = 'Курсор над эл-ом'
// });
// blockForMouse.addEventListener('mouseout', function (event) {
//     blockForMouse.innerHTML = 'Курсор уходит с эл-та'
// });


// mouseenter / mouseleave      -не всплывают. переходы внутри эл-та на потомков не считаются

// const blockForMouse = document.querySelector('.block_for_mouse');
// blockForMouse.addEventListener('mouseenter', function (event) {
//     blockForMouse.innerHTML = 'Курсор над эл-ом'
// });
// blockForMouse.addEventListener('mouseleave', function (event) {
//     blockForMouse.innerHTML = 'Курсор уходит с эл-та'
// });



// Делегирование событий при mouseover / mouseout
// const blockForMouse = document.querySelector('.block_for_mouse');
// blockForMouse.addEventListener('mouseover', function (event) {
//     let target = event.target.closest('span')
//     if (!target) return;                                            -переход не на 'span' игнорить
//     target.style.cssText = `background-color: #c5c5c5;`
// })
// blockForMouse.addEventListener('mouseout', function (event) {
//     let target = event.target.closest('span')
//     if (!target) return;                                            -переход не на 'span' игнорить
//     target.style.cssText = ''
// })




// СОБЫТИЯ КЛАВИАТУРЫ
// keydown/keyup             -нажата/отпущена клавиша
// event.code                -код кнопки
// event.key                 -что на кнопне написано

// document.addEventListener('keydown', function (event) {
//     console.log(`Нажата клавиша ${event.code} (${event.key})`)
// })
// document.addEventListener('keyup', function (event) {
//     console.log(`Нажата клавиша ${event.code} (${event.key})`)
// })

// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {     -проверка на зажатую Z/Я и ctrl
//         console.log('Отмена действия');
//     }
// });


// Автоповтор:
// event.repeat             -вернет true, если клавиша зажата


// Обратный счетчик введенного значения, пример:
// const txtItem = document.querySelector('.textarea_item');
// const txtItemLimit = txtItem.qetAttribute('maxlength');
// const txtCounter = document.querySelector('.textarea_counter span');
// txtCounter.innerHTML = txtItemLimit;

// txtItem.addEventListener('keyup', txtSetCounter);               -клавиша нажата, вызов ф-ии
// txtItem.addEventListener('keydown', function (event) {          -клавижа ЗАжата, вызов ф-ии
//     if (event.repeat) txtSetCounter();
// });

// function txtSetCounter() {
//     const txtCounterResult = txtItemLimit - txtItem.value.length;
//     txtCounter.innerHTML = txtCounterResult;
// }




// СОБЫТИЯ ПРИ СКРОЛЛЕ
// scrollY/scrollX                  -кол-во прокрученных px по вертикали/горизинтали
// pageYOffset/pageXOffset          -устарел, кол-во прокрученных px по вертикали/горизинтали

// window.addEventListener('scroll', function (event) {
//     console.log(`${scrollY}px`)
// })

// Предотвращение прокрутки: нельзя предотвратить прокрутку event.preventDefault() в scrollYМ.
// Можно event.preventDefault() повесить на событие, которое вызывает прокрутку(например 'keydown' для 'pageUp/pageDown'). Надеждее всего overflow: hidden через CSS.

// IntersectionObserver             -??? активируется в тот момент, когда п-ль пересекает условную линию





// СОБЫТИЯ ЗАГРУЗКИ СТРАНИЦЫ
// DOMContentLoaded                     -браузер полностью загрузил HTML, DOM-дерево построено, но внешние ресурсы
                                        // (<img>, css-стили могут быть еще не загружены)
// load                                 -браузер загрузил HTML и внешние ресурсы
// beforeunload / unload                п-ль покидает страницу


// document.readyState -                -состояние загрузки
// Три возможных значения:
// 'loading'                            -документ загружается
// 'interactive'                        -документ был полностью прочитан
// 'complete'                           -документ полностью прочитан и все ресурсы(картинки и т.д.) были загружены


// Событие DOMContentLoaded срабатывает на обьекте document
// document.addEventListener('DOMContentLoaded', readyDom);

// Событие load срабатывает на обьекте window
// window.addEventListener('load', readyLoad);

// function readyDom() {
//     const image = document.querySelector('.image');
//     console.log(document.readyState);
//     console.log('DOM загружен');
// };

// function readyLoad() {
//     console.log(document.readyState);
//     const image = document.querySelector('.image');
//     console.log('Страница загружена');
//     console.log(image.offsetWidth);
// };


// Событие beforeunload срабатывает на обьекте window
// window.addEventListener('beforeunload', beforeUnload)

// function beforeUnload(event) {
//     event.preventDefault();                  -отмена события, как указано в стандарте
//     event.returnValue = '';                  -Chrome требует установки возрастного начения
// }


// Событие unload срабатывает на обьекте window
// window.addEventListener('unload', function (e) {
//     navigator.sendBeacon(url, data)
//     https://w3c.github.io/beacon/.           -как заставить бр-р выполнять что-то в фоновом режиме
// })