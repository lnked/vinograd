let app = app || {};

((body => {
    "use strict";

    app.mask = {
        phone(selector) {
            if (document.querySelectorAll(selector).length) {
                $(selector).each(function(){
                    new Cleave($(this), {
                        phone: true,
                        phoneRegionCode: 'ru'
                    });
                });
            }
        },

        init() {
            const _this_ = this;

            _this_.phone('.j-phone-mask');

            $('body').on('popup.after_open', function(e, popup) {
                setTimeout(() => {
                    _this_.phone('.j-phone-mask');
                }, 50);
            });
        }
    };

}))(document.body);
