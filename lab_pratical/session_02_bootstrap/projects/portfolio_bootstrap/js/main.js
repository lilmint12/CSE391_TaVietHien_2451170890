document.addEventListener("DOMContentLoaded", function () {
    const navbarPrimary = document.getElementById('navbar-primary');
    const navbarPhone = document.getElementById('navbar-phone');
    const btnList = document.getElementById('btn-list');
    const btnX = document.getElementById('btn-X');

    // 1. Bắt sự kiện cuộn màn hình để đổi màu nền (Áp dụng cho cả Mobile và PC)
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbarPrimary.classList.add('scrolled');
            navbarPhone.classList.add('scrolled');
        } else {
            navbarPrimary.classList.remove('scrolled');
            navbarPhone.classList.remove('scrolled');
        }
    });

    // 2. Mở menu mobile (translateY về 0)
    if (btnList && navbarPhone) {
        btnList.addEventListener('click', function () {
            navbarPhone.classList.add('show');
        });
    }

    // 3. Đóng menu mobile
    if (btnX && navbarPhone) {
        btnX.addEventListener('click', function () {
            navbarPhone.classList.remove('show');
        });
    }

    // 4. Tự động đóng menu khi bấm vào link điều hướng
    const mobileLinks = document.querySelectorAll('#navbar-phone .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarPhone.classList.remove('show');
        });
    });
});