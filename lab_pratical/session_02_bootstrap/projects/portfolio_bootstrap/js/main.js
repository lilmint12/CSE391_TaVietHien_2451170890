let btn_x = document.getElementById('btn-X');
let btn_List = document.getElementById('btn-list');
let navbar_phone = document.getElementById('navbar-phone');

btn_List.addEventListener("click", () => {
    navbar_phone.style.transform = 'translateY(0)'; 
});

btn_x.addEventListener("click", () => {
    navbar_phone.style.transform = 'translateY(-100%)'; 
});