$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 6000,
        easing: 'ease',
        infinite: true,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchTreshhold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: true,
        rows: 1,
        vertical: false,
        verticalSwiping: false,
        fade: false,
    });
});
