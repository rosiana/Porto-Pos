// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(window).on("load resize scroll",function(e){ 
        if ($(window).width() > 759) {
           $('.navtop').append($('.navbar-collapse'));
           $('.navbar-collapse').removeClass('navbar-onclick');
           $('.navbar-collapse').css({'float':'right'});
           $('.form-control-outer').addClass('col-md-8');
           $('.form-control-outer').addClass('col-md-offset-2');
        }
        else {
           $('.navcontainer').append($('.navbar-collapse'));
           $('.navbar-collapse').css({'float':'left'});
           $('.navbar-collapse').addClass('navbar-onclick');
           $('.form-control-outer').removeClass('col-md-8');
           $('.form-control-outer').removeClass('col-md-offset-2');
        }
        if ($(window).width() < 870) {
            $(".logo").attr("src","img/logo_putih_2.png");
            $('.logo').addClass('logo-small');
            $('.logo-small').css({'width':'48px'});
            $('.logo-small').css({'transform':'translateY(-60%)'});
            if ($(window).width() > 760) {
                $('.navbar-header').addClass('col-xs-1');
                $('.navbar-header').removeClass('col-xs-2');
            }
            else {
                $('.navbar-header').removeClass('col-xs-1');
                $('.navbar-header').addClass('col-xs-2');
            }
        }
        else {
            $(".logo").attr("src","img/logo_putih.png");
            $('.logo').addClass('logo-small');
            $('.navbar-brand img').css({'width':'132px'});
            $('.navbar-brand img').css({'transform':'translateY(-50%)'});
            $('.navbar-header').removeClass('col-xs-1');
            $('.navbar-header').addClass('col-xs-2');
        }
        if ($('.navbar-custom').hasClass('affix-top')) {
            $('.navbar-custom').css({'background-color':'transparent'});
        }
        else {
            $('.navbar-custom').css({'background-color':'#ec651c'});
        }
        if ($(window).width() < 480) {
            $('.product-price').css({'display':'none'});
            $('.product-price-2').css({'display':'block'});
        }
        else {
            $('.product-price').css({'display':'block'});
            $('.product-price-2').css({'display':'none'});
        }
        var h = window.innerHeight;
        $('header').css({'height': h, 'width': 'auto'});
        var padding = (h - $('.intro-text').height())/2 + 16;
        console.log(h);
        console.log(padding);
        $('.intro-text').css({'padding-top': padding});
    })


    $('.navbar-toggle').click(function(){
        $('.navbar-custom').toggleClass('navbar-onclick');
    })

    $(document).ready(function() {
        $('.tooltip').tooltipster({
            theme: 'tooltipster-borderless'
        }
        );
    });
    var searchWidth = $('.search-header-count').width();
    console.log("h "+ searchWidth);
    //$('.search-nav-in').css({'width': searchWidth});


    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $('.partnership').offset().top;             

        if(y_scroll_pos > scroll_pos_test) {
           $('.search-nav').css({'display': 'inline-block'});
        }
        else
        {
            $('.search-nav').css({'display': 'none'});
        }
    });

})(jQuery); // End of use strict