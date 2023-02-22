// XMLHttpRequest

// function loadPage() {
//     let xhr = new XMLHttpRequest;

//     xhr.open('GET', 'pages/main.html')      //метод запроса, куда отправляем запрос
//     xhr.send()

//     xhr.onreadystatechange = function () {
//         let content = document.getElementById('content');

//         if (xhr.readyState === 3) {
//             content.innerHTML = 'Loading...'
//         }
//         if (xhr.readyState === 4) {
//             if (xhr.status === 404) {
//                 content.innerHTML = 'Not found'
//             } else {
//                 content.innerHTML = xhr.response
//             }
//         }
//     }
// }

// loadPage();







//FETCH - ф-я, что принимает URL и возвращает callback function, которая передается аргументом в responce. Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для получения результата.

// function loadPage2() {
//     fetch('pages/main.html')
//         .then(res => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }
//             return res.text()
//         })
//         .then(res => res.text()) //-если тип ответа текст - вызываем метод text. если json - .json
//         .then(data => {
//             let content = document.getElementById('content');
//             content.innerHTML = data
//         })
//         .catch(error => {
//             let content = document.getElementById('content');
//             content.innerHTML = error
//         })
// }

// loadPage2();






// AXIOS - это HTTP-клиент, основанный на Promise для node.js и браузера. Он изоморфный (= он может работать в браузере и node.js с той же базой кодов). На стороне сервера он использует нативный node.js http-модуль, тогда как на стороне клиента (браузер) он использует XMLHttpRequests.

// function loadPage3() {
//     let content = document.getElementById('content');

//     axios('pages/main.html')
//         .then(res => {
//             console.log(res);
//             content.innerHTML = res.data
//         })
//         .catch(() => {
//             content.innerHTML = 'Not found'
//         })
            // .finally(() => {
            //     console.log('Finally')
            // })
// }
// loadPage3();



// AJAX - 

$.ajax('pages/msain.html')
    .done(function (data) {
        console.log('success')
        $('#content').html(data)
  })
    .fail(function () {
        $('#content').html('Error')
  })
    .always(function () {
        console.log('complete')
  });

