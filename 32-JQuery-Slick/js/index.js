// Search
const searchBox = document.querySelector('.header__btns__search');
const searchBtn = document.querySelector('.header__btns__search__btn');

function showSearch() {
    searchBox.classList.toggle('active')
}
searchBtn.addEventListener('click', showSearch)

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(searchBox);
    if (!click) {
        searchBox.classList.remove('active')
    }
})

// Burger
const menuBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav__list');
const body = document.querySelector('.body');

menuBurger.addEventListener('click', function(){
	menuBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
})

// Slider 1
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000
    });

// Slider 2 
    $('.products-slider').slick({
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 4
                }
            }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            }, {
            breakpoint: 721,
            settings: {
                slidesToShow: 2
                }
            }, {
            breakpoint: 600,
            settings: {
                    slidesToShow: 1
                }
            }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

// Slider 3
    $('.partners-slider').slick({
        slidesToShow: 9,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1360,
            settings: {
                slidesToShow: 8
                }
            }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 7
                }
            }, {
            breakpoint: 1138,
            settings: {
                    slidesToShow: 6
                }
            },{
            breakpoint: 1024,
            settings: {
                    slidesToShow: 5
                }
            }, {
            breakpoint: 721,
            settings: {
                    slidesToShow: 4
                }
            }, {
            breakpoint: 601,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }, {
            breakpoint: 401,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                initialSlide: 3
            }
        }]
    });
});