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

            $('.sidenav').css('width', '18%');
        }

    })

    $('.close-sidenav').click(() => {
        $('.sidenav').css('width', '0');

    });

    accordion
    $("#accordion > li > div").click(function () {

        if (false == $(this).next().is(':visible')) {
            $('#accordion ul').slideUp(700);
        }
        $(this).next().slideToggle(700);


        // $("#accordion > li > div").click(function () {
        //     let currentul = $(this).next();
        //     $(currentul).toggleClass("forvisible");
        // });

       
    });
     // Navbar Scroll
    // $(function(){
    //     const navbar = $('.navbar');
        
    //     $(window).scroll(function(){
    //         if($(window).scrollTop() <= 0){
    //             navbar.removeClass('navbar-scroll');
    //         } else {
    //             navbar.addClass('navbar-scroll');
    //             $('.navbar-scroll').css('position', 'fixed');

    //         }
    //     });
    // });

    // Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navSpeed: 800,
        autoplay: true,
        transitionStyle : "fade",
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        
    })
   


});