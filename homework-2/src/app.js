//---sliders
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
                    infinite: true,
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
//-----------mobile
const aroundBody = document.body;
const headerX = document.getElementById('headerX');
const headerMenu = document.getElementById('headerMenu');
const headerNav= document.getElementById('headerNav');
const headerBtn = document.getElementById('headerBtn');
headerX.style.display = 'none';
function mobileMenu() {
    headerMenu.onclick = () => {
        headerNav.style.display = 'block';
        headerBtn.style.display = 'flex';
        headerX.style.display = 'block';
        headerMenu.style.display = 'none';
        aroundBody.style.overflow = 'hidden';
    }
    headerX.onclick = () => {
        headerNav.style.display = 'none';
        headerBtn.style.display = 'none';
        headerX.style.display = 'none';
        headerMenu.style.display = 'block';
        aroundBody.style.overflow = 'visible';
    }
}
mobileMenu();