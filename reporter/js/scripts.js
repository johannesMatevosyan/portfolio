jQuery(document).ready(function() {
    console.log('ready ');

    // show hide tooltips for social icons
    $(".sl").hover(function(){
        console.log('mouseover');
        $('.sl_tooltip').show();
    },function(){
        $('.sl_tooltip').hide();
    });
    $(".sn").hover(function(){
        console.log('mouseover');
        $('.sn_tooltip').show();
    },function(){
        $('.sn_tooltip').hide();
    });

    // magnific popup window
    $('.call_video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    gallery = kGallery({
        wrapper: '#gallery-wrapper',
        dataSource: 'img/slide-gallery/gallery2.json',
        startItem: 0,
        slideshowOptions: {
            autoPlay: true
        },
        thumbnailPickerOptions: {
            vertical: true,
            itemsOnPage: 5
        }
    });

    $('.main_nav .main_menu').on('click', function(){
        $('.main_nav ul').slideToggle();
    });

    $('.main_nav .vertical_sidebar').toggle(function(){
        $('#main_sidebar').animate({width:240});
    },function(){
        $('#main_sidebar').animate({width:0});
    })



});