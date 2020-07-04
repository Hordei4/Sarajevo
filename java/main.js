const menuBtn = document.querySelector(".m-menu")
const menu = document.querySelector(".m-navigation")

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
});