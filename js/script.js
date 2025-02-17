document.addEventListener("DOMContentLoaded", function () {
    // let swiper = new Swiper(".swiper", {
    //     loop: false,
    //     spaceBetween: 20,
    //     slidesPerView: 2,
    //     allowTouchMove: false,
    //     navigation: {
    //         nextEl: ".button-next",
    //         prevEl: ".button-prev",
    //     },
    //     breakpoints: {
    //         775: {
    //             spaceBetween: 30,
    //             slidesPerView: 3,
    //         },
    //         931: {
    //             spaceBetween: 30,
    //             slidesPerView: 4,
    //         },
    //     },
    // });
});
AOS.init({
	once: true,
    duration: 700
});

function toggleHeaderClass() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('load', toggleHeaderClass);
window.addEventListener('resize', toggleHeaderClass);
window.addEventListener('scroll', toggleHeaderClass);
function moveSocialLinks() {
    let socialBlock = document.querySelector(".header__block");
    let headerMenu = document.querySelector(".header__menu");
    let headerInner = document.querySelector(".header__inner");

    if (window.innerWidth < 768) {
        headerMenu.appendChild(socialBlock);
    } else {
        headerInner.appendChild(socialBlock);
    }
}

moveSocialLinks();
window.addEventListener("resize", moveSocialLinks); 

let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
headerBurger.addEventListener("click", function () {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
});

