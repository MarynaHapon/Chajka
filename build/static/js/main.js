    // menu
var elm = document.querySelector('#menu');
var ms = new MenuSpy(elm);


$('.slogan-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true
});


    // sticky header
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $('#menu-top').addClass("navbar-fixed-top");
    } else {
        $('#menu-top').removeClass("navbar-fixed-top");
    }
});