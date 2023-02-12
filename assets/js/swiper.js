const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
