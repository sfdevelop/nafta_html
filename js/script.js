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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contacts__form");
    const requiredFields = form.querySelectorAll(".required");
    const emailField = form.querySelector("input[name='email']");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add("error");
                field.nextElementSibling.style.display = "block";
                isValid = false;
            }
        });

        if (emailField) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailField.value.trim())) {
                emailField.classList.add("error");
                emailField.nextElementSibling.style.display = "block";
                isValid = false;
            }
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    requiredFields.forEach(field => {
        field.addEventListener("input", function () {
            if (field.classList.contains("error")) {
                field.classList.remove("error");
                field.nextElementSibling.style.display = "none";
            }
        });
    });
});
