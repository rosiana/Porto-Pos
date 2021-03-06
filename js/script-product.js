// Agency Theme JavaScript

(function($) {

    $(window).on("load resize scroll",function(e){ 
        $('.navtop-2-fix').css({'margin-top':'8px'});
        
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
        if (($(window).width() >= 768) && ($(window).width() <= 991)) {
            $('.search-nav-test').addClass('col-xs-5');
            $('.search-nav-test').removeClass('col-xs-6');
            $('.nav-menu-test').addClass('col-xs-4');
            $('.nav-menu-test').removeClass('col-xs-3');
        }
        else {
            if ($(window).width() > 991) {
                $('.search-nav-test').addClass('col-xs-6');
                $('.search-nav-test').removeClass('col-xs-5');
                $('.nav-menu-test').addClass('col-xs-3');
                $('.nav-menu-test').removeClass('col-xs-4');
            }
        }
        if ($(window).width() >= 1200) {
            $('.profile-nav').removeClass('col-xs-8');
            $('.profile-nav').addClass('col-xs-7');
            $('.cart-icon-container').removeClass('col-xs-4');
            $('.cart-icon-container').addClass('col-xs-5');
        }
        else {
            if (($(window).width() < 1200) && ($(window).width() >= 992)) {
                $('.profile-nav').removeClass('col-xs-7');
                $('.profile-nav').addClass('col-xs-8');
                $('.cart-icon-container').removeClass('col-xs-5');
                $('.cart-icon-container').addClass('col-xs-4');
                $('.col-count').removeClass('col-xs-9');
                $('.col-count').addClass('col-xs-8');
                $('.col-sort').removeClass('col-xs-3');
                $('.col-sort').addClass('col-xs-4');
            }
        }
        if (($(window).width() < 1200) && ($(window).width() >= 992)) {
            $('.product-pics').removeClass('col-xs-6');
            $('.product-pics').addClass('col-md-4');
            $('.product-desc').removeClass('col-md-5');
            $('.product-desc').removeClass('col-xs-6');
            $('.product-desc').addClass('col-md-4');
            $('.product-buy').removeClass('col-md-3');
            $('.product-buy').removeClass('col-xs-12');
            $('.product-buy').addClass('col-md-4');
            $('.product-desc').css({'padding-left': '0'});
            $('.product-desc').css({'padding-right': '0'});
            $('.product-pics').css({'padding-right': '24px'});
            $('.product-buy').css({'padding-left': '24px'});
        }
        else {
            if ($(window).width() <= 480) {
                $('.product-pics').addClass('col-md-4');
                $('.product-pics').removeClass('col-xs-6');
                $('.product-pics').addClass('col-xs-12');
                $('.product-desc').addClass('col-md-5');
                $('.product-desc').removeClass('col-xs-6');
                $('.product-desc').addClass('col-xs-12');
                $('.product-desc').removeClass('col-md-4');
                $('.product-buy').addClass('col-md-3');
                $('.product-buy').addClass('col-xs-12');
                $('.product-buy').removeClass('col-md-4');
                $('.product-desc').css({'padding-left': '16px'});
                $('.product-desc').css({'padding-right': '16px'});
                $('.product-pics').css({'padding-right': '16px'});
                $('.product-buy').css({'padding-left': '16px'});
            }
            else {
                $('.product-pics').addClass('col-md-4');
                $('.product-pics').addClass('col-xs-6');
                $('.product-desc').addClass('col-md-5');
                $('.product-desc').addClass('col-xs-6');
                $('.product-desc').removeClass('col-md-4');
                $('.product-buy').addClass('col-md-3');
                $('.product-buy').addClass('col-xs-12');
                $('.product-buy').removeClass('col-md-4');
                $('.product-desc').css({'padding-left': '16px'});
                $('.product-desc').css({'padding-right': '16px'});
                $('.product-pics').css({'padding-right': '16px'});
                $('.product-buy').css({'padding-left': '16px'});
            }
            
        }
        if ($(window).width() <= 768) {
            $('.total-tagihan-all').removeClass('pull-right');
            $('.lower-header-2').css({'display':'none'});
            $('.lower-header-2-down').css({'display':'block'});
            $('.table-head-bot').css({'display':'block'});

            $('.small-purchase').css({'display':'block'});
            $('.big-purchase').css({'display':'none'});
        }
        else {
            $('.total-tagihan-all').addClass('pull-right');
            $('.lower-header-2').css({'display':'block'});
            $('.lower-header-2-down').css({'display':'none'});
            $('.table-head-bot').css({'display':'none'});

            $('.small-purchase').css({'display':'none'});
            $('.big-purchase').css({'display':'block'});
        }
        if ($(window).width() <= 991) {
            $('.category-empty').css({'display':'none'});
        }
        else {
            $('.category-empty').css({'display':'block'});
        }

        if (($(window).width() >= 768) && ($(window).width() <= 991)) {
            //$('.filter').removeClass('col-sm-3');
        }

        if (($(window).width() < 1200) && ($(window).width() >= 992)) {
            $('.col-count').css({'display': 'block'});
            $('.col-count').removeClass('col-xs-9');
            $('.col-count').removeClass('col-xs-6');
            $('.col-count').addClass('col-xs-8');
            $('.col-sort').css({'display': 'block'});
            $('.col-sort').removeClass('col-xs-3');
            $('.col-sort').removeClass('col-xs-6');
            $('.col-sort').addClass('col-xs-4');
            $('.filter').css({'display': 'block'});
            $('.filter-sort').css({'display': 'none'});
        }
        else {
            if ($(window).width() >= 1200) {
                $('.col-count').css({'display': 'block'});
                $('.col-count').removeClass('col-xs-8');
                $('.col-count').removeClass('col-xs-6');
                $('.col-count').addClass('col-xs-9');
                $('.col-sort').css({'display': 'block'});
                $('.col-sort').removeClass('col-xs-4');
                $('.col-sort').removeClass('col-xs-6');
                $('.col-sort').addClass('col-xs-3');
                $('.filter').css({'display': 'block'});
                $('.filter-sort').css({'display': 'none'});
            }
            else {
                if (($(window).width() < 992) && ($(window).width() >= 768)) {
                    $('.col-count').css({'display': 'block'});
                    $('.col-count').removeClass('col-xs-8');
                    $('.col-count').removeClass('col-xs-9');
                    $('.col-count').addClass('col-xs-6');
                    $('.col-sort').css({'display': 'block'});
                    $('.col-sort').removeClass('col-xs-4');
                    $('.col-sort').removeClass('col-xs-3');
                    $('.col-sort').addClass('col-xs-6');
                    $('.filter').css({'display': 'block'});
                    $('.filter-sort').css({'display': 'none'});
                }
                else {
                    $('.col-sort').css({'display': 'none'});
                    $('.col-count').css({'display': 'none'});
                    $('.filter').css({'display': 'none'});
                    $('.filter-sort').css({'display': 'block'});
                }
            }
        }
        if ($(window).width() <= 480) {
            $('.btn-confirm-group-1').css({'display':'none'});
            $('.btn-confirm-group-2').css({'display':'block'});
        }
        else {
            $('.btn-confirm-group-1').css({'display':'block'});
            $('.btn-confirm-group-2').css({'display':'none'});
        }
    })

    var checked = false;
    $('.ingat-saya').click(function() {
        if (!checked) {
            $('.checkbox-custom').addClass('fa-check-square-o');
            $('.checkbox-custom').removeClass('fa-square-o');
            checked = true;            
        }
        else {
            $('.checkbox-custom').removeClass('fa-check-square-o');
            $('.checkbox-custom').addClass('fa-square-o');
            checked = false;     
        }
    });


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
    var loggedIn = false;
    $('.fa-bars').click(function() {
        if (loggedIn) {
            $('.sidebar-logged-in').css({'display': 'block'});
            $('.sidebar-logged-out').css({'display': 'none'});
        }
        else {
            $('.sidebar-logged-in').css({'display': 'none'});
            $('.sidebar-logged-out').css({'display': 'block'});
        }
        $('.sidebar-overlay').css({'display': 'block'});
        $('body').css({'overflow': 'hidden'});
        if (!loggedIn) {
            console.log("out");
            $('.sidebar').css({'overflow-y': 'hidden'});
            $('.sidebar').css({'overflow-x': 'hidden'});
        }
        else {
            $('.sidebar').css({'overflow-y': 'scroll'});
            $('.sidebar').css({'overflow-x': 'hidden'});
        }
        sidebarShown = true;
    });
    $('.sidebar-overlay').click(function() {
        $('.sidebar').scrollTop(0);
        $('.sidebar').css({'display': 'none'});
        $('.sidebar-overlay').css({'display': 'none'});
        $('body').css({'overflow': 'scroll'});
        sidebarShown = false;
    });

    $('.btn-login-test').click(function() {
        $('.sidebar').scrollTop(0);
        $('.sidebar').css({'display': 'none'});
        $('.sidebar-overlay').css({'display': 'none'});
        $('body').css({'overflow': 'scroll'});
        sidebarShown = false;
    });

    $('.btn-login-test-modal').click(function() {
        if (loggedIn) {
            $('.nav-menu-logged-out').css({'display': 'block'});
            $('.nav-menu-logged-in').css({'display': 'none'});
            $('.nav-menu-logged-in-2').css({'display': 'none'});
            loggedIn = false;
        }
        else {
            $('.nav-menu-logged-out').css({'display': 'none'});
            $('.nav-menu-logged-in').css({'display': 'block'});
            $('.nav-menu-logged-in-2').css({'display': 'block'});
            loggedIn = true;
        }
    });

    $('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


     $('.search-nav-in').click(function() {
        if ($('.search-nav-in').is(':focus')) {
            $('.fa-search-nav').css({'opacity': '1'});
            $('.fa-search-nav').css({'color': '#ddd'});
            console.log("foc");
        }
        else {
            $('.fa-search-nav').css({'opacity': '0.5'});
            $('.fa-search-nav').css({'color': '#fff'});
        }
    });

     $('.datepicker').datepicker();

     $('.step-1').css({'display':'block'});
     $('.step-2').css({'display':'none'});
     $('.step-3').css({'display':'none'});
     $('.step-4').css({'display':'none'});
     $('.btn-chev-icon').css({'display':'inline-block'});

     $('.btn-step-1').click(function() {
        $('.step-1').css({'display':'none'});
         $('.step-2').css({'display':'block'});
     })
     $('.btn-step-2').click(function() {
        $('.step-2').css({'display':'none'});
         $('.step-3').css({'display':'block'});
     })
     $('.btn-step-3').click(function() {
        $('.step-3').css({'display':'none'});
         $('.step-4').css({'display':'block'});
     })
     $('.btn-step-4').click(function() {
        window.location.href = "index.html";
        loggedIn = true;
     })
     $('.btn-login-test-modal').click(function() {
        console.log("tes");
        window.location.href = "index.html";
        loggedIn = true;
     })
})(jQuery); // End of use strict
