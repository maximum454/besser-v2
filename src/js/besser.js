@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/slick.js')
@@include('./partials/TweenLite.min.js')
@@include('./partials/TimelineMax.min.js')
@@include('./partials/EasePack.min.js')
@@include('./partials/CSSPlugin.min.js')

$(function () {
    var sliderMain = $('.js-slider-main').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });

    sliderMain.on('afterChange', function(event, slick, current){
        console.log(current);
        sliderRubric = document.getElementsByClassName('slider-main__rubric');
        sliderName = document.getElementsByClassName('slider-main__name');
        sliderPrice = document.getElementsByClassName('slider-main__price');
        tl = new TimelineMax();
        tl
            .fromTo(sliderRubric, .6, {left: "0",top: "-30px"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderName, .6, {left: "100%",top: "0"}, {left: '0',top: '0',ease:Linear.easeNone},'group1')
            .fromTo(sliderPrice, .6, {opacity: '0'}, {opacity: '1',ease:Linear.easeNone})
    });

    $('.js-slider-partners').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: false
    });
})