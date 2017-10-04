let app = app || {};

((body => {
    "use strict";

    app.location = {

        trigger: function()
        {
            var $mobile = $('#location-mobile'), $content = null, number = 0;
            
            $mobile.find('.j-close').on('click', function(){
                $mobile.addClass('is-disabled');
                $content = $mobile.find('.j-content');

                $content.removeClass('_animate');

                setTimeout(function(){
                    $content.removeClass('_active');

                    $mobile.addClass('is-hidden').removeClass('is-disabled');
                }, 300);
            });

            $('body').on('click', '.j-loc-flag', function(){
                $mobile.removeClass('is-hidden');
                $content = $mobile.find('.j-content');

                $content.find('.j-content-middle').html($(this).closest('.location__item').find('.location__item__content').html());

                $content.addClass('_active');
                
                number = $(this).data('number');

                $mobile.removeClass('_num-1 _num-2 _num-3 _num-4 _num-5 _num-6').addClass('_num-' + number);

                setTimeout(function(){
                    $content.addClass('_animate');
                }, 10);
            });
        },

        init: function()
        {
            // $('.zoom').fancybox();
        }

    };

}))(document.body);