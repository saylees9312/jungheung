$(function () {
    const $window = $(window);
    const $document = $(document);
    const $header = $("#header");
    const $subMenu = $(".submenu");
    const $menu = $(".menu > li");
    const duration = 250;
    const $mainCrumbs = $(".crumbs-main > strong");
    const $subCrumbs = $(".crumbs-sub > strong");
    const $menuSelect = $(".main-menu");
    const $subSelect = $(".sub-menu");
    let lastScrollTop = 0;

    const $btnHam = $(".hamburger-menu label");
    const $hamburger = $(".hamburger-menu");
    const $mobMenu = $(".mobmenu");
    const $mobSub = $(".mobmenu .submenu");
    const $visionItems = $(".vision1 dd");

    function setMenuBehavior() {
        const windowWidth = $window.width();

        if (windowWidth > 1024) {
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
            $menu.off("mouseenter mouseleave click");
            $subMenu.show().css({ display: "flex", "flex-direction": "row" });
        } else {
            $menu.off("mouseenter mouseleave").on("click", function (e) {
                e.preventDefault();
                $(this).find(".submenu").stop().slideToggle();
                $(this).toggleClass("active").siblings().removeClass("active");
                $(this).siblings().find(".submenu").stop().slideUp();
            });
        }
    }

    setMenuBehavior();
    $window.on("resize", setMenuBehavior);

    $window.on("scroll", () => {
        const scrollTop = $window.scrollTop();
        if (!$hamburger.hasClass("on")) {
            if (scrollTop < lastScrollTop) {
                $header.removeClass("hide").addClass("up");
            } else {
                $header.addClass("hide").removeClass("up");
            }
        }
        lastScrollTop = scrollTop;
    });

    $btnHam.on("click", function () {
        $hamburger.toggleClass("on");
    });

    $mobMenu.find("li").on("click", function (e) {
        e.preventDefault();
        $(this).find($mobSub).stop().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find($mobSub).stop().slideUp(duration);
    });

    $mainCrumbs.on("click", function () {
        $menuSelect.slideToggle();
    });

    $menuSelect.find("li").on("click", function () {
        const selectedText = $(this).text();
        $mainCrumbs.text(selectedText);
        $menuSelect.slideUp();
    });

    $subCrumbs.on("click", function () {
        $subSelect.slideToggle();
    });

    $subSelect.find("li").on("click", function () {
        const selectedText = $(this).text();
        $subCrumbs.text(selectedText);
        $subSelect.slideUp();
    });

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

    // vision1 영역 마우스 이동에 따른 dd 애니메이션
    $document.on("mousemove", function (e) {
        const moveX = (e.pageX - $window.width() / 2) * 0.16;
        const moveY = (e.pageY - $window.height() / 2) * 0.16;

        $visionItems.each(function (index) {
            const speed = (index + 1) * 2; // 개별 요소 속도 차이 적용
            $(this).css("transform", `translate(${moveX / speed}px, ${moveY / speed}px)`);
        });
    });
});
