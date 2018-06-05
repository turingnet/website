$(function () {

    // 点击导航操作
    $("a.link_item").click(function () {
        window.location.href = './index.html?name=' + $(this).attr("href").substring(1, $(this).attr("href").length);
    });

    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
       // 手机端初始化
        $("header .delete").css('display', 'none');
        $("header .links").css('display', 'none');
    }

    // 获取屏幕可见区域高度
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

    // 展示menu
    function showMenu() {
        $("header .menu").css('display', 'block');
        $("header .links").css('display', 'none');
        // 显示icon
        $("header .icon").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        // 显示menu
        $("header .menu").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        // 隐藏delete
        $("header .delete").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        // 隐藏links
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

    // 隐藏menu
    function hideMenu() {
        $("header .delete").css('display', 'block');
        $("header .delete").css('opacity', 0);
        $("header .delete").css('z-index', 100);
        $("header .links").css('display', 'flex');
        // 隐藏icon
        $("header .icon").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        // 隐藏menu
        $("header .menu").animate({
            opacity: 0
        }, {
            duration: 600,
            easing: "swing"
        })
        // 显示delete
        $("header .delete").animate({
            opacity: 1
        }, {
            duration: 600,
            easing: "swing"
        })
        // 显示links
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

    // 手机端点击 右上角菜单
    $("header .menu").click(function () {
        hideMenu();
        return false;
    });

    // 手机端点击 右上角关闭菜单
    $("header .delete").click(function () {
        showMenu();
        return false;
    });

    // 初始化swiper
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
    
    /*
    * 监听滚动条，本来不想用jQuery但是发现js里面监听滚动条的事件不好添加，这边就引用了Jquery的$(obj).scroll();这个方法了
    */
    $(window).scroll(function () {
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 20) {
            $(".item1 .button").addClass("button_hover");
            $("header").addClass("header_down");
        } else {
            $(".item1 .button").removeClass("button_hover");
            $("header").removeClass("header_down");
        }
    })

    // 按钮事件
    $(".item1 .button").hover(function () {
        $(".item1 .button").addClass("button_hover");
    })
    $(".item1 .button").mouseleave(function () {
        $(".item1 .button").removeClass("button_hover");
    });
});