$(document).ready(function() {
    $('.carousel__inner').slick({

        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        adaptiveWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/solidl.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/solidr.svg"></button>',
        responsive: [{
            breakpoint: 903,
            settings: {
                dots: false,
                arrows: false

            }
        }]

    });

    $(document).on('click', '.catalog__tab', function() {

        $('.catalog__tab').removeClass('active');
        $(this).addClass('active');

        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });

    // Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });



    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.pageap').fadeIn();
        } else {
            $('.pageap').fadeOut();
        }
    });

    $("a[href*='#']").on("click", function(e) {
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });


});