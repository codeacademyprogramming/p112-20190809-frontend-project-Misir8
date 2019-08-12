$(document).ready(function () {
    const modalSearch = $('.search-modal');
    const searchIcon = $('.header-search');
    const closeSearch = $('.close-search');

    searchIcon.on('click', () => {
        modalSearch.css("display", "block");
        $('.searching').css('transform', 'translateY(0px)');
    })
    closeSearch.on('click', () => {
        modalSearch.css("display", "none");
    })

    // sidenav 
    $('.open-sidenav').click(() => {
        if ($('.sidenav').width() > 0) {
            $('.sidenav').css('width', '0%');
        } else {
            function myFunction(x) {
                if (x.matches) {
                    $('.sidenav').css('width', '100%');
                } else {
                    $('.sidenav').css('width', '320px');
                }
            }
            let x = window.matchMedia("(max-width: 992px)")
            myFunction(x)

        }

    })

    $('.close-sidenav').click(() => {
        $('.sidenav').css('width', '0');

    });



    // accordion
    $("#accordion > li > div").click(function () {
        $(this).toggleClass('active-about');
        $(this).next().slideToggle('normal');
    });

    // $("#accordion > li > div").click(function () {

    //     if (false == $(this).next().is(':visible')) {
    //         $('#accordion ul').slideUp(700);
    //     }
    //     $(this).next().slideToggle(700);
    // });


    // Scroll

    let navbar = $('.navbar');
    let win = $(window);
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 300) {
            navbar.removeClass("navbar-scroll");
        } else {
            navbar.addClass("navbar-scroll");
        }
    });

    // Slider
    $('.show').owlCarousel({
        loop: true,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navSpeed: 800,
        autoplay: true,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    })

    // About Accordion 
    let headerAccordion = $('.accordion-header');

    function accordion() {

        if (false == $(this).next().is(':visible')) {
            $('.accordion-body').slideUp(300);
        }
        $(this).next().slideToggle(300);
        $(this).toggleClass('active-about');

    }

    headerAccordion.click(accordion);



    // modal video

    $(function () {

        $(".myvideo").click(function () {

            $("#modal").fadeIn(1000)

        });

        $("#modal span").click(function () {

            $("#modal").fadeOut();
            $("#mainVid").attr("src", "")

        });

    })



// owl carousel

    $('.car').owlCarousel({
        loop:true,
        margin:30,
        navSpeed: 1000,
        nav:true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    // Counter

    let counter = $('.flipCount'),
    counterFrom = counter.data('counter-from'),
    counterTo = counter.data('counter-to');
  
  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });


});


