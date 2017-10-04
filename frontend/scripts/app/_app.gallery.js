let app = app || {};

((body => {
    "use strict";

    app.gallery = {

        fancybox: function(selector)
        {
            // if (typeof selector !== 'undefined' && $(selector).length) {

            // } else {
            //     var $list, list = [ '.j-gallery', '.j-timeline', '.j-documents', '.j-floors', '.j-plans' ], random = '';

            //     for (var i = list.length - 1; i >= 0; i--) {
            //         random = Math.random();
            //         $list = $(list[i]).find('.zoom');
            //         $list.prop('rel', 'gallery-' + random);

            //         $list.fancybox({
            //             helpers: {
            //                 overlay: {
            //                     locked: true
            //                 }
            //             },
            //             width: "650px",
            //             height: "650px",
            //             rel: 'gallery-' + random,
            //             transition: "none",
            //             slideshow: true
            //         });
            //     }
            // }

            // $('.j-pinch-trigger').fancybox({
            //     transition: "none",
            //     autoPlay: false,
            //     helpers : {
            //         title: {
            //             type: 'inside'
            //         },
            //         overlay: {
            //             locked: true
            //         },
            //         buttons  : {}
            //     }
            // });
        },

        init: function()
        {
            this.fancybox();
        }

    };

}))(document.body);