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
        $('#header-top').addClass("navbar-fixed-top");
    } else {
        $('#header-top').removeClass("navbar-fixed-top");
    }
});