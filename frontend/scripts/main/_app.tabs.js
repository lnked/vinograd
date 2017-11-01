let app = app || {};

((body => {
    "use strict";

    app.tabs = {

        trigger: function()
        {
            $('body').on('click', '.j-tab', function(e) {
                e.preventDefault();

                if (!$(this).hasClass('current')) {
                    var tab = $(this).attr('href').substr(2),
                        wrapper = $(this).data('wrapper');

                    $(this).closest('.j-tab-closest').find('.current').removeClass('current');

                    if ($('#tab-' + wrapper).length) {
                        var $items = $('#tab-' + wrapper).find('.is-item');

                        $items.removeClass('is-show');
                        $items.filter('.' + tab).addClass('is-show');
                    }

                    $(this).addClass('current');

                    var $cover = $(this).closest('.j-tabs-cover');
                    var $content = $cover.find('.j-tabs-content');

                    if ($content.hasClass('active')) {
                        $content.removeClass('animate');
                        
                        setTimeout(function(){
                            $content.removeClass('active');
                        }, 300);
                    }
                }
                
                return !1;
            });

            $('body').on('click', '.j-tabs-trigger', function(){
                var $cover = $(this).closest('.j-tabs-cover');
                if ($cover.length) {
                    var $content = $cover.find('.j-tabs-content');
                    
                    if ($content.hasClass('active')) {
                        $content.removeClass('animate');
                        
                        setTimeout(function(){
                            $content.removeClass('active');
                        }, 300);
                    }
                    else {
                        $content.addClass('active');
                        
                        setTimeout(function(){
                            $content.addClass('animate');
                        }, 10);
                    }
                }
            });
        },

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);
