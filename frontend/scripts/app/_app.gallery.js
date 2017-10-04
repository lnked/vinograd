let app = app || {};

((body => {
    "use strict";

    app.gallery = {

        fancybox: function(selector)
        {
            const options = {
                helpers: {
                    overlay: {
                        locked: false
                    },
                    title: {
                        type: 'inside'
                    },
                    buttons: {}
                },
                width: "650px",
                height: "650px",
                autoPlay: false,
                slideshow: true,
                transition: "none"
            };

            if (typeof selector !== 'undefined' && $(selector).length)
            {
                var $list, list = [ '.j-gallery', '.j-timeline', '.j-documents', '.j-floors', '.j-plans' ], random = '';

                for (var i = list.length - 1; i >= 0; i--) {
                    random = Math.random();

                    $list = $(list[i]).find('.zoom');
                    $list.prop('rel', 'gallery-' + random);

                    const params = Object.assign(options, {
                        rel: 'gallery-' + random,
                    });

                    $list.fancybox(params);
                }

            } else {
                $(".zoom").fancybox(options);
            }

            $('.j-pinch-trigger').fancybox(options);
        },

        init: function()
        {
            this.fancybox();
        }

    };

}))(document.body);