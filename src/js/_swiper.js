
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper(`.js-swiper`, {

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: `.js-btnNext`,
        prevEl: `.js-btnPrev`,
    },

    keyboard: true,


    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 30,

        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 25,

        },

        1200: {
            slidesPerView: 4,

        }
    }

})