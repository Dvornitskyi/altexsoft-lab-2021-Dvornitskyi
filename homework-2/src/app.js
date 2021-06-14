$(document).ready(function(){
    $('.plans-slider').slick({
        mobileFirst: true,
        arrows: false,
        dots: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        variableHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                setting: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ],
    });
    $('.problems-sliders').slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        swipe: false,
        allowTouchMove: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.client-sliders').slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        dots: true,
        dotsClass: 'slick-dots slider-dots',
        customPaging: function(slick, index) {
          let image = $(slick.$slides[index]).find('.client-image').attr('src');
          return '<img src="' + image + '" alt="" /> '
        },
        swipe: false,
        allowTouchMove: false,
    });
});