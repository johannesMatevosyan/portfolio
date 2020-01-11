$(document).ready(function() {

    $('#carousel').owlCarousel({
        loop:false,
        rewind: true,
        margin:1,
        nav:true,
        navigation:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        dots: true,
        dotsEach: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('#newProducts').owlCarousel({
        loop:false,
        rewind: true,
        margin:12,
        nav:true,
        navigation:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        dots: true,
        dotsEach: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            767:{
                items:3
            }
        }
    });

    $('.cLinks ul li a').on('click', function(){
        $(this).siblings('.subProductsList').slideToggle(); // fa-minus-square

        if($(this).parents().siblings().children('.subProductsList:visible').length > 0){
            $(this).parent().siblings().find('.subProductsList:visible').slideToggle();
        }
        if($(this).parents().siblings().find('.plusIcon').find('i').hasClass('fa-minus-square')){
            $(this).parent().siblings().find('.plusIcon').find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
        }

        if($(this).children('.plusIcon').find('i').hasClass('fa-plus-square')){
            $(this).children('.plusIcon').find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
        }else if($(this).children('.plusIcon').find('i').hasClass('fa-minus-square')){
            $(this).children('.plusIcon').find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
        }
        return false;
    });

    $('.menuBtn').click(function(){
        $(".wrapper .hNav .abs").slideToggle();
    });

    $('.open').click(function(){
        $("header .headerNav .catalogOuter").toggle();
    });

});