$(function () {

    // 根据query参数跳至相应区块
    var blockName = getRequest().name || "";

    if (!blockName) {
        return
    } else {
        $("html, body").animate({
            scrollTop: $("#" + blockName)
                .offset()
                .top + "px"
        }, {
            duration: 600,
            easing: "swing"
        })
    }

    // 获取query参数
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

    // 点击导航操作
    $(".link_item").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href"))
                .offset()
                .top + "px"
        }, {
            duration: 600,
            easing: "swing"
        })
        return false;
    });

    // 点击按钮
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

    // 初始化swiper
    var swiper1 = new Swiper('.swiper-container-t', {
        slidesPerView: 4,
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
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next-b',
            prevEl: '.swiper-button-prev-b'
        }
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

        // 导航变色
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

    // 按钮事件
    $(".item1 .button").hover(function () {
        $(".item1 .button").addClass("button_hover");
    })
    $(".item1 .button").mouseleave(function () {
        $(".item1 .button").removeClass("button_hover");
    });
});