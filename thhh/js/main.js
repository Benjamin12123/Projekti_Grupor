let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}














document.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.querySelector("[data-nav-toggler]");
  const header = document.querySelector("[data-header]");

  navToggler?.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
});