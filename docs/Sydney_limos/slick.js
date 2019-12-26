$(document).ready(function(){
    $('.picture_car_slider').slick({
        arrows: false,
        draggable: false,
        dots: false
    });

    $('.about_car_slider').slick({
        asNavFor: '.picture_car_slider',
        draggable: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next">-></button>',
        prevArrow: '',
        dots: true,
        dotsClass: 'about_car_dots',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    $('.car_list_slider').slick({
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.client_slider').slick({
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


});
