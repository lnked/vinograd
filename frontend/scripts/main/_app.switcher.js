let app = app || {};

((body => {
    "use strict";

    app.switcher = {

        trigger: function()
        {
            var $slider = $('#slider'), timeout = 6000, intervalID = null;

            $('body').on('change', '.j-switcher', function(){
                var daytime = $(this).val();
                $slider.find('.j-slider-item._active').addClass('_last-active');

                $slider.find('.j-slider-item._active').removeClass('_active');

                $slider.find('.j-slider-item').filter('[data-daytime="' + daytime + '"]').addClass('_active');

                setTimeout(function(){
                    $slider.find('.j-slider-item._last-active').removeClass('_last-active');
                }, 1000);

            });

            function startInterval() {
                clearInterval(intervalID);

                return setInterval(function(){
                    $('#slider-next').trigger('click');
                }, timeout);
            }

            function stopInterval(interval) {
                clearInterval(interval);
            }

            intervalID = startInterval();

            $('body').on('click', '.j-slider-navigation', function(){
                var direction = $(this).data('direction');

                stopInterval(intervalID);

                var $group = $slider.find('.j-slider-item._active'),
                    _count = $group.find('.j-slider-image').length - 1,
                    _index = $group.find('.j-slider-image._active').index(),
                    _next = 0;

                if (direction == 'prev') {
                    _next = _index - 1;
                }
                else if (direction == 'next') {
                    _next = _index + 1;
                }

                if (_next > _count) {
                    _next = 0;
                }
                
                if (_next < 0) {
                    _next = _count;
                }

                $group.find('.j-slider-image._active').addClass('_last-active');
                $group.find('.j-slider-image._active').removeClass('_active');
                $group.find('.j-slider-image').eq(_next).addClass('_active');

                setTimeout(function(){
                    $group.find('.j-slider-image._last-active').removeClass('_last-active');
                    intervalID = startInterval();
                }, 1000);
            });
        },

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);