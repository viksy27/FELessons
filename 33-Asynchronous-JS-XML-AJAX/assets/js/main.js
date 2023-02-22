window.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('search-form')

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            findFilms(undefined, e.target)    
        })
    }
}) 

function findFilms(page = 1, form) {
    let titleField = form.querySelector('input[type=search]')
    let typeField = form.querySelector('select[name=type]')
                        
    if (titleField.value.length === 0) {
        return;
    }

    axios({
        url: form.action,
        method: form.method,
        params: {
            s: titleField.value,
            type: typeField.value,
            page: page
        },
        responseType: 'json'
    })

    .then((res) => {
        let resultsBlock = document.getElementById('search-results')
        if (!resultsBlock) {
            return;
        }

        resultsBlock.innerHTML = ''

        if (res.data.Error) {
                resultsBlock.innerHTML = res.data.Error
        } else if (res.data.Search && res.data.totalResults) {      
            for (let i = 0; i < res.data.Search.length; i++) {      
                resultsBlock.append(createFilmItem(res.data.Search[i]))
            }
            addListenerToDetailsBtn(resultsBlock)
            createPagination(res.data.totalResults)
            addListenerToPaginationItems(page)
        }
    })
    .catch(() => console.log('Error'))
}

function createFilmItem(item) {
    let el = document.createElement('div'),
        elPoster = document.createElement('img'),
        elTitle = document.createElement('h4'),
        elYear = document.createElement('div'),
        elButton = document.createElement('span')
    
    elPoster.classList.add('film-item__poster')
    elPoster.setAttribute('src', item.Poster)
    el.classList.add('film-item')
    elTitle.classList.add('film-item__title')
    elYear.classList.add('film-item__year')
    elButton.classList.add('film-item__btn')
    
    elPoster.innerHTML = item.Poster
    elTitle.innerHTML = 'Name: ' + item.Title
    elYear.innerHTML = 'Year: ' + item.Year ?? '-'
    elButton.innerHTML = 'Details'
    elButton.setAttribute('data-id', item.imdbID)
    
    el.append(elPoster)
    el.append(elTitle)
    el.append(elYear)
    el.append(elButton)

    return el
}

function createPagination(amount) {
    let ul = document.getElementById('search-pagination')

    if (!ul) {
        return
    }

    ul.innerHTML = '';

    for (let i = 0; i < amount / 10; i++) {
        let el = document.createElement('li')
        el.classList.add('search-pagination__item')

        el.innerHTML = i + 1

        ul.append(el)
    }
}

function addListenerToPaginationItems(page) {
    let ulItems = document.querySelectorAll('#search-pagination li')
    let form = document.getElementById('search-form')

    if (ulItems.length === 0) {
        return
    }

    ulItems[page - 1].classList.add('search-pagination__item--active')
    
    ulItems.forEach(item => {
        item.addEventListener('click', (e) => {
            findFilms(e.target.innerText, form)
        })
    })
}

function addListenerToDetailsBtn(block) {
    let detailsBtns = block.querySelectorAll('.film-item__btn')

    if (detailsBtns.length === 0) {
        return;
    }

    detailsBtns.forEach(btn => btn.addEventListener('click', showFilmDetails))
}

function showFilmDetails(e) {
    let filmId = e.target.getAttribute('data-id', true)
    let modal = document.getElementById('modal-content')
    let myModal = document.getElementById("myModal")

    myModal.style.display = "block"

    axios({
        url: `https://www.omdbapi.com/?i=${filmId}&apikey=bf1e2bb3`,
        method: 'GET',
        params: {
            plot: 'full'
        },
        responseType: 'json',
    })
        
    .then((res) => {
        modal.innerText = ' '
        modal.innerText = res.data.Plot
    })
        
    .catch(() => console.log('No data'))
    
    closeFilmDetails(myModal)
}

function closeFilmDetails(myModal) {
    let span = document.getElementById("close")

    span.addEventListener('click',() => {
        myModal.style.display = "none"
    })

    window.addEventListener('click', (event) => {
        if (event.target == myModal) {
            myModal.style.display = "none"   
        }
    })
}







