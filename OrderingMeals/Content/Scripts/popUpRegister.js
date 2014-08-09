(function ($) {
    'use strict';

    $(function () {
        $('#makeOrder').on('click', function (e) {
            e.preventDefault();
            return popUp(e);
        });
    });
})(jQuery);