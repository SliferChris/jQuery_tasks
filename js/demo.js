$(document).ready(function () {

    // Slide toggle for the first section
    $('.toggle-btn').on('click', function () {
        $('.header-topleft img').slideToggle();
    });

    // Change background color and font styles on button click
    $('.change-styles-btn').on('click', function () {
        $('.squarechange').css({
            'background-color': 'lightblue',
            'font-family': 'Arial, sans-serif',
            'color': 'darkblue'
        });
    });

    // Fade toggle for the second section
    $('.toggle-btn-fly').on('click', function () {
        $('.header-topright img').fadeToggle();
    });

    // Slide in/out for the main content
    $('.btnslideout').on('click', function () {
        $('.maincontent-midleft img').animate({
            'margin-left': '-300px'
        });
    });

    $('.btnslidein').on('click', function () {
        $('.maincontent-midleft img').animate({
            'margin-left': '0'
        });
    });

    // Hide/show for the bulb section
    $('.btnon-bulb').on('click', function () {
        $('.maincontent-middle img').hide();
    });

    $('.btnoff-bulb').on('click', function () {
        $('.maincontent-middle img').show();
    });

    // Fade in/out for the ghost section
    $('.btnfadeoutghost').on('click', function () {
        $('.maincontent-midright img').fadeOut();
    });

    $('.btnfadeinghost').on('click', function () {
        $('.maincontent-midright img').fadeIn();
    });

    // You can add more interactions as needed...

});