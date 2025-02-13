$(function () {
    const $window = $(window);
    const $header = $("#header");
    const $subMenu = $(".submenu");
    const $menu = $(".menu > li");
    const duration = 250;
    const $visual = $(".visual");
    let lastScrollTop = 0;

    $menu.on("mouseenter", function () {
        $subMenu.stop().slideDown(duration);
        $(this).addClass("on");
        $header.addClass("active");
    });

    $menu.on("mouseleave", function () {
        $subMenu.stop().slideUp(duration);
        $menu.removeClass("on");
        $header.removeClass("active");
    });

    $window.on("wheel", (e) => {
        if (e.originalEvent.deltaY < 0) {
            $header.removeClass("hide");
            $header.addClass("up");
        } else {
            $header.addClass("hide");
            $header.removeClass("up");
        }
    });

    $window.on("scroll", (e) => {
        const scrollTop = $window.scrollTop();
        if (scrollTop < lastScrollTop) {
            $header.removeClass("hide");
            $header.addClass("up");
        } else {
            $header.addClass("hide");
            $header.removeClass("up");
        }
        lastScrollTop = scrollTop;

        if (scrollTop <= $visual.height()) {
            $header.removeClass("up");
            $header.addClass("default");
        } else {
            $header.removeClass("default");
        }
    });

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
            nextEl: ".visual-btn-next",
            prevEl: ".visual-btn-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });

    const swiper2 = new Swiper(".business-wrap", {
        loop: true,
        // autoplay: {
        //     delay: 4000,
        // },
        speed: 1200,
        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });

    const swiper3 = new Swiper(".news-wrap", {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            // clickerable: true,
            clickable: true,
        },
        breakpoints: {
            600: { slidesPerView: 2.5 },
            800: { slidesPerView: 3.5 },
            1400: { slidesPerView: 4 },
        },
    });
});
