$(function() {
    $('.material-card >').hover(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');
        } else {
            card.addClass('mc-active');
        }
    });
});