jQuery(document).ready(function($){
        
        $('#main_products').owlCarousel({
            loop:false,
            rewind: true,
            margin:30,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $('.nav_bar .media_nav').on('click', function(){
            $(this).siblings('.wrap_nav_bar').slideToggle();
        });

        /*
        $( "#slider_range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                $('.ui-slider-handle').find('.range_tooltip').remove();
                $(".ui-slider-handle").first().append( "<span class='range_tooltip'></span>" );
                $(".ui-slider-handle").first().find('.range_tooltip').text( "$" + ui.values[ 0 ] );

                $(".ui-slider-handle").last().append( "<span class='range_tooltip'></span>" );
                $(".ui-slider-handle").last().find('.range_tooltip').text( "$" + ui.values[ 1 ] );

            }
        }); */
        /*

        $('.ui-slider-handle').find('.range_tooltip').remove();
        $("#slider_range .ui-slider-handle").first().append( "<span class='range_tooltip'></span>" );
        $("#slider_range .ui-slider-handle").first().find('.range_tooltip').text( "$" + $( "#slider_range" ).slider( "values", 0 ));

        $("#slider_range .ui-slider-handle").last().append( "<span class='range_tooltip'></span>" );
        $("#slider_range .ui-slider-handle").last().find('.range_tooltip').text( "$" + $( "#slider_range" ).slider( "values", 1 ) );
        */

        // Thumbnail gallery
        /*
        var gallery = new $.ThumbnailGallery($('#gallery'), {
            thumbImages: 'img/single/thumbs/thumb',
            smallImages: 'img/single/small/image',
            largeImages: 'img/single/large/image',
            count: 3,
            thumbImageType: 'jpg',
            imageType: 'jpg',
            breakpoint: 600,
            shadowStrength: 1
        }); */

        var count = 3;
        var number = 1;
        var dot = '.';
        var $large_div = $("<div>", {class: "large_item"});
        var $thumb_div = $("<div>", {class: "thumbnails"});


        var thumbnails = 'img/single/thumbs/thumb';
        var large_images = 'img/single/large/large';
        var thumb_image_type = 'jpg';
        var large_image_type = 'jpg';

        $('#gallery').append($large_div);
        $('#gallery').append($thumb_div);

        var img = $('<img />', {
            src: large_images + number + '.' + large_image_type,
            alt: 'my Alt'
        });
        img.appendTo($('#gallery ' + '.' + $large_div.attr('class')));

        for(number; number <= count; number++){

            var content = $('<a href="#" class="thumbnail_item">')
                .append('<img src="' + thumbnails + number + '.' + thumb_image_type +'">');
            $('#gallery ' + dot + $thumb_div.attr('class')).append(content);

        }

        $('#gallery ' + dot + $thumb_div.attr('class') + ' ' + dot + 'thumbnail_item:first').addClass('active');

        $('#gallery .thumbnails a').on('click', function(){
            var point = '.';
            var slash = '/';
            var img_path = $(this).find('img').attr('src');


            var img_string =  img_path.split(slash);
            var img_full_name = img_string[img_string.length - 1];

            var img_name = img_full_name.split(point)[0];
            var img_ext = img_full_name.split(point)[1];

            var get_thumb = thumbnails.slice(thumbnails.lastIndexOf(slash) + 1, thumbnails.length);
            var img_num = img_name.split(get_thumb)[1];

            if($(this).siblings().hasClass('active')){
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            }

            $(this).parents('.thumbnails').siblings('.large_item').find('img').attr('src', large_images + img_num + point + img_ext);

            return false;
        });


        // review tabs
        $('ul.overview_tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.overview_tabs li').removeClass('current');
            $('.tab_content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })
   

});
