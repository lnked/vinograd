;(function ($) {
    "use strict";

    var _this;

    $.app = $.app || {};

    $.app.pinchzoom = {

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

        init: function(config)
        {
            this.trigger();

            // $('.j-pinch-zoom').each(function () {
            //     // $(this).panzoom({
            //     //     minScale: 0.4,
            //     //     maxScale: 5,
            //     //     disablePan: false,
            //     //     disableZoom: false,
            //     //     panOnlyWhenZoomed: false
            //     // });

            //     // $(this).smartZoom({
            //     //     'top' : '0', // zoom target container top position in pixel
            //     //     'left' : '0', // zoom target container left position in pixel
            //     //     'width' : '100%', // zoom target container width in pixel or in percent
            //     //     'height' : '100%', // zoom target container height in pixel or in percent 
            //     //     'easing' : 'smartZoomEasing', // jquery easing function used when the browser doesn't support css transitions
            //     //     'maxScale' : 3, // the max scale that will be applied on the zoom target
            //     //     'dblClickMaxScale' : 1.8, // the max scale that will be applied on the zoom target on double click
            //     //     'mouseEnabled' : true, // enable plugin mouse interaction 
            //     //     'scrollEnabled' : true, // enable plugin mouse wheel behviour
            //     //     'dblClickEnabled' : true, // enable plugin mouse doubleClick behviour
            //     //     'mouseMoveEnabled' : true, // enable plugin target drag behviour
            //     //     'moveCursorEnabled' : true, // show moveCursor for drag
            //     //     'touchEnabled' : true, // enable plugin touch interaction 
            //     //     'dblTapEnabled' : true, // enable plugin double tap behaviour 
            //     //     'pinchEnabled' : true, // enable zoom when user pinch on target
            //     //     'touchMoveEnabled' : true
            //     // });

                // new RTP.PinchZoom($(this), {
                //     tapZoomFactor:      2,
                //     minZoom:            0.5,
                //     maxZoom:            6,
                //     lockDragAxis:       false
                // });
            // });

        }

    };

})(jQuery);