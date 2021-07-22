// mobile head nav height = window height
// remove hamBtn if window.innerHeight > 992
// 

let headNav = document.querySelector(".head-main-nav");
let hamBtn = document.querySelector('.ham-btn');
let overlay = document.querySelector('.overlay');

const getWindowHeight = () => window.outerHeight + "px";
const changeHeader = () => {
   if (window.innerWidth < 992) {
      headNav.style.height = getWindowHeight();
      overlay.style.height = getWindowHeight();
      if(headNav.className === "head-main-nav") {
         headNav.classList.add('head-nav-hide');
      }
   } else {
      headNav.style.height = 'auto';
      overlay.style.height = 'auto';
      headNav.classList.remove('head-nav-hide', 'head-nav-show');
      overlay.classList.replace('overlay-show', 'overlay-hide');
      hamBtn.classList.replace('ham-opened', 'ham-closed');
   }

}

changeHeader();

window.addEventListener("resize", () => {
   changeHeader();
})

document.addEventListener("scroll", () => {
   changeHeader();
})


// head nav slide on click (mobile)

const hamBtnTransform = () => {
   if (headNav.classList.contains('head-nav-hide')) {
      hamBtn.classList.replace('ham-closed', 'ham-opened')
   } else {
      hamBtn.classList.replace('ham-opened', 'ham-closed')
   }
}

const hideShowNav = () => {
   

   if (headNav.classList.contains('head-nav-hide')) {
      hamBtnTransform();
      headNav.classList.replace('head-nav-hide', 'head-nav-show')
      overlay.classList.replace('overlay-hide', 'overlay-show');
   } else {
      hamBtnTransform();
      headNav.classList.replace('head-nav-show', 'head-nav-hide')
      overlay.classList.replace('overlay-show', 'overlay-hide');

   }
}

hamBtn.addEventListener('click', () => {
   hideShowNav();
})