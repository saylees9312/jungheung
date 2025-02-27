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

    const $btnHam = $(".hamburger-menu label");
    const $hamburger = $(".hamburger-menu");
    const $mobMenu = $(".mobmenu");
    const $mobSub = $(".mobmenu .submenu");
    const $visionItems = $(".vision1 dd");

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

    $btnHam.on("click", function () {
        $hamburger.toggleClass("on");
    });

    $mobMenu.find("li").on("click", function () {
        $(this).find($mobSub).stop().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find($mobSub).stop().slideUp(duration);
    });

    $mainCrumbs.on("click", function () {
        $menuSelect.slideToggle();
    });
    $menuSelect.find("li").on("click", function () {
        const $selestText = $(this).text();
        $mainCrumbs.text($selestText);
        $menuSelect.slideUp();
    });

    $subCrumbs.on("click", function () {
        $subSelect.slideToggle();
    });
    $subSelect.find("li").on("click", function () {
        const $selestText = $(this).text();
        $subCrumbs.text($selestText);
        $subSelect.slideUp();
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

    // vision1 영역 마우스 이동에 따른 dd 애니메이션
    $document.on("mousemove", function (e) {
        const moveX = (e.pageX - $window.width() / 2) * 0.3;
        const moveY = (e.pageY - $window.height() / 2) * 0.3;

        $visionItems.each(function (index) {
            const speed = (index + 1) * 2; // 개별 요소 속도 차이 적용
            $(this).css("transform", `translate(${moveX / speed}px, ${moveY / speed}px)`);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.querySelector(".sub-title h3");
    // 글자자르기
    const text = new SplitType(mainText, { types: "words" });
    gsap.from(text.words, { opacity: 0, x: 200, filter: "blur(5px)", duration: 1, stagger: 0.5 });
});
