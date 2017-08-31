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
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $("#menu-top").addClass("navbar-fixed-top");
        } else {
            $("#menu-top").removeClass("navbar-fixed-top");
        }
    });


        // burger
    $(".burger").click(function () {
        $(".navbar-burger").toggle("fast");
    });

    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggle("slow");
    });


        // tabs product
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
            tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);


        // news product
    (function ($) {
        $('.news-tab ul.news-tabs').addClass('news-active').find('> li:eq(0)').addClass('news-current');

        $('.news-tab ul.news-tabs li a').click(function (g) {
            var newsTab = $(this).closest('.news-tab'),
                index = $(this).closest('li').index();

            newsTab.find('ul.news-tabs > li').removeClass('news-current');
            $(this).closest('li').addClass('news-current');

            newsTab.find('.news-tab-content').find('div.news-tabs-item').not('div.news-tabs-item:eq(' + index + ')').slideUp();
            newsTab.find('.news-tab-content').find('div.news-tabs-item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);


        // map
    function initMap() {
        var uluru = {lat: 49.839919, lng:  24.028002};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: uluru,
            styles: [
                {
                    elementType: 'geometry',
                    stylers: [{color: '#f5f5f5'}]
                },
                {
                    elementType: 'labels.icon',
                    stylers: [{visibility: 'off'}]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#28ad78'}]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#f5f5f5'}]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#28ad78'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#757575'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#e5e5e5'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9e9e9e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#ffffff'}]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#757575'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#dadada'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#616161'}]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9e9e9e'}]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{color: '#e5e5e5'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{color: '#eeeeee'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#00abaa'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#00abaa'}]
                }
            ]
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: pinSymbol('#28ad78')
        });
    }

    function pinSymbol(color) {
        return {
            path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
            fillColor: color,
            fillOpacity: 1,
            strokeColor: '#28ad78',
            strokeWeight: 2,
            scale: 1
        };
    }

    initMap()
    
});