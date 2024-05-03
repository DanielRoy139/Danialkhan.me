
$(document).ready(function () {
    // active class for navigation 
    $("ul li a").click(function () {
        $("li a").removeClass("active");
        $(this).addClass("active");
    });
    // sideNav open and close function /
    $(".navigationBtn button.navBtn.openBtn").click(function(){
       $("header").css({"width":"300px","padding":"15px"});
    });
    $(".navigationBtn button.navBtn.openBtn").click(function(){
        $(".navigationBtn button.navBtn.closeBtn").show();
        $(".mobile-nav-active").css({"overflow":"hidden"});
    });
    $(".navigationBtn button.navBtn.closeBtn").click(function(){
        $(this).hide();
        $(".mobile-nav-active").css({"overflow":"inherit"});
        $("header").css({"width":"0px","padding":"0px"});
    });
    $(".ScrollUpWrap").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".ScrollUpWrap.active").css({ "opacity": "1", "transform": "translateX(0px) rotate(-90deg)" });
        }
        else {
            $(".ScrollUpWrap.active").css({ "opacity": "0", "transform": "translateX(50px) rotate(-90deg)" });
        }
    });
});
