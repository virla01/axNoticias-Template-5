jQuery(document).ready(function($) {

    var menuBtn = $('.hamburger'),
        menu = $('#offcanvas');

    menuBtn.click(function() {

        if (menu.hasClass('offcanvas-open')) {
            menu.removeClass('offcanvas-open').toggle();
        } else {
            menu.addClass('offcanvas-open').toggle();
        }
    });
});