let app = app || {};


((body => {
    "use strict";

    app.banner = {

        initClose: function() {
            $('.banner.show').click(function(){
                if ($('#banner-10m').length) {
                    var $banner = $('#banner-10m');

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

            if ($('#banner-new-action').length) {
                const $banner = $('#banner-new-action');

                $(document).keyup(function(e) {
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
            this.make(4);
        }

    };

}))(document.body);

// ((body => {
//     "use strict";

//     app.banner = {

//         close: function() {
//             var $body = $('body');

//             $('#rs-event').fadeOut(300, function(){
//                 setTimeout(function() {
//                     $('#rs-event').remove();
//                     $body.removeClass('is-no-overflow');
//                 }, 150);
//             });
//         },

//         events: function() {
//             var _this = this;
//             $('body').on('click', '.rs-event-close-button', function(e) {
//                 e.preventDefault();
//                 _this.close();
//             });
//         },

//         show: function() {
//             var _this = this;
//             var $body = $('body');

//             var template = [
//                 '<div class="rs-event" id="rs-event">',
//                     '<div class="rs-event__image">',
//                         '<a href="#" class="rs-event__close rs-event-close-button"></a>',
//                         '<img src="/images/banner-action-double.jpg" class="rs-event__image__src">',
//                     '</div>',
//                     '<div class="rs-event__content">',
//                         '<h2>Две квартиры по цене одной!</h2>',
//                         '<h3>В ЖК «ВиноградЪ» только до конца мая Вы можете приобрести две квартиры по цене одной!</h3>',
//                         '<h3>За 1,5 млн.руб. – сразу ДВЕ КВАРТИРЫ!!!!</h3>',
//                         '<p>Условия акции продиктованы сложившейся рыночной ситуацией, так согласно статистическим данным от независимых экспертов на сегодняшний день средняя стоимость однокомнатной квартиры в Краснодарском крае возросла до 2 млн.руб. (см. статистику в конце статьи)</p>',
//                         '<p>Строительная компания «Регион-Строй» идет на беспрецедентные меры! Только до конца мая (по 31.05.2017 включительно) мы фиксируем стоимость квартиры студии в пределах 700-750 тыс. руб. (в зависимости от площади)! Таким образом всего за 1,5 млн.руб. Вы сможете приобрести две квартиры студии, в сравнении с приведенной ниже статистикой за такую же стоимость сегодня можно приобрести всего одну однокомнатную квартиру! Две лучше, чем одна! Спешите – предложение ограничено.</p>',
//                         '<p>До конца мая по фиксированной цене Вы можете купить и одну квартиру студию – стоимостью от 700 до 750 тыс.руб. (точная стоимость определяется площадью квартиры).  Приобретая квартиру по данному  предложению, Вы можете так же воспользоваться: Ипотекой, Рассрочкой, Мат.капиталом.</p>',
//                         '<p>Подробности в отделе продаж СК «Регион-Строй»: <strong><a href="tel:8-800-707-16-87">8 800 707 16 87</a></strong></p>',
//                         '<p>Данные предоставлены: <a href="http://krasnodar.naydidom.com/tseny/adtype-kupit" target="_blank">http://krasnodar.naydidom.com/tseny/adtype-kupit</a></p>',
//                         '<p><img src="/images/grafik-prodaj.jpg" alt=""></p>',
//                     '</div>',
//                 '</div>'
//             ];

//             $body.addClass('is-no-overflow');
//             $body.append(template.join(''));

//             _this.events();
//         },

//         init: function() {
//             var _this = this;

//             if (!$.cookie('main.page.banner.updated')) {
//                 $.removeCookie('main.page.banner');
                
//                 $.cookie('main.page.banner.updated', true, {
//                     expires: 1,
//                     path: '/'
//                 });
//             }

//             var timeout = 2000;

//             if (typeof window.location.hash !== 'undefined' && window.location.hash === '#two-apartments-price-of-one') {
//                 timeout = 0;
//             }

//             setTimeout(function() {
//                 _this.show();
//             }, timeout);

//             // if (!$.cookie('main.page.banner')) {
//             //     setTimeout(function() {
//             //         _this.show();
//             //     }, timeout);

//             //     var date = new Date();
//             //     var m = 3;
//             //     date.setTime(date.getTime() + (m * 60 * 1000));

//             //     $.cookie('main.page.banner', true, {
//             //         expires: date,
//             //         path: '/'
//             //     });
//             // }
//         }

//     };

// }))(document.body);
