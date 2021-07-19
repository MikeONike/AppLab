// mobile head nav height = window height

let headNav = document.querySelector(".head-main-nav");

const getWindowHeight = () =>  window.outerHeight + "px";
const setNavHeight = () => headNav.style.height = getWindowHeight();

setNavHeight();

window.addEventListener("scroll", () => {
   setNavHeight();
})


// head nav slide on click (mobile)

let hamBtn = document.querySelector('.ham-btn');
let overlay = document.querySelector('.overlay');

hamBtn.addEventListener("click", () => {
   if(headNav.classList.contains('head-nav-hide')) {
      hamBtn.classList.replace('ham-btn-show', 'ham-btn-hide');
      headNav.classList.replace('head-nav-hide', 'head-nav-show');
      overlay.classList.replace('overlay-hide', 'overlay-show');
   } else {
      headNav.classList.replace('head-nav-show', 'head-nav-hide');
      overlay.classList.replace('overlay-show', 'overlay-hide');
   }
})

overlay.addEventListener("click", () => {
   if(overlay.classList.contains('overlay-show')) {
      hamBtn.classList.replace('ham-btn-hide', 'ham-btn-show');
      headNav.classList.replace('head-nav-show', 'head-nav-hide');
      overlay.classList.replace('overlay-show', 'overlay-hide');
   } else {
      headNav.classList.replace('head-nav-hide', 'head-nav-show');
      overlay.classList.replace('overlay-hide', 'overlay-show');
   }
});