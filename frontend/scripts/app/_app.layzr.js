;(function ($) {
    "use strict";

    var _this;

    $.app = $.app || {};

    $.app.layzr = {

        init: function(config)
        {
            $(window).lazyLoadXT({
                edgeY:  200,
                srcAttr: 'data-src'
            });
        }

    };

})(jQuery);
