let app = app || {};

((body => {
    "use strict";

    const banner_id = 'banner-new-year';

    app.banner = {

        initClose: function() {
            $('.banner.show').click(function(){
                if ($(`#${banner_id}`).length) {
                    var $banner = $(`#${banner_id}`);

                    if ($banner.hasClass('show')) {
                        $banner.removeClass('animate');

                        setTimeout(function(){
                            $banner.removeClass('show');
                        }, 300);
                    }
                }
            });
        },

        make: function(delay)
        {
            const _this = this;

            const close = function ($b) {
                $b.removeClass('animate');

                setTimeout(() => {
                    $b.removeClass('show');
                }, 400);
            }

            if ($(`#${banner_id}`).length) {
                const $banner = $(`#${banner_id}`);

                $(document).on('keyup', function(e) {
                    if (e.keyCode == 27) {
                        if ($banner.hasClass('show')) {
                            close($banner);
                        }
                    }
                });

                $banner.on('click', '.banner__image__close', function(e) {
                    e.preventDefault();
                    close($banner);
                });

                setTimeout(function(){
                    $banner.addClass('show');

                    setTimeout(function(){
                        $banner.addClass('animate');
                    }, 10);

                    _this.initClose();
                }, delay * 1000);
            }
        },

        init: function() {
            // this.make(2);
        }

    };

}))(document.body);
