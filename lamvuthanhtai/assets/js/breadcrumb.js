const menuButton = document.querySelector('#menu__btn');
const menuNavigation = document.querySelector('#menu__list');

menuButton.addEventListener('click', () => {
    menuNavigation.classList.toggle('show');
});
