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
        if (($(window).width() < 768) && ($('.navbar-custom').hasClass('affix-top'))) {
            $('.navbar-custom').css({'padding-top':'8px'});
            $('.search-nav-1').css({'display': 'none'});
        }
        else {
            //$('.navcontainer').css({'background-color':'#ec651c'});
            if (($(window).width() >= 768) && ($('.navbar-custom').hasClass('affix-top'))) {
                $('.navbar-custom').css({'padding-top':'25px'});
            }
            else {
                if (($(window).width() >= 768) && !($('.navbar-custom').hasClass('affix-top'))) {
                    $('.navbar-custom').css({'padding-top':'8px'});
                    $('.navbar-custom').css({'height':'42px'});
                }
                else {
                    $('.navbar-custom').css({'height':'96px'});
                }
            }
        }
        if ($(window).width() < 480) {
            $(".search-nav-in").attr("placeholder","Cari barang atau masukkan URL");
            //$('.product-price').css({'display':'none'});
            //$('.product-price-2').css({'display':'block'});

            var modalWidth = $(window).width() - 32;

            $('.modal-dialog').css({'width': modalWidth});

        }
        else {
            //$('.product-price').css({'display':'block'});
            //$('.product-price-2').css({'display':'none'});
        }
        var h = window.innerHeight;
        $('header').css({'height': h, 'width': 'auto'});
        var padding = (h - $('.intro-text').height())/2 + 16;
        console.log(h);
        console.log(padding);
        $('.intro-text').css({'padding-top': padding});

        if ($('.logo-container').width() < $('.logo-center').width()) {
            var widthX = $('.logo-container').width();
            $('.logo-center').css({'width': widthX});
        }
        else {
            $('.logo-center').css({'width': '152px'});
        }
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
           $('.search-nav').css({'visibility': 'visible'});
           $('.search-nav-small').css({'display': 'block'});
           if ($(window).width() < 768)  {
                $('.navbar-custom').css({'height':'96px'});
                $('.search-nav-1').css({'display': 'block'});
           }
        }
        else
        {
            $('.search-nav').css({'visibility': 'hidden'});
            $('.search-nav-small').css({'display': 'none'});
            if ($(window).width() < 768)  {
                $('.navbar-custom').css({'height':'54px'});
                $('.search-nav-1').css({'display': 'none'});
           }
        }
    });

    var sidebarShown = false;
    $('.fa-bars').click(function() {
        $('.sidebar').css({'display': 'block'});
        $('.sidebar-overlay').css({'display': 'block'});
        $('body').css({'overflow': 'hidden'});
        $('.sidebar').css({'overflow-y': 'scroll'});
        sidebarShown = true;
    });
    $('.sidebar-overlay').click(function() {
        $('.sidebar').scrollTop(0);
        $('.sidebar').css({'display': 'none'});
        $('.sidebar-overlay').css({'display': 'none'});
        $('body').css({'overflow': 'scroll'});
        sidebarShown = false;
    });


})(jQuery); // End of use strict
