document.querySelector('.mobile-menu-button').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
});