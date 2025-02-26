$(function () {
    const $window = $(window);
    const $header = $("#header");
    const $subMenu = $(".submenu");
    const $menu = $(".menu > li");
    const duration = 250;
    const $visual = $(".visual");
    let lastScrollTop = 0;

    const $btnHam = $(".hamburger-menu label");
    const $hamburger = $(".hamburger-menu");
    const $mobMenu = $(".mobmenu");
    const $mobSub = $(".mobmenu .submenu");

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
            $header.addClass("");
        }
    });

    $btnHam.on("click", function () {
        $hamburger.toggleClass("on");
    });

    $mobMenu.find("li").on("click", function () {
        $(this).find($mobSub).stop().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find($mobSub).stop().slideUp(duration);
    });

    const visualSlider = new Swiper(".visual-wrap", {
        // Optional parameters
        loop: true,
        autoplay: { delay: 3000 },
        speed: 3000,
        // Navigation arrows
        navigation: {
            nextEl: document.querySelector(".visual-wrap.swbtn-next"),
            prevEl: document.querySelector(".visual-wrap.swbtn-prev"),
        },
    });
    console.log(visualSlider, document.querySelector(".swbtn-next"));

    const swiper2 = new Swiper(".business-wrap", {
        loop: true,
        autoplay: {
            delay: 4000,
        },
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
            2000: { slidesPerView: 5.5 },
        },
    });

    //2.디자인 커스텀
    const $select = $(".select-wrap > strong");
    const $selectList = $(".select-list");

    $select.on("click", function () {
        $selectList.slideToggle();
        $(this).toggleClass("active");
    });

    $selectList.find("li").on("click", function () {
        //data-link 속성의 값을 가져와서
        //속성 값을 가져오는 메서드 : attr(속성이름)
        //특정 속성에 값을 적용할 때 : attr(속성이름, 값)

        // const link = $(this).attr("data-link");

        // data- : 사용자 속성을 다루는 메서드 : data(속성이름,값)
        const link = $(this).data("link");
        //브라우저 새 창(탭)열기
        window.open(link);

        //원상복구
        $selectList.slideUp();
        $select.removeClass("active");
    });
});
