@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/slick.js')

$(function () {
    $('.js-slider-main').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });
})