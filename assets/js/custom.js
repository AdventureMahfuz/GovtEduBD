(function ($) {
    $(document).ready(function () {
        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 250) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });


        //hero slider
        $('.slider-area').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
        //slider animation
        /*$('#slider').on('translate.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').removeClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').removeClass('animated slideInLeft').css('opacity','0');
            //$('.hero-more-link a').removeClass('animated slideInRight').css('opacity','0');
        });
        $('#slider').on('translated.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').addClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').addClass('animated slideInLeft').css('opacity','1');
            //$('.hero-more-link a').addClass('animated slideInRight').css('opacity','1');
        });*/


        //teacher slider
        $('.all-teacher').owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true
                }
            }
        });


        //testimonial slider
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });


        //style 2 gallery slider
        $('.style-2-gallery-items').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 4,
                },
                1000: {
                    items: 5,
                    loop: true
                }
            }
        });

        //WoW js activation
        /*new WOW().init();*/

        //responsive slick nav menu activation
        /*$('#nav').slicknav({
            prependTo:'.responsive-mobile-menu',
        });*/

        // magnific popup activation
        /* $('.popup-img').magnificPopup({
             gallery: {
                 enabled: true
             },
             type: 'image'
         });*/

        //back to top show when scroll
        /*$(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click",function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });*/

    });
})(jQuery);


// magnific popup activation
$('.popup-icon').magnificPopup({
    delegate: 'a',
    gallery: {
        enabled: true
    },
    type: 'image'
});

/*gallery area*/
$('#gallery_filter').mixItUp();