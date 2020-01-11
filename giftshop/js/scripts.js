$( document ).ready(function() {
    console.log( "ready!" );

    $(".wrap_gal_item").hover(
        function() {
            $(this).find('.gal_caption').fadeOut();
            $(this).find('ul.gallery_item_options').fadeIn();
        },
        function() {
            $(this).find('.gal_caption').fadeIn();
            $(this).find('ul.gallery_item_options').fadeOut();
        }
    );


    $("ul.nav_items > li > a").on('click', function(){
        if($(this).find('.wrap_dropdown')){
            if($('.wrap_dropdown').is(':visible')){
                $(".wrap_dropdown").fadeOut(500);
            }else{
                $(".wrap_dropdown").fadeIn(500);
            }
        }

        return false;
    });

    $(".holder + input").on('keydown', function() {
        if($(this).val().length) {
            $(this).prev('.holder').hide();
        } else {
            $(this).prev('.holder').show();
        }
    });


    $(".gal_item_options .opt_3").on('mouseover', function() {
        if($(this).find('.basket_tooltip').length == 0){
            $(this).append('<div class="basket_tooltip"> add to cart </div>');
        }
    });
    $(".gal_item_options .opt_3").on('mouseout', function() {
        if($(this).find('.basket_tooltip').length != 0){
            $(this).children('.basket_tooltip').remove();
        }
    });

    $('#new_products').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('#featured_products').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });

    resize_images();
    responsive_navbar();

});

function resize_images(){

    var windowWidth = $(window).width();

    if(windowWidth < 1440 && windowWidth > 1200){
        var gal_left_height = $('.gallery > .gal_row > .gal_right.top').outerHeight();
        $('.gallery > .gal_row > .gal_left.top > .wrap_gal_item.h570 a').height(gal_left_height);
        var gal_right_bottom_height = $('.gallery > .gal_row > .gal_right.bottom').outerHeight();
        var search_product = $('.gallery > .gal_row > .gal_left.bottom .search_product').outerHeight();
        $('.gallery > .gal_row > .gal_left.bottom > .wrap_gal_item.h335 a').height(gal_right_bottom_height - search_product - 4);
    }
    if(windowWidth > 767 && windowWidth <= 1200){
        var gal_left_height = $('.gallery > .gal_row > .gal_right.top').outerHeight();
        $('.gallery > .gal_row > .gal_left.top > .wrap_gal_item.h570 a').height(gal_left_height);
        var gal_right_bottom_height = $('.gallery > .gal_row > .gal_right.bottom').outerHeight();
        var search_product = $('.gallery > .gal_row > .gal_left.bottom .search_product').outerHeight();
        $('.gallery > .gal_row > .gal_left.bottom > .wrap_gal_item.h335 a').height(gal_right_bottom_height - search_product - 4);
    }
    if(windowWidth < 1200){
        $('.search_product .wrap_input .holder').css('color', 'transparent');
        $('.search_product .wrap_input .holder span').css('color', 'transparent');
    }else{
        $('.search_product .wrap_input .holder').css('color', '#434343');
        $('.search_product .wrap_input .holder span').css('color', '#c2c2c2');
    }


    $(window).resize(function(){

        var windowResizedWidth = $(window).width();

        if(windowWidth < 1440 && windowWidth > 1200) {

            var gal_left_height = $('.gallery > .gal_row > .gal_right.top').outerHeight();
            $('.gallery > .gal_row > .gal_left.top > .wrap_gal_item.h570 a').height(gal_left_height - 8);

            var gal_right_bottom_height = $('.gallery > .gal_row > .gal_right.bottom').outerHeight();
            var search_product = $('.gallery > .gal_row > .gal_left.bottom .search_product').outerHeight();
            $('.gallery > .gal_row > .gal_left.bottom > .wrap_gal_item.h335 a').height(gal_right_bottom_height - search_product - 4);
        }
        if(windowWidth > 767 && windowWidth <= 1200) {
            var gal_left_height = $('.gallery > .gal_row > .gal_right.top').outerHeight();
            $('.gallery > .gal_row > .gal_left.top > .wrap_gal_item.h570 a').height(gal_left_height - 4);

            var gal_right_bottom_height = $('.gallery > .gal_row > .gal_right.bottom').outerHeight();
            var search_product = $('.gallery > .gal_row > .gal_left.bottom .search_product').outerHeight();
            $('.gallery > .gal_row > .gal_left.bottom > .wrap_gal_item.h335 a').height(gal_right_bottom_height - search_product - 4);
        }

        if(windowResizedWidth < 1200){

            $('.search_product .wrap_input .holder').css('color', 'transparent');
            $('.search_product .wrap_input .holder span').css('color', 'transparent');
        }else{
            $('.search_product .wrap_input .holder').css('color', '#434343');
            $('.search_product .wrap_input .holder span').css('color', '#c2c2c2');
        }
    });
}

function responsive_navbar(){

    $('.navigation .nav_media').on('click', function(){
        $('.navigation .nav_items').slideToggle();
    });
}