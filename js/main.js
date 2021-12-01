!(function($) {
    "use strict";
    
    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initiate the wowjs animation library
    new WOW().init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Header scroll class
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $('#header').addClass('header-scrolled');
            $('#header .sec-header').addClass('sec-header-scrolled');
            $('#header .sec-header').removeClass('d-flex');
            document.getElementById('mobile-nav-toggle').style.marginTop = "15px";
        } else {
            $('#header').removeClass('header-scrolled');
            $('#header .sec-header').removeClass('sec-header-scrolled');
            $('#header .sec-header').addClass('d-flex');
            document.getElementById('mobile-nav-toggle').style.marginTop = "42px";
        }
    });

    if ($(window).scrollTop() > 80) {
        $('#header').addClass('header-scrolled');
        $('#header .sec-header').addClass('sec-header-scrolled');
        $('#header .sec-header').removeClass('d-flex');
        document.getElementById('mobile-nav-toggle').style.marginTop = "15px";
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.btn, .nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-scrolled')) {
                        top_space = top_space - 30;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                    $('.nav-menu .dropdown .dropdown-menu a').removeClass('menu-active');
                    $(this).closest('a').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });


    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');
    var dropdown_nav = $('.dropdown-menu');
    var show_sec = $('.dropdown .show-sec');
    var main_nav_height = $('#header').outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function() {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('menu-active menu-item-active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
                dropdown_nav.find('a').removeClass('menu-active');
                dropdown_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('menu-active');
                var current_sec = dropdown_nav.find('a[href="#' + $(this).attr('id') + '"]').html();
                show_sec.html(current_sec);
            }
        });
    });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".features-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout:5000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  $(".desktop-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });

  $(".tutorial-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });


  $(document).ready(function() {
    $('.venobox').venobox();
  });

//   $(window).on('load',function() {
//       $('#changelog-modal').modal('show');
//   });


  $('.dropdown').click(function(){

    $('.dropdown-menu').toggleClass('show');

    });

})(jQuery);