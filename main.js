const hamburger = document.querySelector('.mobile-menu-toggler')
const menuLayout = document.querySelector('.menu-layout')

hamburger.addEventListener('click', e => {
    menuLayout.classList.toggle('hidden')
})