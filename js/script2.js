$(function () {
    const $window = $(window);
    const $header = $("#header");
    const $subMenu = $(".submenu");
    const $menu = $(".menu > li");
    const duration = 250;
    let lastScrollTop = 0;

    const $btnHam = $(".hamburger-menu label");
    const $hamburger = $(".hamburger-menu");
    const $mobMenu = $(".mobmenu");
    const $mobSub = $(".mobmenu .submenu");

    function setMenuBehavior() {
        const windowWidth = $window.width();

        if (windowWidth > 1024) {
            // 💻 데스크톱 - 마우스 오버로 서브메뉴 동작
            $menu.off("click").on("mouseenter", function () {
                $subMenu.stop().slideDown(duration);
                $(this).addClass("on");
                $header.addClass("active");
            });

            $menu.on("mouseleave", function () {
                $subMenu.stop().slideUp(duration);
                $menu.removeClass("on");
                $header.removeClass("active");
            });
        } else if (windowWidth > 690) {
            // 📱 태블릿 - 서브메뉴 항상 표시 및 가로 정렬 적용
            $menu.off("mouseenter mouseleave click");
            $subMenu.show().css({ display: "flex", "flex-direction": "row" });
        } else {
            // 📱 모바일 - 클릭 시 slideToggle 적용
            $menu.off("mouseenter mouseleave").on("click", function (e) {
                e.preventDefault(); // 링크 기본 동작 방지
                $(this).find(".submenu").stop().slideToggle();
                $(this).toggleClass("active").siblings().removeClass("active");
                $(this).siblings().find(".submenu").stop().slideUp();
            });
        }
    }

    // 초기 실행 및 창 크기 변경 시 적용
    setMenuBehavior();
    $window.on("resize", setMenuBehavior);

    // 스크롤 이벤트 - 헤더 숨김/보이기 (햄버거 메뉴가 열려있을 때는 닫히지 않도록 예외 처리)
    $window.on("scroll", () => {
        const scrollTop = $window.scrollTop();
        if (!$hamburger.hasClass("on")) {
            // 햄버거 메뉴가 열려있지 않을 때만 실행
            if (scrollTop < lastScrollTop) {
                $header.removeClass("hide").addClass("up");
            } else {
                $header.addClass("hide").removeClass("up");
            }
        }
        lastScrollTop = scrollTop;
    });

    // 햄버거 메뉴 클릭 이벤트
    $btnHam.on("click", function () {
        $hamburger.toggleClass("on");
    });

    // 모바일 메뉴 서브메뉴 동작
    $mobMenu.find("li").on("click", function (e) {
        e.preventDefault(); // 링크 기본 동작 방지
        $(this).find($mobSub).stop().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find($mobSub).stop().slideUp(duration);
    });

    // Swiper 슬라이더 설정
    const visualSlider = new Swiper(".visual-wrap", {
        loop: true,
        autoplay: { delay: 3000 },
        speed: 3000,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".visual-btn-next", prevEl: ".visual-btn-prev" },
    });

    const swiper2 = new Swiper(".business-wrap", {
        loop: true,
        autoplay: { delay: 4000 },
        speed: 1200,
        scrollbar: { el: ".swiper-scrollbar" },
    });

    const swiper3 = new Swiper(".news-wrap", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
            600: { slidesPerView: 2.5 },
            800: { slidesPerView: 3.5 },
            1400: { slidesPerView: 4 },
            2000: { slidesPerView: 5.5 },
        },
    });

    // 커스텀 셀렉트 박스 동작
    const $select = $(".select-wrap > strong");
    const $selectList = $(".select-list");

    $select.on("click", function () {
        $selectList.slideToggle();
        $(this).toggleClass("active");
    });

    $selectList.find("li").on("click", function () {
        const link = $(this).data("link");
        window.open(link);
        $selectList.slideUp();
        $select.removeClass("active");
    });
});
