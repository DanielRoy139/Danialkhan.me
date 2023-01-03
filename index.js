
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
        }, 1000);
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

function radial_animate() { 
    $('svg.radial-progress').each(function( index, value ) { 

        $(this).find($('circle.bar--animated')).removeAttr( 'style' );    
        // Get element in Veiw port
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        if(elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
        }
    });
}
// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {    
    $('.countervalue').each(function(){
        if ($(this).hasClass('start')){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                      $(this).removeClass('start');
                      $('.countervalue').text();
                      var myNumbers = $(this).text();
                      if (myNumbers == Math.floor(myNumbers)) {
                          $(this).animate({
                              Counter: $(this).text()
                          }, {
                              duration: 2800,
                              easing: 'swing',
                              step: function(now) {
                                  $(this).text(Math.ceil(now)  + '%');
                              }
                          });
                      } else {
                          $(this).animate({
                              Counter: $(this).text()
                          }, {
                              duration: 2800,
                              easing: 'swing',
                              step: function(now) {                                
                                  $(this).text(now.toFixed(2)  + '$'); 
                              }
                          });
                      }

                      radial_animate();
                  }
        }
    });
}
$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
