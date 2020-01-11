$(function(){
    $(".menuBtn").click(function(){
        $(".navMenu").slideToggle();
    });

    // pop-up window
    $('.orderCall').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    //carousel
    $('#suppliersList').owlCarousel({
        loop:false,
        rewind: true,
        margin:10,
        nav:false,
        mouseDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('#clientList').owlCarousel({
        loop:false,
        rewind: true,
        margin:0,
        nav:false,
        mouseDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    
    $('#services').owlCarousel({
        loop:false,
        rewind: true,
        margin:0,
        nav:false,
        mouseDrag: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
});