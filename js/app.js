$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $('.side-nav').addClass('reveal');
    });
    $('.cls-nav').on('click', function () {
        $('.side-nav').removeClass('slide-out');
    });

    //hide side nav
    var sideMenu = document.getElementById('side-menu');
    var mapModal = document.getElementById('map-modal');
    window.onclick = function(event) {
        if (event.target === sideMenu) {
            $('.side-nav').removeClass('reveal');
        }else if(event.target === mapModal){
            $('.map-modal').removeClass('show-map');
        }
    };

    $('.partner-slider').owlCarousel({
        items:5,
        margin:20,
        stagePadding:3,
        smartSpeed:450,
        autoplay: true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    $('.testim-slider').owlCarousel({
        items:1,
        margin:20,
        stagePadding:3,
        smartSpeed:450,
        autoplay: true,
        loop: true
    });

    //count up js initialization
    $('.typedd').typed({
        strings: ["A Unique Golf Experience.", "A Healthy Environment.", "Your Home From Home"],
        typeSpeed: 80,
        loop: true,
        smartBackspace: true
    });

    $('.show-map-modal').on('click', function (e) {
        e.preventDefault();
       $('.map-modal').addClass('show-map');
    });
    $('.cancel').on('click', function (e) {
        e.preventDefault();
        $('.map-modal').removeClass('show-map');
    });

});