$('document').ready(function() {

    /* Mostrar y ocultar menu versión mobile */
    $('#boton-menu').click(function() {
        $('.menu').removeClass('menu-oculto');
    });
    $('.esconder-menu').click(function() {
        $('.menu').addClass('menu-oculto');
    });

})