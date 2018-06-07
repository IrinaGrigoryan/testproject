document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 480px
            540: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
        });
});
