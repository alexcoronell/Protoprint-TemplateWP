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


});