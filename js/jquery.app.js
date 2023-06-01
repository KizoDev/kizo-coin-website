/* Theme Name: Aeshio - Responsive bootsrap 4 Cryptocurrency Landing Page Template
   Author: Zoyothemes
   Version: 1.0.0
   Created: January 2019
   File Description: Main Js file of the template
*/

//initializing
(function($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
        
    });

    // Smooth Link
    $('.nav-item a, .mouse-down a, .menu_scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    //Scrollspy


    $(document).ready(function (){
        $("#navbarCollapse").scrollspy({
            offset: 70
        });


    });

    $('.dropdown-language .dropdown-item').click(function(){
        //alert('sdf');
        var flag = $(this).find('i').attr('class');
        $('.dropdown-language .dropdown-toggle.nav-link i').removeClass().addClass(flag);
    });

    $('.navbar-custom .navbar-nav .nav-link').click(function(){
        $('.navbar-collapse').removeClass('show');
    });

    // Loader
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');

    });
    


/*    //jQuery Owl-Demo
    $("#owl-demo").owlCarousel({
        items : 10,
/!*        itemsDesktop : [1199,4],
        itemsDesktopSmall : [991,3],
        itemsTablet: [767,2], 
        itemsMobile : [575,1],*!/
        pagination : false,
        autoPlay : true,
        loop : true,
        autoplayTimeout: 1000,
        autoplaySpeed: 1000
    });*/




    // Jquery typed
    $(".element").each(function(){
        var $this = $(this);
        $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100, // typing speed
        backDelay: 3000 // pause before backspacing
        });
    });

            
})(jQuery);