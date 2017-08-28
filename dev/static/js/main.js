$(document).ready(function() {

    // menu
var elm = document.querySelector("#menu");
var ms = new MenuSpy(elm);

    // carousel
$(".slogan-carousel").flickity({
    cellAlign: "center",
    contain: true,
    wrapAround: true
});

    // sticky header
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 0) {
        $("#menu-top").addClass("navbar-fixed-top");
    } else {
        $("#menu-top").removeClass("navbar-fixed-top");
    }
});

    // burger
$( ".burger" ).click(function() {
    $( ".navbar" ).toggle( "fast" );
});

$( ".navbar" ).click(function() {
    $( ".navbar" ).toggle( "slow" );
});


    // tabs
(function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
    } );
})(jQuery);


});