document.addEventListener("DOMContentLoaded", function () {
    const navbarPrimary = document.getElementById('navbar-primary');
    const navbarPhone = document.getElementById('navbar-phone');
    const btnList = document.getElementById('btn-list');
    const btnX = document.getElementById('btn-X');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbarPrimary.classList.add('scrolled');
            navbarPhone.classList.add('scrolled');
        } else {
            navbarPrimary.classList.remove('scrolled');
            navbarPhone.classList.remove('scrolled');
        }
    });
    if (btnList && navbarPhone) {
        btnList.addEventListener('click', function () {
            navbarPhone.classList.add('show');
        });
    }
    if (btnX && navbarPhone) {
        btnX.addEventListener('click', function () {
            navbarPhone.classList.remove('show');
        });
    }
    const mobileLinks = document.querySelectorAll('#navbar-phone .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarPhone.classList.remove('show');
        });
    });
});