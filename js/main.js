$(function(){

    var num = 50; //number of pixels before modifying styles
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.menu').addClass('fixed-top');
        } else {
            $('.menu').removeClass('fixed-top');
        }
    });


    $(document).ready(function() {
        $('a[href^="#"]').click(function() {
            var destino = $(this.hash);
            if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
            }
            if (destino.length == 0) {
            destino = $('html');
            }
            $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
            return false;
        });
    });
});