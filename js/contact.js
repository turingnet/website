$(function () {

    // 点击导航操作
    $("a.link_item").click(function () {
        window.location.href = './index.html?name=' + $(this).attr("href").substring(1, $(this).attr("href").length);
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
    var jobSwiper = new Swiper('.swiper-container', {
        loop: false,
        loopFillGroupWithBlank: true
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