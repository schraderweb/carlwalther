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
        // $('.popup').scrollIntoView(true);
        window.scrollTo(0, 0);
    })
    $('.popup-btn2').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup2').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })
    $('.popup-btn3').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup3').toggle();
        window.scrollTo(0, 0);
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
        $('.popup4').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn5').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup5').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })

    $('.popup-btn6').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup6').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn7').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup7').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn8').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup8').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })


    $('.popup-btn9').click((e) => {
        e.preventDefault();
        console.log("ok");
        $('.popup9').toggle();
        window.scrollTo(0, 0);
        // $('.service-item a.btn').trigger( "click" );
    })

        $('input[name="qty1"]').val(1);
        $('input[name="qty2"]').val(1);
        $('input[name="qty3"]').val(1);
        $('input[name="qty4"]').val(1);
        $('input[name="qty5"]').val(1);
        $('input[name="qty6"]').val(1);
        $('input[name="qty7"]').val(1);
        $('input[name="qty8"]').val(1);
        $('input[name="qty9"]').val(1);
        $('input[name="qty10"]').val(1);

        $('input[name="total1"]').val(0);
        $('input[name="total2"]').val(0);
        $('input[name="total3"]').val(0);
        $('input[name="total4"]').val(0);
        $('input[name="total5"]').val(0);
        $('input[name="total6"]').val(0);
        $('input[name="total7"]').val(0);
        $('input[name="total8"]').val(0);
        $('input[name="total9"]').val(0);
        $('input[name="total10"]').val(0);

        $('input[name="price1"]').val(0);
        $('input[name="price2"]').val(0);
        $('input[name="price3"]').val(0);
        $('input[name="price4"]').val(0);
        $('input[name="price5"]').val(0);
        $('input[name="price6"]').val(0);
        $('input[name="price7"]').val(0);
        $('input[name="price8"]').val(0);
        $('input[name="price9"]').val(0);
        $('input[name="price10"]').val(0);

    // $('input[name="drone"]'). 'input[name="drone"]:checked'
    let dr = 0;
    const  calcTotal = () => {
        let tot = parseFloat($('input[name="total1"]').val())
        + parseFloat($('input[name="total2"]').val())
        + parseFloat($('input[name="total3"]').val())
        + parseFloat($('input[name="total4"]').val())
        + parseFloat($('input[name="total5"]').val())
        + parseFloat($('input[name="total6"]').val())
        + parseFloat($('input[name="total7"]').val())
        + parseFloat($('input[name="total8"]').val())
        + parseFloat($('input[name="total9"]').val())
        + parseFloat($('input[name="total10"]').val());
        return tot ;

    }

    const calcRowTotal = () => {
        parseFloat($('input[name="total1"]').val(parseFloat($('input[name="qty1"]').val()) * parseFloat($('input[name="price1"]').val())))
        parseFloat($('input[name="total2"]').val(parseFloat($('input[name="qty2"]').val()) * parseFloat($('input[name="price2"]').val())))
        parseFloat($('input[name="total3"]').val(parseFloat($('input[name="qty3"]').val()) * parseFloat($('input[name="price3"]').val())))
        parseFloat($('input[name="total4"]').val(parseFloat($('input[name="qty4"]').val()) * parseFloat($('input[name="price4"]').val())))
        parseFloat($('input[name="total5"]').val(parseFloat($('input[name="qty5"]').val()) * parseFloat($('input[name="price5"]').val())))
        parseFloat($('input[name="total6"]').val(parseFloat($('input[name="qty6"]').val()) * parseFloat($('input[name="price6"]').val())))
        parseFloat($('input[name="total7"]').val(parseFloat($('input[name="qty7"]').val()) * parseFloat($('input[name="price7"]').val())))
        parseFloat($('input[name="total8"]').val(parseFloat($('input[name="qty8"]').val()) * parseFloat($('input[name="price8"]').val())))
        parseFloat($('input[name="total9"]').val(parseFloat($('input[name="qty9"]').val()) * parseFloat($('input[name="price9"]').val())))
        parseFloat($('input[name="total10"]').val(parseFloat($('input[name="qty10"]').val()) * parseFloat($('input[name="price10"]').val())))

        
    
    }
    
   

    $('input[type=radio][name=drone]').change(function () {
        if (this.value == 'yes') {
            // let total = calcTotal() + (calcTotal() * (5.3/100));
            // $('input[name="total"]').val(total);
            dr = (5.3/100);
        }
        else if (this.value == 'no') {
            // let total = calcTotal();
            // $('input[name="total"]').val(total);
            dr = 0;
        }
     
    });

    $(".getTotal").click(function (e) {
        e.preventDefault();
        calcRowTotal();
        if(dr == 0 ){
            $('input[name="total"]').val(calcTotal()); ;
        }else{
            dr = calcTotal() + (calcTotal() * dr)
            $('input[name="total"]').val(dr); ;
        }
        

    });

    $('#orderForm').on('submit', function (event) {

        event.preventDefault(); // prevent reload

        var formData = new FormData(this);
        console.log(formData);
        
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );


    })

    

})(jQuery);

