const mMenu = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

mMenu.addEventListener("click",function (){
    menu.classList.toggle("active");
})