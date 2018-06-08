//-----Swiper-------//

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // onInit: function () {
        //
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 480px
            540: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    var formElements = $('.form__row input, .form__row textarea');

    formElements.on('focusin', function () {
        if ($(this).attr('required') !== undefined) {
            $(this).parent().addClass('required');
        }
    });

    formElements.on('focusout', function () {
        if ($(this).attr('required') !== undefined) {
            $(this).parent().removeClass('required');
        }
    });
});
//-----Initial Fancy box-------//

$('[data-fancybox]').fancybox({
    // Options will go here
});


    // function f(callback) {
    //     console.log('Hello world;');
    //     callback();
    // }

//     f(function () {
//
//     });
//
// });

//-----Isotop-------//

$(window).on('load', function () {

    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
    });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    });
});

//-----Scroll-to-top-----//
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});

//----Scroll-Down-----//
// $(function() {
//
//     $(window).scroll(function() {
//
//         if($(this).scrollTop() != 1) {
//
//             $('#toDown').fadeIn();
//
//         } else {
//
//             $('#toDown').fadeOut();
//
//         }
//
//     });
//
//     $('#toDown').click(function() {
//
//         $('body,html').animate({scrollTop:601},800);
//
//     });
//
// });
$('a[href*=top-bar]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});

//----Parsley----//
$('#form').parsley();
$(function () {
    $('#form').on('field:validate', function() {
        var ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
    })
        .on('form:submit', function() {
            return false;
        });
});
