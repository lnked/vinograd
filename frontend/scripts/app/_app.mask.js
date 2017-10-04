let app = app || {};

((body => {
    "use strict";

    app.mask = {
        phone(selector = '.j-phone-mask') {
            if (document.querySelectorAll(selector).length) {
                new Cleave(selector, {
                    phone: true,
                    phoneRegionCode: 'ru'
                });
            }
        },

        date(selector = '.mask-date') {
            if (document.querySelectorAll(selector).length) {
                new Cleave(selector, {
                    date: true,
                    datePattern: ['d', 'm', 'Y']
                });
            }
        },

        card(selector = '.mask-card') {
            if (document.querySelectorAll(selector).length) {
                new Cleave(selector, {
                    numericOnly: true,
                    prefix: '00',
                    delimiter: '',
                    blocks: [2, 4]
                });
            }
        },

        init() {
            const _this_ = this;

            _this_.card('.mask-card');
            _this_.date('.mask-date');
            _this_.phone('.j-phone-mask');

            $('body').on('popup.after_open', function(e, popup) {
                setTimeout(() => {
                    _this_.card($(popup).find('.mask-card'));
                    _this_.date($(popup).find('.mask-date'));
                    _this_.phone($(popup).find('.j-phone-mask'));
                }, 50);
            });
        }
    };

}))(document.body);
