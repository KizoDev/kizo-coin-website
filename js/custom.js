$(document).ready(function() {

    $('.hambu').click(function(){
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    $('.menu').click(function () {
        $('.navleft').removeClass('vis');
        $('body').removeClass('oh');
        $('#nav-icon4').removeClass('open');
    });

    var sliderStart = 10;
    /*var today = new Date();
    var date = today.getFullYear();
    if (date === 2022) {
        sliderStart = 5;
    }*/

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        infinite: false,
        initialSlide: sliderStart,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        initialSlide: sliderStart,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                infinite: false
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    if ($(window).width() < 1040) {
        $('.menu_parent').click(function(){
            $(this).toggleClass('open');
        });
    }

    let cyear = $('#cyear');
    if (cyear.length === 1) {
        cyear.html(new Date().getFullYear());
    }
})

$( window ).on("load", function() {
    $('body').removeClass('oh');
    $('.preload').removeClass('vis');
});

$('[data-toggle="tooltip"]').tooltip({
    //delay: { "show": 500, "hide": 100000 },
    placement: 'left'
});
