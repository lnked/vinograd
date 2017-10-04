let app = app || {};

((body => {
    "use strict";

    app.plans = {

        trigger: function()
        {
            var $popup = null;

            $('body').on('click', '.j-plans-layout', function(e){
                e.preventDefault();
                
                var image = $(this).attr('href'),
                    title = $(this).attr('title');

                $popup = $(template('tmpl-popup-layout', {
                    'title': title,
                    'image': image
                }));

                $popup.addClass('temp');
                
                $('body').append($popup);
                
                $.popup.show($popup, false, true);

                return !1;
            });
        },

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);