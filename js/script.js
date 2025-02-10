const visualSlider = new Swiper(".visual-wrap", {
    // Optional parameters
    loop: true,
    autoplay: true,
    speed: 3000,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickerble: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".visual-btn-prev",
        prevEl: ".visual-btn-next",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper2 = new Swiper(".business-wrap", {
    loop: true,
    autoplay: true,
    speed: 1200,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper3 = new Swiper(".news-wrap", {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
