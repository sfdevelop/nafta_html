document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.product__item').forEach((item, index) => {
        const images = item.querySelectorAll('.product__item-scheme img');
        
        images.forEach((image, imgIndex) => {
            image.setAttribute('data-fancybox', 'gallery-' + index);
        });
    });

    Fancybox.bind("[data-fancybox]", {
    });
});
