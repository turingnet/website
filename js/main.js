$(function () {

    var blockName = getRequest().name || "";

    if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) && window.orientation === 0) {
         $("header .delete").css('display', 'none');
         $("header .links").css('display', 'none');
     }

    if (blockName) {
        $("html, body").animate({
            scrollTop: ($("#" + blockName)
                .offset()
                .top - 40) + "px"
        }, {
            duration: 600,
            easing: "swing"
        })
    }

    $(window).bind('orientationchange', function(e){
        window.location.reload();
    });

    function getRequest() {
        var url = window.location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    function showMenu() {
        $("header .menu").css('display', 'block');
        $("header .links").css('display', 'none');
        $("header .icon").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .menu").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .delete").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .links").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        setTimeout(function() {
            $("header .delete").css('display', 'none');
        }, 600);
    }

    function hideMenu() {
        $("header .delete").css('display', 'block');
        $("header .delete").css('opacity', 0);
        $("header .delete").css('z-index', 100);
        $("header .links").css('display', 'flex');
        $("header .icon").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .menu").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .delete").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        $("header .links").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        setTimeout(function() {
            $("header .menu").css('display', 'none');
        }, 600);
    }

    $(".link_item").click(function () {
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            showMenu();
        }
        $("html, body").animate({
            scrollTop: ($($(this).attr("href"))
                .offset()
                .top - 40)+ "px"
        }, {
            duration: 600,
            easing: "swing"
        })
        return false;
    });

    $(".item1 .button").click(function () {
        $("html, body").animate({
            scrollTop: $("#block1")
                .offset()
                .top + "px"
        }, {
            duration: 600,
            easing: "swing"
        })
        return false;
    });

    $("header .menu").click(function () {
        hideMenu();
        return false;
    });

    $("header .delete").click(function () {
        showMenu();
        return false;
    });

    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight)
                ? document.body.clientHeight
                : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight)
                ? document.body.clientHeight
                : document.documentElement.clientHeight;
        }
        return clientHeight;
    }

    var swiper1 = new Swiper('.swiper-container-t', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next-t',
            prevEl: '.swiper-button-prev-t'
        }
    });

    var swiper2 = new Swiper('.swiper-container-b', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next-b',
            prevEl: '.swiper-button-prev-b'
        }
    });

    $(window).scroll(function () {
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 20) {
            $(".item1 .button").addClass("button_hover");
            $("header").addClass("header_down");
        } else {
            $(".item1 .button").removeClass("button_hover");
            $("header").removeClass("header_down");
        }
        if ($('#block1').offset().top <= scrollTop && scrollTop < $('#block2').offset().top) {
            $(".links .first").addClass("link_item_active");
            $(".links .second").removeClass("link_item_active");
            $(".links .third").removeClass("link_item_active");
            $(".links .forth").removeClass("link_item_active");
            $(".links .fifth").removeClass("link_item_active");
        } else if ($('#block2').offset().top <= scrollTop && scrollTop < $('#block3').offset().top) {
            $(".links .first").removeClass("link_item_active");
            $(".links .second").addClass("link_item_active");
            $(".links .third").removeClass("link_item_active");
            $(".links .forth").removeClass("link_item_active");
            $(".links .fifth").removeClass("link_item_active");
        } else if ($('#block3').offset().top <= scrollTop && scrollTop < $('#block4').offset().top) {
            $(".links .first").removeClass("link_item_active");
            $(".links .second").removeClass("link_item_active");
            $(".links .third").addClass("link_item_active");
            $(".links .forth").removeClass("link_item_active");
            $(".links .fifth").removeClass("link_item_active");
        } else if ($('#block4').offset().top <= scrollTop && scrollTop < $('#block5').offset().top) {
            $(".links .first").removeClass("link_item_active");
            $(".links .second").removeClass("link_item_active");
            $(".links .third").removeClass("link_item_active");
            $(".links .forth").addClass("link_item_active");
            $(".links .fifth").removeClass("link_item_active");
        } else if ($('#block5').offset().top <= scrollTop) {
            $(".links .first").removeClass("link_item_active");
            $(".links .second").removeClass("link_item_active");
            $(".links .third").removeClass("link_item_active");
            $(".links .forth").removeClass("link_item_active");
            $(".links .fifth").addClass("link_item_active");
        } else {
            $(".links .first").removeClass("link_item_active");
            $(".links .second").removeClass("link_item_active");
            $(".links .third").removeClass("link_item_active");
            $(".links .forth").removeClass("link_item_active");
            $(".links .fifth").removeClass("link_item_active");
        }
    })

    $(".item1 .button").hover(function () {
        $(".item1 .button").addClass("button_hover");
    })
    $(".item1 .button").mouseleave(function () {
        $(".item1 .button").removeClass("button_hover");
    });
});
