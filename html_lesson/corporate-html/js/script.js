$(function () {
    $('.toggle').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.g-nav').addClass('active');
        } else {
            $('.g-nav').removeClass('active');
        }
    });
});
