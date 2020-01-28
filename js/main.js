$('document').ready(function() {

    /* Mostrar y ocultar menu versión mobile */
    $('#boton-menu').click(function() {
        if ($(window).width() < 768) {
            $('.menu').removeClass('menu-oculto');
        } else {
            $('#boton-menu').addClass('ocultar-boton-menu');
            $('#boton-cerrar-menu').addClass('ocultar-menu');
            $('#boton-cerrar-menu').removeClass('ocultar-boton-menu');
            $('.menu').addClass('menu-desktop');
        }
    });

    $('.esconder-menu').click(function() {
        $('.menu').addClass('menu-oculto');
    });

    $('#boton-cerrar-menu').click(function() {
        $('#boton-menu').removeClass('ocultar-boton-menu');
        $('#boton-cerrar-menu').removeClass('ocultar-menu');
        $('#boton-cerrar-menu').addClass('ocultar-boton-menu');
        $('.menu').removeClass('menu-desktop');
    });

    /************************* MENU DESKTOP ***************************/
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        /* console.log(scroll); */
        if (scroll >= 100) {
            if ($(window).width() >= 768) {
                $('.cabecera').addClass('efectoHeader');
                $('.encabezado').addClass('efectoEncabezado');
                $('.mostrar-menu').addClass('efectoBotonMenu');
                $('.ocultar-boton-menu').addClass('efectoBotonMenu');
            }
        } else {
            if ($(window).width() >= 768) {
                $('.cabecera').removeClass('efectoHeader');
                $('.encabezado').removeClass('efectoEncabezado');
                $('.mostrar-menu').removeClass('efectoBotonMenu');
                $('.ocultar-boton-menu').removeClass('efectoBotonMenu');
            }
        }
    });

    /************************* INFOPROMOCIONES ***************************/
    $('.infopromociones-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-next botones-slider-infopromociones"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev botones-slider-infopromociones"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>'
    });

    /***********************SMOOTH SCROLL ************************************/
    smoothScroll.init({
        speed: 1500, // Integer. How fast to complete the scroll in milliseconds
        offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

    });
}); /* Fin $('document').ready(function() */