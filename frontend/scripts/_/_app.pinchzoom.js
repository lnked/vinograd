let app = app || {};

((body => {
    "use strict";

    app.pinchzoom = {

        pinch: function($element) {
            if ($element.find('.j-pinch-zoom').length) {
                new RTP.PinchZoom($element.find('.j-pinch-zoom'), {
                    tapZoomFactor:      3,
                    minZoom:            0.5,
                    maxZoom:            10,
                    lockDragAxis:       true
                });
            }
        },

        trigger: function() {
            _this = this;

            var image, $popup;

            $('body').on('click', '.j-pinch-trigger', function(e){
                e.preventDefault();

                image = $(this).attr('href');

                $popup = $(template('tmpl-popup-pinch', { 'image': image }));

                $popup.addClass('temp');

                $('body').append($popup);

                $.popup.show($popup);

                _this.pinch($popup);

                return false;
            });
        },

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);
