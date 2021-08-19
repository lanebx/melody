$(document).ready( function () {
    var selectFloor = 2;
    var counterUp = $('.arrow-up');
    var counterDown = $('.arrow-down');

    /* функция при клике ставит в счетсик нужный этаж и подствечивает его на картинке */
    $('.svg-home-image path').on('click', function () {
        selectFloor = $(this).attr('data-floor');
        $('.floor-counter').text(selectFloor);
        $('.svg-home-image path').removeClass("select-floor");
        $(`[data-floor = ${selectFloor}]`).toggleClass("select-floor");
    } );

    /* функция при нажатии на стрелку увиличитвает счетчик и подсвечивает этаж */
    counterUp.on( 'click', function() {
        if (selectFloor >= 18) return;
        selectFloor++;
        $('.floor-counter').text(selectFloor);
        $('.svg-home-image path').removeClass("select-floor");
        $(`[data-floor = ${selectFloor}]`).toggleClass("select-floor");
    });

    /* функция при нажатии на стрелку увиличитвает счетчик и подсвечивает этаж */
    counterDown.on( 'click', function() {
        if (selectFloor <= 2) return;
        selectFloor--;
        $('.floor-counter').text(selectFloor);
        $('.svg-home-image path').removeClass("select-floor");
        $(`[data-floor = ${selectFloor}]`).toggleClass("select-floor");
    });

} );