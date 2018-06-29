$(function () {
    $("a.link_item").click(function () {
        window.location.href = './index.html?name=' + $(this).attr("href").substring(1, $(this).attr("href").length);
    });

    if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) && window.orientation === 0) {
        $("header .delete").css('display', 'none');
        $("header .links").css('display', 'none');
    }
    $(window).bind('orientationchange', function(e){
        window.location.reload();
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

    $("header .menu").click(function () {
        hideMenu();
        return false;
    });

    $("header .delete").click(function () {
        showMenu();
        return false;
    });

    var jobSwiper = new Swiper('.swiper-container', {
        loop: false,
        loopFillGroupWithBlank: true,
        on: {
            progress: function(progress){
                if(progress == 1) {
                    for(var i = 0;i < $('.tabs').find(".item").length;i++){
                        $('.tabs').find(".item")[i].classList.remove('active');
                    }
                    $($('.tabs').find(".item")[1]).addClass('active');
                } else {
                    for(var i = 0;i < $('.tabs').find(".item").length;i++){
                        $('.tabs').find(".item")[i].classList.remove('active');
                    }
                    $($('.tabs').find(".item")[0]).addClass('active');
                }
            }
        },
    });

    $(".tabs > .item").click(function () {
        for(var i = 0;i < $('.tabs').find(".item").length;i++){
            $('.tabs').find(".item")[i].classList.remove('active');
        }
        $(this).addClass('active');
        jobSwiper.slideTo($(this).index(), 1000, false);
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
    })
    $(".item1 .button").hover(function () {
        $(".item1 .button").addClass("button_hover");
    })
    $(".item1 .button").mouseleave(function () {
        $(".item1 .button").removeClass("button_hover");
    });
});
