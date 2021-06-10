$(document).ready(function(){
    $('.plans__slider').slick({
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
                breakpoint: 768,
                setting: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ],
    });
    $('.problems__sliders').slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        swipe: false,
        allowTouchMove: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.three__sliders').slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'slick-dots slider__dots',
        customPaging: function(slick, index) {
          let image = $(slick.$slides[index]).find('.three__image').attr('src');
          return '<img src="' + image + '" alt="" /> '
        },
        swipe: false,
        allowTouchMove: false,
    });
});
//-----------mobile
const aroundBody = document.body;
const headerX = document.querySelector('#headerX');
const headerMenu = document.querySelector('#headerMenu');
const headerNav= document.querySelector('#headerNav');
const headerBtn = document.querySelector('#headerBtn');
const headerBtnOne = document.querySelector('#headerBtrOne');
const headerBtnTwo = document.querySelector('#headerBtnTwo');
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