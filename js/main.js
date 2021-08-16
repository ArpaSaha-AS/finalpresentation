$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
    });
});







/* Scroll Up Start*/

$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function() {

        $('html,body').animate({ scrollTop: 0 }, 800);
    });
});



/* Scroll Up End*/