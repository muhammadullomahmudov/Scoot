odamFaroxddin = document.querySelector('.site-header__main-burger-btn');
odamZubayr = document.querySelector('.site-header__list');
elBody = document.querySelector('body');

odamFaroxddin.addEventListener('click', function () {
	odamZubayr.classList.toggle('menu--open');
	elBody.classList.toggle('body--open');
});
