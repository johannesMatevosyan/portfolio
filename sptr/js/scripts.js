$(document).ready(function() {
    

    $('#slideGalleryList').owlCarousel({
        loop:false,
        rewind: true,
        margin:2,
        nav:false,
        dots: true,
        dotsEach: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            }
        }
    });

});