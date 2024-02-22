(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    $('.service-item').click((e) => {
        const el = e.target.closest('.service-item');
        console.log($( el ).find('a.btn').attr('href'));
        window.location.href = ($( el ).find('a.btn').attr('href'));
        // $('.service-item a.btn').trigger( "click" );
    })
    $('.product-list-text .btn').click((e) => {
        // const el = e.target.closest('.service-item');
        // console.log($( el ).find('a.btn').attr('href'));
        window.location.href = window.location.origin+'/order-form';
        // $('.service-item a.btn').trigger( "click" );
    })
    // $('body').on('click', '.service-item', function(e){
    //     e.curr.find('a.btn').trigger( "click" );
    // });
    document.getElementById("year").innerHTML = new Date().getFullYear();


    $('.popup-btn1').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup1').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })
    $('.popup-btn2').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup2').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })
    $('.popup-btn3').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup3').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })
    $('.close').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup').hide();
        // $('.service-item a.btn').trigger( "click" );
    })

    $('.popup-btn4').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup4').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn5').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup5').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })

    $('.popup-btn6').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup6').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn7').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup7').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn8').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup8').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn9').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup9').toggle()
        // $('.service-item a.btn').trigger( "click" );
    })


})(jQuery);

