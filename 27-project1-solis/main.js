let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav__list');
let body = document.querySelector('.body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock')
})

