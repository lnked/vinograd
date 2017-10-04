'use strict';

;(function ($) {
    "use strict";

    $.app = {

        initSandwich: function initSandwich() {
            $.app.sandwich.init({
                keyHooks: !0,
                selector: '.js-sandwich-menu',
                wrapper: '.layout-wrapper',
                overlay: '#menu-overlay'
            });
        },

        initMask: function initMask() {
            $(".j-phone-mask").mask("+7 (999) 999-99-99");
        },

        initPopup: function initPopup() {
            $.popup.init('.js-open-popup', {
                cssPosition: false,
                wrapper: '.layout-wrapper'
            });
        },

        initDocuments: function initDocuments() {
            $('body').on('click', '.j-load-documents', function (e) {
                var motion = $(this).data('motion');

                if (motion == 'show') {
                    $(this).data('motion', 'hide');
                    $('#documents').find('.is-motion').removeClass('is-hidden');
                } else {
                    $(this).data('motion', 'show');

                    $('html, body').stop().animate({ 'scrollTop': $('#documents-anchor').offset().top }, 'fast');

                    setTimeout(function () {
                        $('#documents').find('.is-motion').addClass('is-hidden');
                    }, 200);
                }

                $(this).closest('.page-button').toggleClass('_down').toggleClass('_up');
            });
        },

        initBlock: function initBlock(selector) {
            // const startWindowScroll = 0;

            // var options = {
            //         type: 'image',
            //         preloader: true,
            //         delegate: 'a.zoom',
            //         closeOnContentClick: true,
            //         closeBtnInside: true,
            //         fixedContentPos: true,
            //         fixedBgPos: true,
            //         verticalFit: false,
            //         image: {
            //             verticalFit: true
            //         },
            //         zoom: {
            //             enabled: false
            //         }
            // };

            // if ($(window).width() >= 768) {
            //     options.gallery = {
            //         enabled: true
            //     };
            // }

            // $(selector).magnificPopup(options);
        },

        initZoomDefault: function initZoomDefault() {
            $('.zoom-image').magnificPopup({ type: 'image' });
        },

        initZoom: function initZoom() {
            // this.initBlock('.j-gallery');
            // this.initBlock('.j-timeline-slider');
            // this.initBlock('.j-documents');
            // this.initBlock('.j-floors');
            // this.initBlock('.j-plans');
        },

        initTabs: function initTabs() {
            $('body').on('click', '.j-tab', function (e) {
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

                        setTimeout(function () {
                            $content.removeClass('active');
                        }, 300);
                    }
                }

                return !1;
            });

            $('body').on('click', '.j-tabs-trigger', function () {
                var $cover = $(this).closest('.j-tabs-cover');
                if ($cover.length) {
                    var $content = $cover.find('.j-tabs-content');

                    if ($content.hasClass('active')) {
                        $content.removeClass('animate');

                        setTimeout(function () {
                            $content.removeClass('active');
                        }, 300);
                    } else {
                        $content.addClass('active');

                        setTimeout(function () {
                            $content.addClass('animate');
                        }, 10);
                    }
                }
            });
        },

        initSlider: function initSlider() {

            $('.j-slider').slick({
                dots: false,
                infinite: true,
                draggable: true,
                fade: true,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="about__slider__navi _prev slick-prev"></button>',
                nextArrow: '<button type="button" class="about__slider__navi _next slick-next"></button>'
            });
        },

        initSwitcher: function initSwitcher() {
            var $slider = $('#slider'),
                timeout = 6000,
                intervalID = null;

            $('body').on('change', '.j-switcher', function () {
                var daytime = $(this).val();
                $slider.find('.j-slider-item._active').addClass('_last-active');

                $slider.find('.j-slider-item._active').removeClass('_active');

                $slider.find('.j-slider-item').filter('[data-daytime="' + daytime + '"]').addClass('_active');

                setTimeout(function () {
                    $slider.find('.j-slider-item._last-active').removeClass('_last-active');
                }, 1000);
            });

            function startInterval() {
                clearInterval(intervalID);

                return setInterval(function () {
                    $('#slider-next').trigger('click');
                }, timeout);
            }

            function stopInterval(interval) {
                clearInterval(interval);
            }

            intervalID = startInterval();

            $('body').on('click', '.j-slider-navigation', function () {
                var direction = $(this).data('direction');

                stopInterval(intervalID);

                var $group = $slider.find('.j-slider-item._active'),
                    _count = $group.find('.j-slider-image').length - 1,
                    _index = $group.find('.j-slider-image._active').index(),
                    _next = 0;

                if (direction == 'prev') {
                    _next = _index - 1;
                } else if (direction == 'next') {
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

                setTimeout(function () {
                    $group.find('.j-slider-image._last-active').removeClass('_last-active');
                    intervalID = startInterval();
                }, 1000);
            });
        },

        initPlans: function initPlans() {
            var $popup = null;

            $('body').on('click', '.j-plans-layout', function (e) {
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

        initLocation: function initLocation() {
            var $mobile = $('#location-mobile'),
                $content = null,
                number = 0;

            $mobile.find('.j-close').on('click', function () {
                $mobile.addClass('is-disabled');
                $content = $mobile.find('.j-content');

                $content.removeClass('_animate');

                setTimeout(function () {
                    $content.removeClass('_active');

                    $mobile.addClass('is-hidden').removeClass('is-disabled');
                }, 300);
            });

            $('body').on('click', '.j-loc-flag', function () {
                $mobile.removeClass('is-hidden');
                $content = $mobile.find('.j-content');

                $content.find('.j-content-middle').html($(this).closest('.location__item').find('.location__item__content').html());

                $content.addClass('_active');

                number = $(this).data('number');

                $mobile.removeClass('_num-1 _num-2 _num-3 _num-4 _num-5 _num-6').addClass('_num-' + number);

                setTimeout(function () {
                    $content.addClass('_animate');
                }, 10);
            });
        },

        initClose: function initClose() {
            $('.banner.show').click(function () {
                if ($('#banner-10m').length) {
                    var $banner = $('#banner-10m');

                    if ($banner.hasClass('show')) {
                        $banner.removeClass('animate');

                        setTimeout(function () {
                            $banner.removeClass('show');
                        }, 300);
                    }
                }
            });
        },

        initBanner: function initBanner(delay) {
            var _this = this;

            if ($('#banner-new-action').length) {
                var $banner = $('#banner-new-action');

                $banner.on('click', '.banner__image__close', function (e) {
                    e.preventDefault();
                    $banner.removeClass('animate');

                    setTimeout(function () {
                        $banner.removeClass('show');
                    }, 400);
                });

                // if (!$.cookie('hideModalsobraniem')) {
                setTimeout(function () {
                    $banner.addClass('show');

                    setTimeout(function () {
                        $banner.addClass('animate');
                    }, 10);

                    _this.initClose();
                }, delay * 1000);
                // }

                // $.cookie('hideModalsobraniem', true, {
                //     expires: 7,
                //     path: '/'
                // });
            }
        },

        initPorch: function initPorch() {
            var element = '',
                image = '';

            $('body').on('click', '.j-porch-tab', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('_current')) {
                    var $porch = $(this).closest('.j-porch'),
                        tab = $(this).data('tab');

                    $porch.find('._current').removeClass('_current');
                    $porch.find('.j-porch-item._active').removeClass('_active');

                    $porch.find('#porch-tab-' + tab).addClass('_active');
                    $(this).addClass('_current');
                }

                return !1;
            });

            // Area
            $('.j-area-item').on('mouseenter', function (e) {
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).addClass('_show');
                }
            });

            $('.j-area-item').on('mouseleave', function (e) {
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).removeClass('_show');
                }
            });

            $('.j-area-item').on('click', function (e) {
                e.preventDefault();

                image = $(this).attr('href');

                return !1;
            });
        },

        initGoals: function initGoals() {
            $('body').on('click', '.j-yandex-goal', function () {
                if ($(this).data('target-name')) {
                    $.each($(this).data('target-name').split(' '), function (key, value) {
                        yaCounter38867515.reachGoal($.trim(value));
                    });
                }
            });
        },

        initShow: function initShow() {
            $('body').on('click', '.j-show', function (e) {
                e.preventDefault();

                var href = $(this).attr('href');

                if ($(href).length) {
                    $(href).addClass('is-show');
                }

                $(this).hide();

                return false;
            });
        },

        timeline: {
            data: {},
            filter: null,
            years: null,
            months: null,

            _initCarousel: function _initCarousel() {
                var width = $(window).width(),
                    slides = $('#timeline-carousel').find('.slick-slide').length;

                if (width > 768 && slides >= 4 || width > 568 && slides >= 3 || width > 375 && slides >= 2 || width < 375 && slides >= 1) {

                    $('#timeline-carousel').slick({
                        lazyLoad: 'ondemand',
                        dots: false,
                        infinite: true,
                        draggable: true,
                        speed: 259,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        prevArrow: '<button type="button" class="carousel__navigation _prev slick-prev"></button>',
                        nextArrow: '<button type="button" class="carousel__navigation _next slick-next"></button>',
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }, {
                            breakpoint: 568,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 375,
                            settings: {
                                fade: true,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    });
                }
            },

            _currentYear: function _currentYear() {
                return parseInt(this.years.find('.is-current').data('value'));
            },

            _currentMonth: function _currentMonth() {
                return parseInt(this.months.find('.is-current').data('value'));
            },

            _handle: function _handle() {
                var _this2 = this;

                this.data.current = this._currentYear();
                this.data.months = [];

                this.months.find('.j-timeline-months-item').each(function (key, item) {
                    var years = [],
                        strings = $(item).data('if') + '';

                    if (typeof strings !== 'undefined' && strings !== '') {
                        years = strings.split(',');

                        for (var x in years) {
                            years[x] = parseInt(years[x]);
                        }
                    }

                    _this2.data.months.push({
                        item: item,
                        year: years
                    });
                });
            },

            initFancybox: function initFancybox(selector) {

                if (typeof selector !== 'undefined' && $(selector).length) {
                    alert('2');
                } else {
                    alert('1');
                }

                $('.j-pinch-trigger').fancybox({
                    transition: "none",
                    autoPlay: false,
                    helpers: {
                        title: {
                            type: 'inside'
                        },
                        overlay: {
                            locked: true
                        },
                        buttons: {}
                    }
                });

                // var $list, list = [ '.j-gallery', '.j-timeline', '.j-documents', '.j-floors', '.j-plans' ], random = '';

                // for (var i = list.length - 1; i >= 0; i--) {
                //     random = Math.random();
                //     $list = $(list[i]).find('.zoom');
                //     $list.prop('rel', 'gallery-' + random);

                //     $list.fancybox({
                //         helpers: {
                //             overlay: {
                //                 locked: true
                //             }
                //         },
                //         width: "650px",
                //         height: "650px",
                //         rel: 'gallery-' + random,
                //         transition: "none",
                //         slideshow: true
                //     });
                // }
            },

            _reinitCarousel: function _reinitCarousel() {
                var _self_ = this,
                    year = this._currentYear(),
                    month = this._currentMonth();

                if ($('#timeline-carousel').hasClass('slick-initialized')) {
                    $('#timeline-carousel').slick('unslick');
                }

                $('#timeline-carousel').html('');

                var count = $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).length;

                $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).each(function (k, item) {
                    $('#timeline-carousel').append($(this).clone());

                    if (k + 1 == count) {
                        setTimeout(function () {
                            _self_._initCarousel();
                        }, 50);
                    }
                });

                setTimeout(function () {
                    // $.app.initBlock('.j-timeline-slider');
                    // $.app.initFancybox('.j-timeline-slider');
                }, 300);
            },

            _changeFirstMonth: function _changeFirstMonth() {
                this.months.find('.j-timeline-months-item.is-active:first').trigger('click');
            },

            _match: function _match() {
                var _this3 = this;

                var _self_ = this;

                this._handle();

                this.months.find('.j-timeline-months-item').removeClass('is-active');

                $.each(this.data.months, function (k, item) {
                    if (item.year.indexOf(_this3.data.current) >= 0) {
                        $(item.item).addClass('is-active');
                    }
                });

                this.filter.addClass('is-active');
            },

            _events: function _events() {
                var _self_ = this;

                this.years.find('.j-timeline-years-item').on('click', function (e) {
                    e.preventDefault();

                    if (!$(this).hasClass('is-current')) {
                        $('#timeline-filter').find('.j-timeline-years').find('.is-current').removeClass('is-current');

                        $(this).addClass('is-current');

                        _self_._match();
                        _self_._changeFirstMonth();
                        _self_._reinitCarousel();
                    }
                });

                this.months.find('.j-timeline-months-item').on('click', function (e) {
                    e.preventDefault();

                    if (!$(this).hasClass('is-current')) {
                        $('#timeline-filter').find('.j-timeline-months').find('.is-current').removeClass('is-current');

                        $(this).addClass('is-current');

                        _self_._match();
                        _self_._reinitCarousel();
                    }
                });
            },

            init: function init() {
                var _self_ = this;

                this.filter = $('#timeline-filter');
                this.years = this.filter.find('.j-timeline-years');
                this.months = this.filter.find('.j-timeline-months');

                this._match();
                this._events();

                this._reinitCarousel();
            }
        },

        init: function init() {
            $.app.layzr.init();
            this.timeline.init();
            // this.banner.init();
            this.initGoals();
            this.initShow();
            this.initPorch();
            this.initTabs();
            this.initZoomDefault();
            this.initBanner(4);
            this.initPlans();
            this.initPopup();
            this.initSlider();
            this.initFancybox();
            this.initSandwich();
            this.initSwitcher();
            this.initLocation();
            this.initDocuments();
        }
    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmpzIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0U2FuZHdpY2giLCJzYW5kd2ljaCIsImluaXQiLCJrZXlIb29rcyIsInNlbGVjdG9yIiwid3JhcHBlciIsIm92ZXJsYXkiLCJpbml0TWFzayIsIm1hc2siLCJpbml0UG9wdXAiLCJwb3B1cCIsImNzc1Bvc2l0aW9uIiwiaW5pdERvY3VtZW50cyIsIm9uIiwiZSIsIm1vdGlvbiIsImRhdGEiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJzdG9wIiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImluaXRCbG9jayIsImluaXRab29tRGVmYXVsdCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwiaW5pdFpvb20iLCJpbml0VGFicyIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJ0YWIiLCJhdHRyIiwic3Vic3RyIiwibGVuZ3RoIiwiJGl0ZW1zIiwiZmlsdGVyIiwiJGNvdmVyIiwiJGNvbnRlbnQiLCJpbml0U2xpZGVyIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJkcmFnZ2FibGUiLCJmYWRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImluaXRTd2l0Y2hlciIsIiRzbGlkZXIiLCJ0aW1lb3V0IiwiaW50ZXJ2YWxJRCIsImRheXRpbWUiLCJ2YWwiLCJzdGFydEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwidHJpZ2dlciIsInN0b3BJbnRlcnZhbCIsImludGVydmFsIiwiZGlyZWN0aW9uIiwiJGdyb3VwIiwiX2NvdW50IiwiX2luZGV4IiwiaW5kZXgiLCJfbmV4dCIsImVxIiwiaW5pdFBsYW5zIiwiJHBvcHVwIiwiaW1hZ2UiLCJ0aXRsZSIsInRlbXBsYXRlIiwiYXBwZW5kIiwic2hvdyIsImluaXRMb2NhdGlvbiIsIiRtb2JpbGUiLCJudW1iZXIiLCJodG1sIiwiaW5pdENsb3NlIiwiY2xpY2siLCIkYmFubmVyIiwiaW5pdEJhbm5lciIsImRlbGF5IiwiX3RoaXMiLCJpbml0UG9yY2giLCJlbGVtZW50IiwiJHBvcmNoIiwiaW5pdEdvYWxzIiwiZWFjaCIsInNwbGl0Iiwia2V5IiwidmFsdWUiLCJ5YUNvdW50ZXIzODg2NzUxNSIsInJlYWNoR29hbCIsInRyaW0iLCJpbml0U2hvdyIsImhyZWYiLCJoaWRlIiwidGltZWxpbmUiLCJ5ZWFycyIsIm1vbnRocyIsIl9pbml0Q2Fyb3VzZWwiLCJ3aWR0aCIsIndpbmRvdyIsInNsaWRlcyIsImxhenlMb2FkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIl9jdXJyZW50WWVhciIsInBhcnNlSW50IiwiX2N1cnJlbnRNb250aCIsIl9oYW5kbGUiLCJjdXJyZW50IiwiaXRlbSIsInN0cmluZ3MiLCJ4IiwicHVzaCIsInllYXIiLCJpbml0RmFuY3lib3giLCJhbGVydCIsImZhbmN5Ym94IiwidHJhbnNpdGlvbiIsImF1dG9QbGF5IiwiaGVscGVycyIsImxvY2tlZCIsImJ1dHRvbnMiLCJfcmVpbml0Q2Fyb3VzZWwiLCJfc2VsZl8iLCJtb250aCIsImNvdW50IiwiayIsImNsb25lIiwiX2NoYW5nZUZpcnN0TW9udGgiLCJfbWF0Y2giLCJpbmRleE9mIiwiX2V2ZW50cyIsImxheXpyIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBRSxVQUFVQSxDQUFWLEVBQWM7QUFDYjs7QUFFQUEsTUFBRUMsR0FBRixHQUFROztBQUVKQyxzQkFBYyx3QkFBVztBQUNyQkYsY0FBRUMsR0FBRixDQUFNRSxRQUFOLENBQWVDLElBQWYsQ0FBb0I7QUFDaEJDLDBCQUFVLENBQUMsQ0FESztBQUVoQkMsMEJBQVUsbUJBRk07QUFHaEJDLHlCQUFTLGlCQUhPO0FBSWhCQyx5QkFBUztBQUpPLGFBQXBCO0FBTUgsU0FURzs7QUFXSkMsa0JBQVUsb0JBQVc7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QUYsQ0FBTWdKLEtBQU4sQ0FBWTdJLElBQVo7QUFDQSxpQkFBS3NHLFFBQUwsQ0FBY3RHLElBQWQ7QUFDQTtBQUNBLGlCQUFLMkYsU0FBTDtBQUNBLGlCQUFLUSxRQUFMO0FBQ0EsaUJBQUtYLFNBQUw7QUFDQSxpQkFBSzFELFFBQUw7QUFDQSxpQkFBS0osZUFBTDtBQUNBLGlCQUFLMkQsVUFBTCxDQUFnQixDQUFoQjtBQUNBLGlCQUFLZCxTQUFMO0FBQ0EsaUJBQUtoRSxTQUFMO0FBQ0EsaUJBQUtrQyxVQUFMO0FBQ0EsaUJBQUtrRixZQUFMO0FBQ0EsaUJBQUs3SCxZQUFMO0FBQ0EsaUJBQUtzRCxZQUFMO0FBQ0EsaUJBQUswQixZQUFMO0FBQ0EsaUJBQUtwRSxhQUFMO0FBQ0g7QUE1b0JHLEtBQVI7QUErb0JILENBbHBCQSxFQWtwQkdvSSxNQWxwQkgiLCJmaWxlIjoiX19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KCBmdW5jdGlvbiggJCApIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuYXBwID0ge1xuXG4gICAgICAgIGluaXRTYW5kd2ljaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmFwcC5zYW5kd2ljaC5pbml0KHtcbiAgICAgICAgICAgICAgICBrZXlIb29rczogITAsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuanMtc2FuZHdpY2gtbWVudScsXG4gICAgICAgICAgICAgICAgd3JhcHBlcjogJy5sYXlvdXQtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgb3ZlcmxheTogJyNtZW51LW92ZXJsYXknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0TWFzazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLmotcGhvbmUtbWFza1wiKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRQb3B1cDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAkLnBvcHVwLmluaXQoJy5qcy1vcGVuLXBvcHVwJywge1xuICAgICAgICAgICAgICAgIGNzc1Bvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiAnLmxheW91dC13cmFwcGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdERvY3VtZW50czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLWxvYWQtZG9jdW1lbnRzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBtb3Rpb24gPSAkKHRoaXMpLmRhdGEoJ21vdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vdGlvbiA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdtb3Rpb24nLCAnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZG9jdW1lbnRzJykuZmluZCgnLmlzLW1vdGlvbicpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZGF0YSgnbW90aW9uJywgJ3Nob3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoeyAnc2Nyb2xsVG9wJzogJCgnI2RvY3VtZW50cy1hbmNob3InKS5vZmZzZXQoKS50b3AgfSwgJ2Zhc3QnKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZG9jdW1lbnRzJykuZmluZCgnLmlzLW1vdGlvbicpLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wYWdlLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdfZG93bicpLnRvZ2dsZUNsYXNzKCdfdXAnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRCbG9jazogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBzdGFydFdpbmRvd1Njcm9sbCA9IDA7XG5cbiAgICAgICAgICAgIC8vIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgLy8gICAgICAgICBwcmVsb2FkZXI6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgIGRlbGVnYXRlOiAnYS56b29tJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdmVydGljYWxGaXQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfTtcbiBcbiAgICAgICAgICAgIC8vIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjgpIHtcbiAgICAgICAgICAgIC8vICAgICBvcHRpb25zLmdhbGxlcnkgPSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyAkKHNlbGVjdG9yKS5tYWduaWZpY1BvcHVwKG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRab29tRGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnpvb20taW1hZ2UnKS5tYWduaWZpY1BvcHVwKHt0eXBlOidpbWFnZSd9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0Wm9vbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbml0QmxvY2soJy5qLWdhbGxlcnknKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdEJsb2NrKCcuai10aW1lbGluZS1zbGlkZXInKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdEJsb2NrKCcuai1kb2N1bWVudHMnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdEJsb2NrKCcuai1mbG9vcnMnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdEJsb2NrKCcuai1wbGFucycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRUYWJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotdGFiJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWIgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zdWJzdHIoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gJCh0aGlzKS5kYXRhKCd3cmFwcGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuai10YWItY2xvc2VzdCcpLmZpbmQoJy5jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnI3RhYi0nICsgd3JhcHBlcikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGl0ZW1zID0gJCgnI3RhYi0nICsgd3JhcHBlcikuZmluZCgnLmlzLWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW1zLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaXRlbXMuZmlsdGVyKCcuJyArIHRhYikuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgJGNvdmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuai10YWJzLWNvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY29udGVudCA9ICRjb3Zlci5maW5kKCcuai10YWJzLWNvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGNvbnRlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai10YWJzLXRyaWdnZXInLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciAkY292ZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5qLXRhYnMtY292ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoJGNvdmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGNvbnRlbnQgPSAkY292ZXIuZmluZCgnLmotdGFicy1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJGNvbnRlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0U2xpZGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgJCgnLmotc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA3MDAsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWJvdXRfX3NsaWRlcl9fbmF2aSBfcHJldiBzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFib3V0X19zbGlkZXJfX25hdmkgX25leHQgc2xpY2stbmV4dFwiPjwvYnV0dG9uPidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdFN3aXRjaGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkc2xpZGVyID0gJCgnI3NsaWRlcicpLCB0aW1lb3V0ID0gNjAwMCwgaW50ZXJ2YWxJRCA9IG51bGw7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2hhbmdlJywgJy5qLXN3aXRjaGVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF5dGltZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAgICAgJHNsaWRlci5maW5kKCcuai1zbGlkZXItaXRlbS5fYWN0aXZlJykuYWRkQ2xhc3MoJ19sYXN0LWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHNsaWRlci5maW5kKCcuai1zbGlkZXItaXRlbS5fYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICRzbGlkZXIuZmluZCgnLmotc2xpZGVyLWl0ZW0nKS5maWx0ZXIoJ1tkYXRhLWRheXRpbWU9XCInICsgZGF5dGltZSArICdcIl0nKS5hZGRDbGFzcygnX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlci1pdGVtLl9sYXN0LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdfbGFzdC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjc2xpZGVyLW5leHQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdG9wSW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW50ZXJ2YWxJRCA9IHN0YXJ0SW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1zbGlkZXItbmF2aWdhdGlvbicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9ICQodGhpcykuZGF0YSgnZGlyZWN0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICBzdG9wSW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGdyb3VwID0gJHNsaWRlci5maW5kKCcuai1zbGlkZXItaXRlbS5fYWN0aXZlJyksXG4gICAgICAgICAgICAgICAgICAgIF9jb3VudCA9ICRncm91cC5maW5kKCcuai1zbGlkZXItaW1hZ2UnKS5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICBfaW5kZXggPSAkZ3JvdXAuZmluZCgnLmotc2xpZGVyLWltYWdlLl9hY3RpdmUnKS5pbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICBfbmV4dCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdwcmV2Jykge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dCA9IF9pbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHQgPSBfaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfbmV4dCA+IF9jb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChfbmV4dCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX25leHQgPSBfY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGdyb3VwLmZpbmQoJy5qLXNsaWRlci1pbWFnZS5fYWN0aXZlJykuYWRkQ2xhc3MoJ19sYXN0LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRncm91cC5maW5kKCcuai1zbGlkZXItaW1hZ2UuX2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGdyb3VwLmZpbmQoJy5qLXNsaWRlci1pbWFnZScpLmVxKF9uZXh0KS5hZGRDbGFzcygnX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkZ3JvdXAuZmluZCgnLmotc2xpZGVyLWltYWdlLl9sYXN0LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdfbGFzdC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxJRCA9IHN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRQbGFuczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHBvcHVwID0gbnVsbDtcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1wbGFucy1sYXlvdXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgJHBvcHVwID0gJCh0ZW1wbGF0ZSgndG1wbC1wb3B1cC1sYXlvdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2UnOiBpbWFnZVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcygndGVtcCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkLnBvcHVwLnNob3coJHBvcHVwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0TG9jYXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRtb2JpbGUgPSAkKCcjbG9jYXRpb24tbW9iaWxlJyksICRjb250ZW50ID0gbnVsbCwgbnVtYmVyID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJG1vYmlsZS5maW5kKCcuai1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJG1vYmlsZS5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkY29udGVudCA9ICRtb2JpbGUuZmluZCgnLmotY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ19hbmltYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJG1vYmlsZS5hZGRDbGFzcygnaXMtaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLWxvYy1mbGFnJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkbW9iaWxlLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAkY29udGVudCA9ICRtb2JpbGUuZmluZCgnLmotY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuZmluZCgnLmotY29udGVudC1taWRkbGUnKS5odG1sKCQodGhpcykuY2xvc2VzdCgnLmxvY2F0aW9uX19pdGVtJykuZmluZCgnLmxvY2F0aW9uX19pdGVtX19jb250ZW50JykuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJCh0aGlzKS5kYXRhKCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICRtb2JpbGUucmVtb3ZlQ2xhc3MoJ19udW0tMSBfbnVtLTIgX251bS0zIF9udW0tNCBfbnVtLTUgX251bS02JykuYWRkQ2xhc3MoJ19udW0tJyArIG51bWJlcik7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdfYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRDbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuYmFubmVyLnNob3cnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICgkKCcjYmFubmVyLTEwbScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGJhbm5lciA9ICQoJyNiYW5uZXItMTBtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRiYW5uZXIuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJhbm5lci5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJhbm5lci5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRCYW5uZXI6IGZ1bmN0aW9uKGRlbGF5KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoJCgnI2Jhbm5lci1uZXctYWN0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRiYW5uZXIgPSAkKCcjYmFubmVyLW5ldy1hY3Rpb24nKTtcblxuICAgICAgICAgICAgICAgICRiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXJfX2ltYWdlX19jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAkYmFubmVyLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJhbm5lci5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKCEkLmNvb2tpZSgnaGlkZU1vZGFsc29icmFuaWVtJykpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRiYW5uZXIuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRiYW5uZXIuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRDbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5ICogMTAwMCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICQuY29va2llKCdoaWRlTW9kYWxzb2JyYW5pZW0nLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGV4cGlyZXM6IDcsXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRQb3JjaDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICcnLCBpbWFnZSA9ICcnO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXBvcmNoLXRhYicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ19jdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRwb3JjaCA9ICQodGhpcykuY2xvc2VzdCgnLmotcG9yY2gnKSwgdGFiID0gJCh0aGlzKS5kYXRhKCd0YWInKTtcblxuICAgICAgICAgICAgICAgICAgICAkcG9yY2guZmluZCgnLl9jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ19jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICRwb3JjaC5maW5kKCcuai1wb3JjaC1pdGVtLl9hY3RpdmUnKS5yZW1vdmVDbGFzcygnX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICRwb3JjaC5maW5kKCcjcG9yY2gtdGFiLScgKyB0YWIpLmFkZENsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ19jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcmVhXG4gICAgICAgICAgICAkKCcuai1hcmVhLWl0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAkKHRoaXMpLmRhdGEoJ2VsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcygnX3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmotYXJlYS1pdGVtJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5qLWFyZWEtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGltYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0R29hbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai15YW5kZXgtZ29hbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3RhcmdldC1uYW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKCQodGhpcykuZGF0YSgndGFyZ2V0LW5hbWUnKS5zcGxpdCgnICcpLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5YUNvdW50ZXIzODg2NzUxNS5yZWFjaEdvYWwoJC50cmltKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXRTaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotc2hvdycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoaHJlZikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoaHJlZikuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0aW1lbGluZToge1xuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICBmaWx0ZXI6IG51bGwsXG4gICAgICAgICAgICB5ZWFyczogbnVsbCxcbiAgICAgICAgICAgIG1vbnRoczogbnVsbCxcblxuICAgICAgICAgICAgX2luaXRDYXJvdXNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlcyA9ICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmZpbmQoJy5zbGljay1zbGlkZScpLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHdpZHRoID4gNzY4ICYmIHNsaWRlcyA+PSA0KSB8fFxuICAgICAgICAgICAgICAgICAgICAod2lkdGggPiA1NjggJiYgc2xpZGVzID49IDMpIHx8XG4gICAgICAgICAgICAgICAgICAgICh3aWR0aCA+IDM3NSAmJiBzbGlkZXMgPj0gMikgfHxcbiAgICAgICAgICAgICAgICAgICAgKHdpZHRoIDwgMzc1ICYmIHNsaWRlcyA+PSAxKVxuICAgICAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyNTksXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fyb3VzZWxfX25hdmlnYXRpb24gX3ByZXYgc2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhcm91c2VsX19uYXZpZ2F0aW9uIF9uZXh0IHNsaWNrLW5leHRcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2N1cnJlbnRZZWFyOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMueWVhcnMuZmluZCgnLmlzLWN1cnJlbnQnKS5kYXRhKCd2YWx1ZScpKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9jdXJyZW50TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5tb250aHMuZmluZCgnLmlzLWN1cnJlbnQnKS5kYXRhKCd2YWx1ZScpKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9oYW5kbGU6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY3VycmVudCA9IHRoaXMuX2N1cnJlbnRZZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0nKS5lYWNoKChrZXksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHllYXJzID0gW10sIHN0cmluZ3MgPSAkKGl0ZW0pLmRhdGEoJ2lmJykgKyAnJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0cmluZ3MgIT09ICd1bmRlZmluZWQnICYmIHN0cmluZ3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFycyA9IHN0cmluZ3Muc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCBpbiB5ZWFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzW3hdID0gcGFyc2VJbnQoeWVhcnNbeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXRGYW5jeWJveDogZnVuY3Rpb24oc2VsZWN0b3IpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICd1bmRlZmluZWQnICYmICQoc2VsZWN0b3IpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnMicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCcxJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnLmotcGluY2gtdHJpZ2dlcicpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGVscGVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2lkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ucyAgOiB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyB2YXIgJGxpc3QsIGxpc3QgPSBbICcuai1nYWxsZXJ5JywgJy5qLXRpbWVsaW5lJywgJy5qLWRvY3VtZW50cycsICcuai1mbG9vcnMnLCAnLmotcGxhbnMnIF0sIHJhbmRvbSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgJGxpc3QgPSAkKGxpc3RbaV0pLmZpbmQoJy56b29tJyk7XG4gICAgICAgICAgICAgICAgLy8gICAgICRsaXN0LnByb3AoJ3JlbCcsICdnYWxsZXJ5LScgKyByYW5kb20pO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICRsaXN0LmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhlbHBlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxvY2tlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDogXCI2NTBweFwiLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiBcIjY1MHB4XCIsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZWw6ICdnYWxsZXJ5LScgKyByYW5kb20sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNsaWRlc2hvdzogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBfcmVpbml0Q2Fyb3VzZWw6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IHRoaXMuX2N1cnJlbnRZZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5fY3VycmVudE1vbnRoKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5odG1sKCcnKTtcblxuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9ICQoJyN0aW1lbGluZS1jYWNoZScpLmZpbmQoJy5jYXJvdXNlbF9faXRlbS5pcy15ZWFyLScrIHllYXIgKycuaXMtbW9udGgtJyttb250aCkubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhY2hlJykuZmluZCgnLmNhcm91c2VsX19pdGVtLmlzLXllYXItJysgeWVhciArJy5pcy1tb250aC0nK21vbnRoKS5lYWNoKGZ1bmN0aW9uKGssIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuYXBwZW5kKCQodGhpcykuY2xvbmUoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChrKzEpID09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmXy5faW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQuYXBwLmluaXRCbG9jaygnLmotdGltZWxpbmUtc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICQuYXBwLmluaXRGYW5jeWJveCgnLmotdGltZWxpbmUtc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9jaGFuZ2VGaXJzdE1vbnRoOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0uaXMtYWN0aXZlOmZpcnN0JykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9tYXRjaDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQuZWFjaCh0aGlzLmRhdGEubW9udGhzLCAoaywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS55ZWFyLmluZGV4T2YodGhpcy5kYXRhLmN1cnJlbnQpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoaXRlbS5pdGVtKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9ldmVudHM6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHRoaXMueWVhcnMuZmluZCgnLmotdGltZWxpbmUteWVhcnMtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaXMtY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtZmlsdGVyJykuZmluZCgnLmotdGltZWxpbmUteWVhcnMnKS5maW5kKCcuaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9tYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9jaGFuZ2VGaXJzdE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1jdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1maWx0ZXInKS5maW5kKCcuai10aW1lbGluZS1tb250aHMnKS5maW5kKCcuaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9tYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9yZWluaXRDYXJvdXNlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlciA9ICQoJyN0aW1lbGluZS1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJzID0gdGhpcy5maWx0ZXIuZmluZCgnLmotdGltZWxpbmUteWVhcnMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRocyA9IHRoaXMuZmlsdGVyLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0Y2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmFwcC5sYXl6ci5pbml0KCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluaXQoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuYmFubmVyLmluaXQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdvYWxzKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRTaG93KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRQb3JjaCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0VGFicygpO1xuICAgICAgICAgICAgdGhpcy5pbml0Wm9vbURlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEJhbm5lcig0KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBsYW5zKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2xpZGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRGYW5jeWJveCgpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2FuZHdpY2goKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN3aXRjaGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RG9jdW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSggalF1ZXJ5ICk7Il19

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function ($) {
    "use strict";

    $.app = $.app = $.app || {};

    var body = $('body'),
        _this;

    $.app.ajaxForm = {

        config: {
            form_class: '.form-ajax',
            form_reset: 'form-reset',
            link_class: '.js-request-link',
            error_class: 'error',
            error_message: 'form__error-message',
            error_message_class: 'j-error-message',
            error_message_addclass: 'show',
            form_label: '.form__wrapper',
            checkbox_label: 'checkbox__label'
        },

        callback_stack: {},

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },

        default_handler: function default_handler(form, response) {
            _this = this;

            if (response.status) {
                if (response.hasOwnProperty('redirect_url')) {
                    window.location.href = response.redirect_url;
                }
            } else if (typeof response.errors !== 'undefined' || typeof response.error_message !== 'undefined') {
                var errors, error_message;

                if (typeof response.errors !== 'undefined') {
                    errors = response.errors;
                }

                if (typeof response.error_message !== 'undefined') {
                    error_message = response.error_message;
                }

                _this.validation(form, errors, response.error_message);
            }

            if (response.hasOwnProperty('open_popup')) {
                if ($('body').find('.popup.is-open').length) {
                    $.popup.close($('body').find('.popup.is-open'), function () {
                        $.popup.open(response.open_popup);
                    });
                } else {
                    $.popup.open(response.open_popup);
                }
            }

            if (response.hasOwnProperty('message')) {
                $.popup.message(response.title, response.message);
            }
        },

        validation: function validation(form, errors, error_message) {
            _this = this;

            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
            form.find('.' + _this.config.error_message).remove();
            form.find('.' + _this.config.error_message_class).removeClass(_this.config.error_message_addclass);

            var fieldName, field;

            setTimeout(function () {
                if (typeof error_message !== 'undefined' && error_message !== '') {
                    form.find('.' + _this.config.error_message_class).html(error_message);
                    form.find('.' + _this.config.error_message_class).addClass(_this.config.error_message_addclass);
                }

                if (typeof errors !== 'undefined' && errors !== '') {
                    for (fieldName in errors) {
                        if (form.find('input[name="' + fieldName + '"]').length > 0) {
                            field = form.find('input[name="' + fieldName + '"]');
                        }

                        if (form.find('select[name="' + fieldName + '"]').length > 0) {
                            field = form.find('select[name="' + fieldName + '"]');
                        }

                        if (form.find('textarea[name="' + fieldName + '"]').length > 0) {
                            field = form.find('textarea[name="' + fieldName + '"]');
                        }

                        if (field.closest('.' + _this.config.checkbox_label).length > 0) {
                            field = field.closest('.' + _this.config.checkbox_label);
                        }

                        if (typeof field !== 'undefined') {
                            field.addClass(_this.config.error_class);
                            field.closest(_this.config.form_label).append('<div class="' + _this.config.error_message + '">' + errors[fieldName] + '</div>');
                        }
                    }
                }
            }, 10);
        },

        upload: function upload() {
            _this = this;

            body.on('submit', '.form-file-upload', function (e) {
                return AIM.submit(this, {
                    onStart: function onStart() {},
                    onComplete: function onComplete(result) {
                        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.status === true && result.hasOwnProperty('photo_url')) {}
                    }
                });
            });

            $(document).on('change', '.upload_button_onchange', function () {
                if ($(this).closest('.upload_button').find('.upload_button_field').length > 0) {
                    $(this).closest('.upload_button').find('.upload_button_field').html($(this).val());
                }
            });
        },

        send: function send(action, method, data, cb, err) {

            if (typeof cb !== 'function') {
                cb = function cb() {};
            }

            if (typeof err !== 'function') {
                err = function err() {};
            }

            try {

                $.ajax({
                    url: action,
                    type: method,
                    data: data,
                    contentType: false,
                    processData: method.toLowerCase() == 'get',
                    success: cb,
                    error: err,
                    dataType: 'JSON'
                });
            } catch (e) {}
        },

        initLink: function initLink() {
            _this = this;

            body.on('click', _this.config.link_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var link = $(this);

                if (link.data('is-busy')) {
                    return;
                }

                link.data('is-busy', true);

                var action = $(this).attr('href') || $(this).data('action'),
                    method = $(this).data('method') || 'get',
                    data = {};

                _this.send(action, method, data, function (response) {
                    if (link.data('callback') && _this.callback_stack.hasOwnProperty(link.data('callback'))) {
                        _this.callback_stack[link.data('callback')](link, response);
                    } else {
                        _this.default_handler(link, response);
                    }

                    if (response.status === true) {}

                    link.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(link, response);
                    link.data('is-busy', false);
                });
            });
        },

        initForm: function initForm() {
            _this = this;

            body.on('submit', _this.config.form_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var form = $(this),
                    action = form.attr('action'),
                    method = form.attr('method') || 'post',
                    data = !!window.FormData ? new FormData(form[0]) : form.serialize();

                if (form.data('is-busy')) {
                    return;
                }

                form.data('is-busy', true);

                if (typeof button !== 'undefined') {
                    if (button.data('loading')) {
                        button.data('original', button.text());
                        button.text(button.data('loading'));
                    }

                    button.addClass('preload');
                }

                if (form.data('precallback') && _this.callback_stack.hasOwnProperty(form.data('precallback'))) {
                    if (!_this.callback_stack[form.data('precallback')](form)) {
                        return false;
                    }
                }

                _this.send(action, method, data, function (response) {
                    if (form.data('callback') && _this.callback_stack.hasOwnProperty(form.data('callback'))) {
                        _this.callback_stack[form.data('callback')](form, response);
                    } else {
                        _this.default_handler(form, response);
                    }

                    if (response.status === true) {
                        if (form.hasClass(_this.config.form_reset)) {
                            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
                            form.get(0).reset();
                        }
                    }

                    if (typeof button !== 'undefined') {
                        if (button.data('original')) {
                            button.text(button.data('original'));
                        }

                        button.removeClass('preload');
                    }

                    form.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(form, response);
                    form.data('is-busy', false);
                });
            });
        },

        init: function init(config) {
            this.extend(config);

            this.initForm();
            this.initLink();
        }
    };

    $.app.ajaxForm.init();
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuYWpheGZvcm0uanMiXSwibmFtZXMiOlsiJCIsImFwcCIsImJvZHkiLCJfdGhpcyIsImFqYXhGb3JtIiwiY29uZmlnIiwiZm9ybV9jbGFzcyIsImZvcm1fcmVzZXQiLCJsaW5rX2NsYXNzIiwiZXJyb3JfY2xhc3MiLCJlcnJvcl9tZXNzYWdlIiwiZXJyb3JfbWVzc2FnZV9jbGFzcyIsImVycm9yX21lc3NhZ2VfYWRkY2xhc3MiLCJmb3JtX2xhYmVsIiwiY2hlY2tib3hfbGFiZWwiLCJjYWxsYmFja19zdGFjayIsImV4dGVuZCIsIngiLCJkZWZhdWx0X2hhbmRsZXIiLCJmb3JtIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJoYXNPd25Qcm9wZXJ0eSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlZGlyZWN0X3VybCIsImVycm9ycyIsInZhbGlkYXRpb24iLCJmaW5kIiwibGVuZ3RoIiwicG9wdXAiLCJjbG9zZSIsIm9wZW4iLCJvcGVuX3BvcHVwIiwibWVzc2FnZSIsInRpdGxlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJmaWVsZE5hbWUiLCJmaWVsZCIsInNldFRpbWVvdXQiLCJodG1sIiwiYWRkQ2xhc3MiLCJjbG9zZXN0IiwiYXBwZW5kIiwidXBsb2FkIiwib24iLCJlIiwiQUlNIiwic3VibWl0Iiwib25TdGFydCIsIm9uQ29tcGxldGUiLCJyZXN1bHQiLCJkb2N1bWVudCIsInZhbCIsInNlbmQiLCJhY3Rpb24iLCJtZXRob2QiLCJkYXRhIiwiY2IiLCJlcnIiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJ0b0xvd2VyQ2FzZSIsInN1Y2Nlc3MiLCJlcnJvciIsImRhdGFUeXBlIiwiaW5pdExpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwibGluayIsImF0dHIiLCJpbml0Rm9ybSIsIkZvcm1EYXRhIiwic2VyaWFsaXplIiwiYnV0dG9uIiwidGV4dCIsImhhc0NsYXNzIiwiZ2V0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QkFBSSxPQUFPSixNQUFQLEtBQWtCLFdBQXRCLEVBQ0E7QUFDSSw0QkFBSUEsT0FBT3BCLElBQVAsQ0FBWSxVQUFaLENBQUosRUFDQTtBQUNJb0IsbUNBQU9DLElBQVAsQ0FBWUQsT0FBT3BCLElBQVAsQ0FBWSxVQUFaLENBQVo7QUFDSDs7QUFFRG9CLCtCQUFPMUMsV0FBUCxDQUFtQixTQUFuQjtBQUNIOztBQUVEbEIseUJBQUt3QyxJQUFMLENBQVUsU0FBVixFQUFxQixLQUFyQjtBQUNILGlCQW5DTCxFQW9DSSxVQUFTdkMsUUFBVCxFQUNBO0FBQ0lqQiwwQkFBTWUsZUFBTixDQUFzQkMsSUFBdEIsRUFBNEJDLFFBQTVCO0FBQ0FELHlCQUFLd0MsSUFBTCxDQUFVLFNBQVYsRUFBcUIsS0FBckI7QUFDSCxpQkF4Q0w7QUEwQ0gsYUExRUQ7QUEyRUgsU0E5VFk7O0FBZ1VieUIsY0FBTSxjQUFTL0UsTUFBVCxFQUNOO0FBQ0ksaUJBQUtXLE1BQUwsQ0FBWVgsTUFBWjs7QUFFQSxpQkFBS3VFLFFBQUw7QUFDQSxpQkFBS0wsUUFBTDtBQUNIO0FBdFVZLEtBQWpCOztBQXlVQXZFLE1BQUVDLEdBQUYsQ0FBTUcsUUFBTixDQUFlZ0YsSUFBZjtBQUVILENBbFZBLEVBa1ZHQyxNQWxWSCIsImZpbGUiOiJfYXBwLmFqYXhmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyggZnVuY3Rpb24oICQgKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmFwcCA9ICQuYXBwID0gJC5hcHAgfHwge307XG5cbiAgICB2YXIgYm9keSA9ICQoJ2JvZHknKSwgX3RoaXM7XG5cbiAgICAkLmFwcC5hamF4Rm9ybSA9IHtcblxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGZvcm1fY2xhc3M6ICcuZm9ybS1hamF4JyxcbiAgICAgICAgICAgIGZvcm1fcmVzZXQ6ICdmb3JtLXJlc2V0JyxcbiAgICAgICAgICAgIGxpbmtfY2xhc3M6ICcuanMtcmVxdWVzdC1saW5rJyxcbiAgICAgICAgICAgIGVycm9yX2NsYXNzOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3JfbWVzc2FnZTogJ2Zvcm1fX2Vycm9yLW1lc3NhZ2UnLFxuICAgICAgICAgICAgZXJyb3JfbWVzc2FnZV9jbGFzczogJ2otZXJyb3ItbWVzc2FnZScsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlX2FkZGNsYXNzOiAnc2hvdycsXG4gICAgICAgICAgICBmb3JtX2xhYmVsOiAnLmZvcm1fX3dyYXBwZXInLFxuICAgICAgICAgICAgY2hlY2tib3hfbGFiZWw6ICdjaGVja2JveF9fbGFiZWwnXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsbGJhY2tfc3RhY2s6IHt9LFxuXG4gICAgICAgIGV4dGVuZDogZnVuY3Rpb24oY29uZmlnKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgeDtcbiAgICAgICAgICAgICAgICBmb3IgKHggaW4gY29uZmlnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5jb25maWdbeF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29uZmlnW3hdID0gY29uZmlnW3hdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkZWZhdWx0X2hhbmRsZXI6IGZ1bmN0aW9uKGZvcm0sIHJlc3BvbnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdyZWRpcmVjdF91cmwnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UucmVkaXJlY3RfdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvcnMgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiByZXNwb25zZS5lcnJvcl9tZXNzYWdlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JzLCBlcnJvcl9tZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvcnMgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gcmVzcG9uc2UuZXJyb3JfbWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0aW9uKGZvcm0sIGVycm9ycywgcmVzcG9uc2UuZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnb3Blbl9wb3B1cCcpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgkKCdib2R5JykuZmluZCgnLnBvcHVwLmlzLW9wZW4nKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkLnBvcHVwLmNsb3NlKCQoJ2JvZHknKS5maW5kKCcucG9wdXAuaXMtb3BlbicpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5wb3B1cC5vcGVuKHJlc3BvbnNlLm9wZW5fcG9wdXApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJC5wb3B1cC5vcGVuKHJlc3BvbnNlLm9wZW5fcG9wdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdtZXNzYWdlJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJC5wb3B1cC5tZXNzYWdlKHJlc3BvbnNlLnRpdGxlLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIHZhbGlkYXRpb246IGZ1bmN0aW9uKGZvcm0sIGVycm9ycywgZXJyb3JfbWVzc2FnZSlcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX2NsYXNzKS5yZW1vdmVDbGFzcyhfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9tZXNzYWdlKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZV9jbGFzcykucmVtb3ZlQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfYWRkY2xhc3MpO1xuXG4gICAgICAgICAgICB2YXIgZmllbGROYW1lLCBmaWVsZDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yX21lc3NhZ2UgIT09ICd1bmRlZmluZWQnICYmIGVycm9yX21lc3NhZ2UgIT09ICcnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9tZXNzYWdlX2NsYXNzKS5odG1sKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfY2xhc3MpLmFkZENsYXNzKF90aGlzLmNvbmZpZy5lcnJvcl9tZXNzYWdlX2FkZGNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVycm9ycyAhPT0gJ3VuZGVmaW5lZCcgJiYgZXJyb3JzICE9PSAnJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihmaWVsZE5hbWUgaW4gZXJyb3JzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiJytmaWVsZE5hbWUrJ1wiXScpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiJytmaWVsZE5hbWUrJ1wiXScpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBmb3JtLmZpbmQoJ3NlbGVjdFtuYW1lPVwiJytmaWVsZE5hbWUrJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5maW5kKCd0ZXh0YXJlYVtuYW1lPVwiJytmaWVsZE5hbWUrJ1wiXScpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgPSBmb3JtLmZpbmQoJ3RleHRhcmVhW25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5jbG9zZXN0KCcuJyArIF90aGlzLmNvbmZpZy5jaGVja2JveF9sYWJlbCkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZpZWxkLmNsb3Nlc3QoJy4nICsgX3RoaXMuY29uZmlnLmNoZWNrYm94X2xhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuYWRkQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jbG9zZXN0KF90aGlzLmNvbmZpZy5mb3JtX2xhYmVsKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCInICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2UgKyAnXCI+JyArIGVycm9yc1tmaWVsZE5hbWVdICsgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwbG9hZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGJvZHkub24oJ3N1Ym1pdCcsICcuZm9ybS1maWxlLXVwbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQUlNLnN1Ym1pdCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdC5zdGF0dXMgPT09IHRydWUgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCdwaG90b191cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBsb2FkX2J1dHRvbl9vbmNoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdCgnLnVwbG9hZF9idXR0b24nKS5maW5kKCcudXBsb2FkX2J1dHRvbl9maWVsZCcpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51cGxvYWRfYnV0dG9uJykuZmluZCgnLnVwbG9hZF9idXR0b25fZmllbGQnKS5odG1sKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbmQ6IGZ1bmN0aW9uKGFjdGlvbiwgbWV0aG9kLCBkYXRhLCBjYiwgZXJyKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2IgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVyciAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlcnIgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogbWV0aG9kLnRvTG93ZXJDYXNlKCkgPT0gJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGNiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdExpbms6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBib2R5Lm9uKCdjbGljaycsIF90aGlzLmNvbmZpZy5saW5rX2NsYXNzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmIChsaW5rLmRhdGEoJ2lzLWJ1c3knKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGluay5kYXRhKCdpcy1idXN5JywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gKCQodGhpcykuYXR0cignaHJlZicpKSB8fCAkKHRoaXMpLmRhdGEoJ2FjdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSAoJCh0aGlzKS5kYXRhKCdtZXRob2QnKSkgfHwgJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNlbmQoXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmsuZGF0YSgnY2FsbGJhY2snKSAmJiBfdGhpcy5jYWxsYmFja19zdGFjay5oYXNPd25Qcm9wZXJ0eShsaW5rLmRhdGEoJ2NhbGxiYWNrJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrX3N0YWNrW2xpbmsuZGF0YSgnY2FsbGJhY2snKV0obGluaywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihsaW5rLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5kYXRhKCdpcy1idXN5JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVmYXVsdF9oYW5kbGVyKGxpbmssIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuZGF0YSgnaXMtYnVzeScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0Rm9ybTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGJvZHkub24oJ3N1Ym1pdCcsIF90aGlzLmNvbmZpZy5mb3JtX2NsYXNzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBmb3JtICAgID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uICA9IGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCAgPSAoZm9ybS5hdHRyKCdtZXRob2QnKSB8fCAncG9zdCcpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhICAgID0gISF3aW5kb3cuRm9ybURhdGEgPyBuZXcgRm9ybURhdGEoZm9ybVswXSkgOiBmb3JtLnNlcmlhbGl6ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uZGF0YSgnaXMtYnVzeScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtLmRhdGEoJ2lzLWJ1c3knLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnV0dG9uICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uZGF0YSgnbG9hZGluZycpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uZGF0YSgnb3JpZ2luYWwnLCBidXR0b24udGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0KGJ1dHRvbi5kYXRhKCdsb2FkaW5nJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdwcmVsb2FkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uZGF0YSgncHJlY2FsbGJhY2snKSAmJiBfdGhpcy5jYWxsYmFja19zdGFjay5oYXNPd25Qcm9wZXJ0eShmb3JtLmRhdGEoJ3ByZWNhbGxiYWNrJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFfdGhpcy5jYWxsYmFja19zdGFja1tmb3JtLmRhdGEoJ3ByZWNhbGxiYWNrJyldKGZvcm0pKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kKFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmRhdGEoJ2NhbGxiYWNrJykgJiYgX3RoaXMuY2FsbGJhY2tfc3RhY2suaGFzT3duUHJvcGVydHkoZm9ybS5kYXRhKCdjYWxsYmFjaycpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFja19zdGFja1tmb3JtLmRhdGEoJ2NhbGxiYWNrJyldKGZvcm0sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWZhdWx0X2hhbmRsZXIoZm9ybSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmhhc0NsYXNzKF90aGlzLmNvbmZpZy5mb3JtX3Jlc2V0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpLnJlbW92ZUNsYXNzKF90aGlzLmNvbmZpZy5lcnJvcl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0KDApLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJ1dHRvbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5kYXRhKCdvcmlnaW5hbCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHQoYnV0dG9uLmRhdGEoJ29yaWdpbmFsJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcygncHJlbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmRhdGEoJ2lzLWJ1c3knLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWZhdWx0X2hhbmRsZXIoZm9ybSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5kYXRhKCdpcy1idXN5JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGNvbmZpZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5leHRlbmQoY29uZmlnKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0Rm9ybSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0TGluaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuYXBwLmFqYXhGb3JtLmluaXQoKTtcblxufSkoIGpRdWVyeSApO1xuIl19

'use strict';

;(function ($) {
    "use strict";

    $.app = $.app || {};

    $.app.banner = {
        close: function close() {
            var $body = $('body');

            $('#rs-event').fadeOut(300, function () {
                setTimeout(function () {
                    $('#rs-event').remove();
                    $body.removeClass('is-no-overflow');
                }, 150);
            });
        },

        events: function events() {
            var _this = this;
            $('body').on('click', '.rs-event-close-button', function (e) {
                e.preventDefault();
                _this.close();
            });
        },

        show: function show() {
            var _this = this;
            var $body = $('body');

            var template = ['<div class="rs-event" id="rs-event">', '<div class="rs-event__image">', '<a href="#" class="rs-event__close rs-event-close-button"></a>', '<img src="/images/banner-action-double.jpg" class="rs-event__image__src">', '</div>', '<div class="rs-event__content">', '<h2>Две квартиры по цене одной!</h2>', '<h3>В ЖК «ВиноградЪ» только до конца мая Вы можете приобрести две квартиры по цене одной!</h3>', '<h3>За 1,5 млн.руб. – сразу ДВЕ КВАРТИРЫ!!!!</h3>', '<p>Условия акции продиктованы сложившейся рыночной ситуацией, так согласно статистическим данным от независимых экспертов на сегодняшний день средняя стоимость однокомнатной квартиры в Краснодарском крае возросла до 2 млн.руб. (см. статистику в конце статьи)</p>', '<p>Строительная компания «Регион-Строй» идет на беспрецедентные меры! Только до конца мая (по 31.05.2017 включительно) мы фиксируем стоимость квартиры студии в пределах 700-750 тыс. руб. (в зависимости от площади)! Таким образом всего за 1,5 млн.руб. Вы сможете приобрести две квартиры студии, в сравнении с приведенной ниже статистикой за такую же стоимость сегодня можно приобрести всего одну однокомнатную квартиру! Две лучше, чем одна! Спешите – предложение ограничено.</p>', '<p>До конца мая по фиксированной цене Вы можете купить и одну квартиру студию – стоимостью от 700 до 750 тыс.руб. (точная стоимость определяется площадью квартиры).  Приобретая квартиру по данному  предложению, Вы можете так же воспользоваться: Ипотекой, Рассрочкой, Мат.капиталом.</p>', '<p>Подробности в отделе продаж СК «Регион-Строй»: <strong><a href="tel:8-800-707-16-87">8 800 707 16 87</a></strong></p>', '<p>Данные предоставлены: <a href="http://krasnodar.naydidom.com/tseny/adtype-kupit" target="_blank">http://krasnodar.naydidom.com/tseny/adtype-kupit</a></p>', '<p><img src="/images/grafik-prodaj.jpg" alt=""></p>', '</div>', '</div>'];

            $body.addClass('is-no-overflow');
            $body.append(template.join(''));

            _this.events();
        },

        init: function init() {
            var _this = this;

            if (!$.cookie('main.page.banner.updated')) {
                $.removeCookie('main.page.banner');

                $.cookie('main.page.banner.updated', true, {
                    expires: 1,
                    path: '/'
                });
            }

            var timeout = 2000;

            if (typeof window.location.hash !== 'undefined' && window.location.hash === '#two-apartments-price-of-one') {
                timeout = 0;
            }

            // if (!$.cookie('main.page.banner')) {
            setTimeout(function () {
                _this.show();
            }, timeout);

            //     var date = new Date();
            //     var m = 3;
            //     date.setTime(date.getTime() + (m * 60 * 1000));

            //     $.cookie('main.page.banner', true, {
            //         expires: date,
            //         path: '/'
            //     });
            // }
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuYmFubmVyLmpzIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJiYW5uZXIiLCJjbG9zZSIsIiRib2R5IiwiZmFkZU91dCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImV2ZW50cyIsIl90aGlzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG93IiwidGVtcGxhdGUiLCJhZGRDbGFzcyIsImFwcGVuZCIsImpvaW4iLCJpbml0IiwiY29va2llIiwicmVtb3ZlQ29va2llIiwiZXhwaXJlcyIsInBhdGgiLCJ0aW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBRSxVQUFVQSxDQUFWLEVBQWM7QUFDYjs7QUFFQUEsTUFBRUMsR0FBRixHQUFRRCxFQUFFQyxHQUFGLElBQVMsRUFBakI7O0FBRUFELE1BQUVDLEdBQUYsQ0FBTUMsTUFBTixHQUFlO0FBQ1hDLGVBQU8saUJBQVc7QUFDZCxnQkFBSUMsUUFBUUosRUFBRSxNQUFGLENBQVo7O0FBRUFBLGNBQUUsV0FBRixFQUFlSyxPQUFmLENBQXVCLEdBQXZCLEVBQTRCLFlBQVU7QUFDbENDLDJCQUFXLFlBQVc7QUFDbEJOLHNCQUFFLFdBQUYsRUFBZU8sTUFBZjtBQUNBSCwwQkFBTUksV0FBTixDQUFrQixnQkFBbEI7QUFDSCxpQkFIRCxFQUdHLEdBSEg7QUFJSCxhQUxEO0FBTUgsU0FWVTs7QUFZWEMsZ0JBQVEsa0JBQVc7QUFDZixnQkFBSUMsUUFBUSxJQUFaO0FBQ0FWLGNBQUUsTUFBRixFQUFVVyxFQUFWLENBQWEsT0FBYixFQUFzQix3QkFBdEIsRUFBZ0QsVUFBU0MsQ0FBVCxFQUFZO0FBQ3hEQSxrQkFBRUMsY0FBRjtBQUNBSCxzQkFBTVAsS0FBTjtBQUNILGFBSEQ7QUFJSCxTQWxCVTs7QUFvQlhXLGNBQU0sZ0JBQVc7QUFDYixnQkFBSUosUUFBUSxJQUFaO0FBQ0EsZ0JBQUlOLFFBQVFKLEVBQUUsTUFBRixDQUFaOztBQUVBLGdCQUFJZSxXQUFXLENBQ1gsc0NBRFcsRUFFUCwrQkFGTyxFQUdILGdFQUhHLEVBSUgsMkVBSkcsRUFLUCxRQUxPLEVBTVAsaUNBTk8sRUFPSCxzQ0FQRyxFQVFILGdHQVJHLEVBU0gsbURBVEcsRUFVSCx3UUFWRyxFQVdILCtkQVhHLEVBWUgsK1JBWkcsRUFhSCwwSEFiRyxFQWNILDhKQWRHLEVBZUgscURBZkcsRUFnQlAsUUFoQk8sRUFpQlgsUUFqQlcsQ0FBZjs7QUFvQkFYLGtCQUFNWSxRQUFOLENBQWUsZ0JBQWY7QUFDQVosa0JBQU1hLE1BQU4sQ0FBYUYsU0FBU0csSUFBVCxDQUFjLEVBQWQsQ0FBYjs7QUFFQVIsa0JBQU1ELE1BQU47QUFDSCxTQWhEVTs7QUFrRFhVLGNBQU0sZ0JBQVc7QUFDYixnQkFBSVQsUUFBUSxJQUFaOztBQUVBLGdCQUFJLENBQUNWLEVBQUVvQixNQUFGLENBQVMsMEJBQVQsQ0FBTCxFQUEyQztBQUN2Q3BCLGtCQUFFcUIsWUFBRixDQUFlLGtCQUFmOztBQUVBckIsa0JBQUVvQixNQUFGLENBQVMsMEJBQVQsRUFBcUMsSUFBckMsRUFBMkM7QUFDdkNFLDZCQUFTLENBRDhCO0FBRXZDQywwQkFBTTtBQUZpQyxpQkFBM0M7QUFJSDs7QUFFRCxnQkFBSUMsVUFBVSxJQUFkOztBQUVBLGdCQUFJLE9BQU9DLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXZCLEtBQWdDLFdBQWhDLElBQStDRixPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixLQUF5Qiw4QkFBNUUsRUFBNEc7QUFDeEdILDBCQUFVLENBQVY7QUFDSDs7QUFFRDtBQUNBbEIsdUJBQVcsWUFBVztBQUNsQkksc0JBQU1JLElBQU47QUFDSCxhQUZELEVBRUdVLE9BRkg7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFsRlUsS0FBZjtBQXNGSCxDQTNGQSxFQTJGR0ksTUEzRkgiLCJmaWxlIjoiX2FwcC5iYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KCBmdW5jdGlvbiggJCApIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuYXBwID0gJC5hcHAgfHwge307XG5cbiAgICAkLmFwcC5iYW5uZXIgPSB7XG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICAgICAgJCgnI3JzLWV2ZW50JykuZmFkZU91dCgzMDAsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3JzLWV2ZW50JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdpcy1uby1vdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBldmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnJzLWV2ZW50LWNsb3NlLWJ1dHRvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gW1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicnMtZXZlbnRcIiBpZD1cInJzLWV2ZW50XCI+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJycy1ldmVudF9faW1hZ2VcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJycy1ldmVudF9fY2xvc2UgcnMtZXZlbnQtY2xvc2UtYnV0dG9uXCI+PC9hPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzcmM9XCIvaW1hZ2VzL2Jhbm5lci1hY3Rpb24tZG91YmxlLmpwZ1wiIGNsYXNzPVwicnMtZXZlbnRfX2ltYWdlX19zcmNcIj4nLFxuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJycy1ldmVudF9fY29udGVudFwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGgyPtCU0LLQtSDQutCy0LDRgNGC0LjRgNGLINC/0L4g0YbQtdC90LUg0L7QtNC90L7QuSE8L2gyPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGgzPtCSINCW0JogwqvQktC40L3QvtCz0YDQsNC00KrCuyDRgtC+0LvRjNC60L4g0LTQviDQutC+0L3RhtCwINC80LDRjyDQktGLINC80L7QttC10YLQtSDQv9GA0LjQvtCx0YDQtdGB0YLQuCDQtNCy0LUg0LrQstCw0YDRgtC40YDRiyDQv9C+INGG0LXQvdC1INC+0LTQvdC+0LkhPC9oMz4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxoMz7Ql9CwIDEsNSDQvNC70L0u0YDRg9CxLiDigJMg0YHRgNCw0LfRgyDQlNCS0JUg0JrQktCQ0KDQotCY0KDQqyEhISE8L2gzPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHA+0KPRgdC70L7QstC40Y8g0LDQutGG0LjQuCDQv9GA0L7QtNC40LrRgtC+0LLQsNC90Ysg0YHQu9C+0LbQuNCy0YjQtdC50YHRjyDRgNGL0L3QvtGH0L3QvtC5INGB0LjRgtGD0LDRhtC40LXQuSwg0YLQsNC6INGB0L7Qs9C70LDRgdC90L4g0YHRgtCw0YLQuNGB0YLQuNGH0LXRgdC60LjQvCDQtNCw0L3QvdGL0Lwg0L7RgiDQvdC10LfQsNCy0LjRgdC40LzRi9GFINGN0LrRgdC/0LXRgNGC0L7QsiDQvdCwINGB0LXQs9C+0LTQvdGP0YjQvdC40Lkg0LTQtdC90Ywg0YHRgNC10LTQvdGP0Y8g0YHRgtC+0LjQvNC+0YHRgtGMINC+0LTQvdC+0LrQvtC80L3QsNGC0L3QvtC5INC60LLQsNGA0YLQuNGA0Ysg0LIg0JrRgNCw0YHQvdC+0LTQsNGA0YHQutC+0Lwg0LrRgNCw0LUg0LLQvtC30YDQvtGB0LvQsCDQtNC+IDIg0LzQu9C9LtGA0YPQsS4gKNGB0LwuINGB0YLQsNGC0LjRgdGC0LjQutGDINCyINC60L7QvdGG0LUg0YHRgtCw0YLRjNC4KTwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxwPtCh0YLRgNC+0LjRgtC10LvRjNC90LDRjyDQutC+0LzQv9Cw0L3QuNGPIMKr0KDQtdCz0LjQvtC9LdCh0YLRgNC+0LnCuyDQuNC00LXRgiDQvdCwINCx0LXRgdC/0YDQtdGG0LXQtNC10L3RgtC90YvQtSDQvNC10YDRiyEg0KLQvtC70YzQutC+INC00L4g0LrQvtC90YbQsCDQvNCw0Y8gKNC/0L4gMzEuMDUuMjAxNyDQstC60LvRjtGH0LjRgtC10LvRjNC90L4pINC80Ysg0YTQuNC60YHQuNGA0YPQtdC8INGB0YLQvtC40LzQvtGB0YLRjCDQutCy0LDRgNGC0LjRgNGLINGB0YLRg9C00LjQuCDQsiDQv9GA0LXQtNC10LvQsNGFIDcwMC03NTAg0YLRi9GBLiDRgNGD0LEuICjQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0L/Qu9C+0YnQsNC00LgpISDQotCw0LrQuNC8INC+0LHRgNCw0LfQvtC8INCy0YHQtdCz0L4g0LfQsCAxLDUg0LzQu9C9LtGA0YPQsS4g0JLRiyDRgdC80L7QttC10YLQtSDQv9GA0LjQvtCx0YDQtdGB0YLQuCDQtNCy0LUg0LrQstCw0YDRgtC40YDRiyDRgdGC0YPQtNC40LgsINCyINGB0YDQsNCy0L3QtdC90LjQuCDRgSDQv9GA0LjQstC10LTQtdC90L3QvtC5INC90LjQttC1INGB0YLQsNGC0LjRgdGC0LjQutC+0Lkg0LfQsCDRgtCw0LrRg9GOINC20LUg0YHRgtC+0LjQvNC+0YHRgtGMINGB0LXQs9C+0LTQvdGPINC80L7QttC90L4g0L/RgNC40L7QsdGA0LXRgdGC0Lgg0LLRgdC10LPQviDQvtC00L3RgyDQvtC00L3QvtC60L7QvNC90LDRgtC90YPRjiDQutCy0LDRgNGC0LjRgNGDISDQlNCy0LUg0LvRg9GH0YjQtSwg0YfQtdC8INC+0LTQvdCwISDQodC/0LXRiNC40YLQtSDigJMg0L/RgNC10LTQu9C+0LbQtdC90LjQtSDQvtCz0YDQsNC90LjRh9C10L3Qvi48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD7QlNC+INC60L7QvdGG0LAg0LzQsNGPINC/0L4g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+0Lkg0YbQtdC90LUg0JLRiyDQvNC+0LbQtdGC0LUg0LrRg9C/0LjRgtGMINC4INC+0LTQvdGDINC60LLQsNGA0YLQuNGA0YMg0YHRgtGD0LTQuNGOIOKAkyDRgdGC0L7QuNC80L7RgdGC0YzRjiDQvtGCIDcwMCDQtNC+IDc1MCDRgtGL0YEu0YDRg9CxLiAo0YLQvtGH0L3QsNGPINGB0YLQvtC40LzQvtGB0YLRjCDQvtC/0YDQtdC00LXQu9GP0LXRgtGB0Y8g0L/Qu9C+0YnQsNC00YzRjiDQutCy0LDRgNGC0LjRgNGLKS4gINCf0YDQuNC+0LHRgNC10YLQsNGPINC60LLQsNGA0YLQuNGA0YMg0L/QviDQtNCw0L3QvdC+0LzRgyAg0L/RgNC10LTQu9C+0LbQtdC90LjRjiwg0JLRiyDQvNC+0LbQtdGC0LUg0YLQsNC6INC20LUg0LLQvtGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPOiDQmNC/0L7RgtC10LrQvtC5LCDQoNCw0YHRgdGA0L7Rh9C60L7QuSwg0JzQsNGCLtC60LDQv9C40YLQsNC70L7QvC48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD7Qn9C+0LTRgNC+0LHQvdC+0YHRgtC4INCyINC+0YLQtNC10LvQtSDQv9GA0L7QtNCw0LYg0KHQmiDCq9Cg0LXQs9C40L7QvS3QodGC0YDQvtC5wrs6IDxzdHJvbmc+PGEgaHJlZj1cInRlbDo4LTgwMC03MDctMTYtODdcIj44wqA4MDDCoDcwNyAxNiA4NzwvYT48L3N0cm9uZz48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD7QlNCw0L3QvdGL0LUg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90Ys6IDxhIGhyZWY9XCJodHRwOi8va3Jhc25vZGFyLm5heWRpZG9tLmNvbS90c2VueS9hZHR5cGUta3VwaXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8va3Jhc25vZGFyLm5heWRpZG9tLmNvbS90c2VueS9hZHR5cGUta3VwaXQ8L2E+PC9wPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHA+PGltZyBzcmM9XCIvaW1hZ2VzL2dyYWZpay1wcm9kYWouanBnXCIgYWx0PVwiXCI+PC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnaXMtbm8tb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICRib2R5LmFwcGVuZCh0ZW1wbGF0ZS5qb2luKCcnKSk7XG5cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCEkLmNvb2tpZSgnbWFpbi5wYWdlLmJhbm5lci51cGRhdGVkJykpIHtcbiAgICAgICAgICAgICAgICAkLnJlbW92ZUNvb2tpZSgnbWFpbi5wYWdlLmJhbm5lcicpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQuY29va2llKCdtYWluLnBhZ2UuYmFubmVyLnVwZGF0ZWQnLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IDIwMDA7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2ggIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI3R3by1hcGFydG1lbnRzLXByaWNlLW9mLW9uZScpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgKCEkLmNvb2tpZSgnbWFpbi5wYWdlLmJhbm5lcicpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNob3coKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBtID0gMztcbiAgICAgICAgICAgIC8vICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAobSAqIDYwICogMTAwMCkpO1xuXG4gICAgICAgICAgICAvLyAgICAgJC5jb29raWUoJ21haW4ucGFnZS5iYW5uZXInLCB0cnVlLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGV4cGlyZXM6IGRhdGUsXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhdGg6ICcvJ1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG59KSggalF1ZXJ5ICk7XG4iXX0=

"use strict";

;(function ($) {
    "use strict";

    var _this;

    $.app = $.app || {};

    $.app.layzr = {

        init: function init(config) {
            $(window).lazyLoadXT({
                edgeY: 200,
                srcAttr: 'data-src'
            });
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubGF5enIuanMiXSwibmFtZXMiOlsiJCIsIl90aGlzIiwiYXBwIiwibGF5enIiLCJpbml0IiwiY29uZmlnIiwid2luZG93IiwibGF6eUxvYWRYVCIsImVkZ2VZIiwic3JjQXR0ciIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ1g7O0FBRUEsUUFBSUMsS0FBSjs7QUFFQUQsTUFBRUUsR0FBRixHQUFRRixFQUFFRSxHQUFGLElBQVMsRUFBakI7O0FBRUFGLE1BQUVFLEdBQUYsQ0FBTUMsS0FBTixHQUFjOztBQUVWQyxjQUFNLGNBQVNDLE1BQVQsRUFDTjtBQUNJTCxjQUFFTSxNQUFGLEVBQVVDLFVBQVYsQ0FBcUI7QUFDakJDLHVCQUFRLEdBRFM7QUFFakJDLHlCQUFTO0FBRlEsYUFBckI7QUFJSDs7QUFSUyxLQUFkO0FBWUgsQ0FuQkEsRUFtQkVDLE1BbkJGIiwiZmlsZSI6Il9hcHAubGF5enIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICAkLmFwcCA9ICQuYXBwIHx8IHt9O1xuXG4gICAgJC5hcHAubGF5enIgPSB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oY29uZmlnKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHdpbmRvdykubGF6eUxvYWRYVCh7XG4gICAgICAgICAgICAgICAgZWRnZVk6ICAyMDAsXG4gICAgICAgICAgICAgICAgc3JjQXR0cjogJ2RhdGEtc3JjJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKGpRdWVyeSk7XG4iXX0=

'use strict';

;(function ($) {
    "use strict";

    var _this;

    $.app = $.app || {};

    $.app.pinchzoom = {

        pinch: function pinch($element) {
            if ($element.find('.j-pinch-zoom').length) {
                new RTP.PinchZoom($element.find('.j-pinch-zoom'), {
                    tapZoomFactor: 3,
                    minZoom: 0.5,
                    maxZoom: 10,
                    lockDragAxis: true
                });
            }
        },

        trigger: function trigger() {
            _this = this;

            var image, $popup;

            $('body').on('click', '.j-pinch-trigger', function (e) {
                e.preventDefault();

                image = $(this).attr('href');

                $popup = $(template('tmpl-popup-pinch', { 'image': image }));

                $popup.addClass('temp');

                $('body').append($popup);

                $.popup.show($popup);

                _this.pinch($popup);

                return false;
            });
        },

        init: function init(config) {
            this.trigger();

            // $('.j-pinch-zoom').each(function () {
            //     // $(this).panzoom({
            //     //     minScale: 0.4,
            //     //     maxScale: 5,
            //     //     disablePan: false,
            //     //     disableZoom: false,
            //     //     panOnlyWhenZoomed: false
            //     // });

            //     // $(this).smartZoom({
            //     //     'top' : '0', // zoom target container top position in pixel
            //     //     'left' : '0', // zoom target container left position in pixel
            //     //     'width' : '100%', // zoom target container width in pixel or in percent
            //     //     'height' : '100%', // zoom target container height in pixel or in percent 
            //     //     'easing' : 'smartZoomEasing', // jquery easing function used when the browser doesn't support css transitions
            //     //     'maxScale' : 3, // the max scale that will be applied on the zoom target
            //     //     'dblClickMaxScale' : 1.8, // the max scale that will be applied on the zoom target on double click
            //     //     'mouseEnabled' : true, // enable plugin mouse interaction 
            //     //     'scrollEnabled' : true, // enable plugin mouse wheel behviour
            //     //     'dblClickEnabled' : true, // enable plugin mouse doubleClick behviour
            //     //     'mouseMoveEnabled' : true, // enable plugin target drag behviour
            //     //     'moveCursorEnabled' : true, // show moveCursor for drag
            //     //     'touchEnabled' : true, // enable plugin touch interaction 
            //     //     'dblTapEnabled' : true, // enable plugin double tap behaviour 
            //     //     'pinchEnabled' : true, // enable zoom when user pinch on target
            //     //     'touchMoveEnabled' : true
            //     // });

            // new RTP.PinchZoom($(this), {
            //     tapZoomFactor:      2,
            //     minZoom:            0.5,
            //     maxZoom:            6,
            //     lockDragAxis:       false
            // });
            // });
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAucGluY2h6b29tLmpzIl0sIm5hbWVzIjpbIiQiLCJfdGhpcyIsImFwcCIsInBpbmNoem9vbSIsInBpbmNoIiwiJGVsZW1lbnQiLCJmaW5kIiwibGVuZ3RoIiwiUlRQIiwiUGluY2hab29tIiwidGFwWm9vbUZhY3RvciIsIm1pblpvb20iLCJtYXhab29tIiwibG9ja0RyYWdBeGlzIiwidHJpZ2dlciIsImltYWdlIiwiJHBvcHVwIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhdHRyIiwidGVtcGxhdGUiLCJhZGRDbGFzcyIsImFwcGVuZCIsInBvcHVwIiwic2hvdyIsImluaXQiLCJjb25maWciLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNYOztBQUVBLFFBQUlDLEtBQUo7O0FBRUFELE1BQUVFLEdBQUYsR0FBUUYsRUFBRUUsR0FBRixJQUFTLEVBQWpCOztBQUVBRixNQUFFRSxHQUFGLENBQU1DLFNBQU4sR0FBa0I7O0FBRWRDLGVBQU8sZUFBU0MsUUFBVCxFQUFtQjtBQUN0QixnQkFBSUEsU0FBU0MsSUFBVCxDQUFjLGVBQWQsRUFBK0JDLE1BQW5DLEVBQTJDO0FBQ3ZDLG9CQUFJQyxJQUFJQyxTQUFSLENBQWtCSixTQUFTQyxJQUFULENBQWMsZUFBZCxDQUFsQixFQUFrRDtBQUM5Q0ksbUNBQW9CLENBRDBCO0FBRTlDQyw2QkFBb0IsR0FGMEI7QUFHOUNDLDZCQUFvQixFQUgwQjtBQUk5Q0Msa0NBQW9CO0FBSjBCLGlCQUFsRDtBQU1IO0FBQ0osU0FYYTs7QUFhZEMsaUJBQVMsbUJBQVc7QUFDaEJiLG9CQUFRLElBQVI7O0FBRUEsZ0JBQUljLEtBQUosRUFBV0MsTUFBWDs7QUFFQWhCLGNBQUUsTUFBRixFQUFVaUIsRUFBVixDQUFhLE9BQWIsRUFBc0Isa0JBQXRCLEVBQTBDLFVBQVNDLENBQVQsRUFBVztBQUNqREEsa0JBQUVDLGNBQUY7O0FBRUFKLHdCQUFRZixFQUFFLElBQUYsRUFBUW9CLElBQVIsQ0FBYSxNQUFiLENBQVI7O0FBRUFKLHlCQUFTaEIsRUFBRXFCLFNBQVMsa0JBQVQsRUFBNkIsRUFBRSxTQUFTTixLQUFYLEVBQTdCLENBQUYsQ0FBVDs7QUFFQUMsdUJBQU9NLFFBQVAsQ0FBZ0IsTUFBaEI7O0FBRUF0QixrQkFBRSxNQUFGLEVBQVV1QixNQUFWLENBQWlCUCxNQUFqQjs7QUFFQWhCLGtCQUFFd0IsS0FBRixDQUFRQyxJQUFSLENBQWFULE1BQWI7O0FBRUFmLHNCQUFNRyxLQUFOLENBQVlZLE1BQVo7O0FBRUEsdUJBQU8sS0FBUDtBQUNILGFBaEJEO0FBaUJILFNBbkNhOztBQXFDZFUsY0FBTSxjQUFTQyxNQUFULEVBQ047QUFDSSxpQkFBS2IsT0FBTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUVIOztBQTdFYSxLQUFsQjtBQWlGSCxDQXhGQSxFQXdGRWMsTUF4RkYiLCJmaWxlIjoiX2FwcC5waW5jaHpvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICAkLmFwcCA9ICQuYXBwIHx8IHt9O1xuXG4gICAgJC5hcHAucGluY2h6b29tID0ge1xuXG4gICAgICAgIHBpbmNoOiBmdW5jdGlvbigkZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCRlbGVtZW50LmZpbmQoJy5qLXBpbmNoLXpvb20nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXcgUlRQLlBpbmNoWm9vbSgkZWxlbWVudC5maW5kKCcuai1waW5jaC16b29tJyksIHtcbiAgICAgICAgICAgICAgICAgICAgdGFwWm9vbUZhY3RvcjogICAgICAzLFxuICAgICAgICAgICAgICAgICAgICBtaW5ab29tOiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgbWF4Wm9vbTogICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgbG9ja0RyYWdBeGlzOiAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBpbWFnZSwgJHBvcHVwO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXBpbmNoLXRyaWdnZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICAgICAgJHBvcHVwID0gJCh0ZW1wbGF0ZSgndG1wbC1wb3B1cC1waW5jaCcsIHsgJ2ltYWdlJzogaW1hZ2UgfSkpO1xuXG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCd0ZW1wJyk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwb3B1cCk7XG5cbiAgICAgICAgICAgICAgICAkLnBvcHVwLnNob3coJHBvcHVwKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnBpbmNoKCRwb3B1cCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbihjb25maWcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xuXG4gICAgICAgICAgICAvLyAkKCcuai1waW5jaC16b29tJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gJCh0aGlzKS5wYW56b29tKHtcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgbWluU2NhbGU6IDAuNCxcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgbWF4U2NhbGU6IDUsXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIGRpc2FibGVQYW46IGZhbHNlLFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICBkaXNhYmxlWm9vbTogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIHBhbk9ubHlXaGVuWm9vbWVkOiBmYWxzZVxuICAgICAgICAgICAgLy8gICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAvLyAgICAgLy8gJCh0aGlzKS5zbWFydFpvb20oe1xuICAgICAgICAgICAgLy8gICAgIC8vICAgICAndG9wJyA6ICcwJywgLy8gem9vbSB0YXJnZXQgY29udGFpbmVyIHRvcCBwb3NpdGlvbiBpbiBwaXhlbFxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAnbGVmdCcgOiAnMCcsIC8vIHpvb20gdGFyZ2V0IGNvbnRhaW5lciBsZWZ0IHBvc2l0aW9uIGluIHBpeGVsXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICd3aWR0aCcgOiAnMTAwJScsIC8vIHpvb20gdGFyZ2V0IGNvbnRhaW5lciB3aWR0aCBpbiBwaXhlbCBvciBpbiBwZXJjZW50XG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICdoZWlnaHQnIDogJzEwMCUnLCAvLyB6b29tIHRhcmdldCBjb250YWluZXIgaGVpZ2h0IGluIHBpeGVsIG9yIGluIHBlcmNlbnQgXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICdlYXNpbmcnIDogJ3NtYXJ0Wm9vbUVhc2luZycsIC8vIGpxdWVyeSBlYXNpbmcgZnVuY3Rpb24gdXNlZCB3aGVuIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjc3MgdHJhbnNpdGlvbnNcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgJ21heFNjYWxlJyA6IDMsIC8vIHRoZSBtYXggc2NhbGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgb24gdGhlIHpvb20gdGFyZ2V0XG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICdkYmxDbGlja01heFNjYWxlJyA6IDEuOCwgLy8gdGhlIG1heCBzY2FsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCBvbiB0aGUgem9vbSB0YXJnZXQgb24gZG91YmxlIGNsaWNrXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICdtb3VzZUVuYWJsZWQnIDogdHJ1ZSwgLy8gZW5hYmxlIHBsdWdpbiBtb3VzZSBpbnRlcmFjdGlvbiBcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgJ3Njcm9sbEVuYWJsZWQnIDogdHJ1ZSwgLy8gZW5hYmxlIHBsdWdpbiBtb3VzZSB3aGVlbCBiZWh2aW91clxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAnZGJsQ2xpY2tFbmFibGVkJyA6IHRydWUsIC8vIGVuYWJsZSBwbHVnaW4gbW91c2UgZG91YmxlQ2xpY2sgYmVodmlvdXJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgJ21vdXNlTW92ZUVuYWJsZWQnIDogdHJ1ZSwgLy8gZW5hYmxlIHBsdWdpbiB0YXJnZXQgZHJhZyBiZWh2aW91clxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAnbW92ZUN1cnNvckVuYWJsZWQnIDogdHJ1ZSwgLy8gc2hvdyBtb3ZlQ3Vyc29yIGZvciBkcmFnXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICd0b3VjaEVuYWJsZWQnIDogdHJ1ZSwgLy8gZW5hYmxlIHBsdWdpbiB0b3VjaCBpbnRlcmFjdGlvbiBcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgJ2RibFRhcEVuYWJsZWQnIDogdHJ1ZSwgLy8gZW5hYmxlIHBsdWdpbiBkb3VibGUgdGFwIGJlaGF2aW91ciBcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgJ3BpbmNoRW5hYmxlZCcgOiB0cnVlLCAvLyBlbmFibGUgem9vbSB3aGVuIHVzZXIgcGluY2ggb24gdGFyZ2V0XG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICd0b3VjaE1vdmVFbmFibGVkJyA6IHRydWVcbiAgICAgICAgICAgIC8vICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIC8vIG5ldyBSVFAuUGluY2hab29tKCQodGhpcyksIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFwWm9vbUZhY3RvcjogICAgICAyLFxuICAgICAgICAgICAgICAgIC8vICAgICBtaW5ab29tOiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgICAvLyAgICAgbWF4Wm9vbTogICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIC8vICAgICBsb2NrRHJhZ0F4aXM6ICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG59KShqUXVlcnkpOyJdfQ==

'use strict';

;(function ($) {
    "use strict";

    var _this;

    $.app = $.app || {};

    $.app.sandwich = {

        config: {
            keyHooks: !1,
            selector: '.js-sandwich-menu',
            wrapper: '.layout-wrapper',
            overlay: '.overlay'
        },

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },

        isOpen: function isOpen() {
            return $('body').hasClass('page-visible');
        },

        hide: function hide() {
            $('body').removeClass('page-open');

            setTimeout(function () {
                $('body').removeClass('page-visible');
            }, 10);

            $(this.config.overlay).css({
                'visibility': 'hidden'
            });
        },

        toggle: function toggle() {
            if ($('body').hasClass('page-visible')) {
                setTimeout(function () {
                    $('body').removeClass('page-visible');
                }, 10);
            } else {
                setTimeout(function () {
                    $('body').addClass('page-visible');
                }, 10);
            }

            $('body').toggleClass('page-open');

            var visibility = 'visible';

            if (!$('body').hasClass('page-open')) {
                visibility = 'hidden';
            }

            $(_this.config.overlay).css({
                'visibility': visibility
            });
        },

        sandwichTrigger: function sandwichTrigger() {
            _this = this;

            if (_this.config.keyHooks) {
                $('body').on('keydown', function (e) {
                    if (e.keyCode == 27 && _this.isOpen()) {
                        _this.toggle();
                    }
                });
            };

            $('body').on('click', _this.config.selector, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                _this.toggle();
            });
        },

        overlayTrigger: function overlayTrigger() {
            _this = this;

            $('body').on('click', _this.config.overlay, function (e) {
                _this.hide();
            });
        },

        init: function init(config) {
            this.extend(config);

            this.sandwichTrigger();
            this.overlayTrigger();
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2FuZHdpY2guanMiXSwibmFtZXMiOlsiJCIsIl90aGlzIiwiYXBwIiwic2FuZHdpY2giLCJjb25maWciLCJrZXlIb29rcyIsInNlbGVjdG9yIiwid3JhcHBlciIsIm92ZXJsYXkiLCJleHRlbmQiLCJ4IiwiaXNPcGVuIiwiaGFzQ2xhc3MiLCJoaWRlIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiY3NzIiwidG9nZ2xlIiwiYWRkQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsInZpc2liaWxpdHkiLCJzYW5kd2ljaFRyaWdnZXIiLCJvbiIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsIm92ZXJsYXlUcmlnZ2VyIiwiaW5pdCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ1g7O0FBRUEsUUFBSUMsS0FBSjs7QUFFQUQsTUFBRUUsR0FBRixHQUFRRixFQUFFRSxHQUFGLElBQVMsRUFBakI7O0FBRUFGLE1BQUVFLEdBQUYsQ0FBTUMsUUFBTixHQUFpQjs7QUFFYkMsZ0JBQVE7QUFDSkMsc0JBQVUsQ0FBQyxDQURQO0FBRUpDLHNCQUFVLG1CQUZOO0FBR0pDLHFCQUFTLGlCQUhMO0FBSUpDLHFCQUFTO0FBSkwsU0FGSzs7QUFTYkMsZ0JBQVEsZ0JBQVNMLE1BQVQsRUFDUjtBQUNJSCxvQkFBUSxJQUFSOztBQUVBLGdCQUFJLE9BQU9HLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLG9CQUFJTSxDQUFKO0FBQ0EscUJBQUtBLENBQUwsSUFBVU4sTUFBVixFQUNBO0FBQ0ksd0JBQUksT0FBT0gsTUFBTUcsTUFBTixDQUFhTSxDQUFiLENBQVAsS0FBMkIsV0FBL0IsRUFDSVQsTUFBTUcsTUFBTixDQUFhTSxDQUFiLElBQWtCTixPQUFPTSxDQUFQLENBQWxCO0FBQ1A7QUFDSjtBQUNKLFNBdEJZOztBQXdCYkMsZ0JBQVEsa0JBQ1I7QUFDSSxtQkFBT1gsRUFBRSxNQUFGLEVBQVVZLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBUDtBQUNILFNBM0JZOztBQTZCYkMsY0FBTSxnQkFDTjtBQUNJYixjQUFFLE1BQUYsRUFBVWMsV0FBVixDQUFzQixXQUF0Qjs7QUFFQUMsdUJBQVcsWUFBVTtBQUNqQmYsa0JBQUUsTUFBRixFQUFVYyxXQUFWLENBQXNCLGNBQXRCO0FBQ0gsYUFGRCxFQUVHLEVBRkg7O0FBSUFkLGNBQUUsS0FBS0ksTUFBTCxDQUFZSSxPQUFkLEVBQXVCUSxHQUF2QixDQUEyQjtBQUN2Qiw4QkFBYztBQURTLGFBQTNCO0FBR0gsU0F4Q1k7O0FBMENiQyxnQkFBUSxrQkFDUjtBQUNJLGdCQUFJakIsRUFBRSxNQUFGLEVBQVVZLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBSixFQUNBO0FBQ0lHLDJCQUFXLFlBQVU7QUFDakJmLHNCQUFFLE1BQUYsRUFBVWMsV0FBVixDQUFzQixjQUF0QjtBQUNILGlCQUZELEVBRUcsRUFGSDtBQUdILGFBTEQsTUFPQTtBQUNJQywyQkFBVyxZQUFVO0FBQ2pCZixzQkFBRSxNQUFGLEVBQVVrQixRQUFWLENBQW1CLGNBQW5CO0FBQ0gsaUJBRkQsRUFFRyxFQUZIO0FBR0g7O0FBRURsQixjQUFFLE1BQUYsRUFBVW1CLFdBQVYsQ0FBc0IsV0FBdEI7O0FBRUEsZ0JBQUlDLGFBQWEsU0FBakI7O0FBRUEsZ0JBQUksQ0FBQ3BCLEVBQUUsTUFBRixFQUFVWSxRQUFWLENBQW1CLFdBQW5CLENBQUwsRUFDQTtBQUNJUSw2QkFBYSxRQUFiO0FBQ0g7O0FBRURwQixjQUFFQyxNQUFNRyxNQUFOLENBQWFJLE9BQWYsRUFBd0JRLEdBQXhCLENBQTRCO0FBQ3hCLDhCQUFjSTtBQURVLGFBQTVCO0FBR0gsU0FyRVk7O0FBdUViQyx5QkFBaUIsMkJBQ2pCO0FBQ0lwQixvQkFBUSxJQUFSOztBQUVBLGdCQUFJQSxNQUFNRyxNQUFOLENBQWFDLFFBQWpCLEVBQ0E7QUFDSUwsa0JBQUUsTUFBRixFQUFVc0IsRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDLHdCQUFHQSxFQUFFQyxPQUFGLElBQWEsRUFBYixJQUFtQnZCLE1BQU1VLE1BQU4sRUFBdEIsRUFDQTtBQUNJViw4QkFBTWdCLE1BQU47QUFDSDtBQUNKLGlCQUxEO0FBTUg7O0FBRURqQixjQUFFLE1BQUYsRUFBVXNCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCckIsTUFBTUcsTUFBTixDQUFhRSxRQUFuQyxFQUE2QyxVQUFTaUIsQ0FBVCxFQUFXO0FBQ3BEQSxrQkFBRUUsY0FBRixHQUFtQkYsRUFBRUUsY0FBRixFQUFuQixHQUF3Q0YsRUFBRUcsV0FBRixHQUFnQixLQUF4RDtBQUNBekIsc0JBQU1nQixNQUFOO0FBQ0gsYUFIRDtBQUlILFNBekZZOztBQTJGYlUsd0JBQWdCLDBCQUNoQjtBQUNJMUIsb0JBQVEsSUFBUjs7QUFFQUQsY0FBRSxNQUFGLEVBQVVzQixFQUFWLENBQWEsT0FBYixFQUFzQnJCLE1BQU1HLE1BQU4sQ0FBYUksT0FBbkMsRUFBNEMsVUFBU2UsQ0FBVCxFQUFXO0FBQ25EdEIsc0JBQU1ZLElBQU47QUFDSCxhQUZEO0FBR0gsU0FsR1k7O0FBb0diZSxjQUFNLGNBQVN4QixNQUFULEVBQ047QUFDSSxpQkFBS0ssTUFBTCxDQUFZTCxNQUFaOztBQUVBLGlCQUFLaUIsZUFBTDtBQUNBLGlCQUFLTSxjQUFMO0FBQ0g7O0FBMUdZLEtBQWpCO0FBOEdILENBckhBLEVBcUhFRSxNQXJIRiIsImZpbGUiOiJfYXBwLnNhbmR3aWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgJC5hcHAgPSAkLmFwcCB8fCB7fTtcblxuICAgICQuYXBwLnNhbmR3aWNoID0ge1xuXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAga2V5SG9va3M6ICExLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuanMtc2FuZHdpY2gtbWVudScsXG4gICAgICAgICAgICB3cmFwcGVyOiAnLmxheW91dC13cmFwcGVyJyxcbiAgICAgICAgICAgIG92ZXJsYXk6ICcub3ZlcmxheSdcbiAgICAgICAgfSxcblxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uKGNvbmZpZylcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHg7XG4gICAgICAgICAgICAgICAgZm9yICh4IGluIGNvbmZpZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuY29uZmlnW3hdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZ1t4XSA9IGNvbmZpZ1t4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNPcGVuOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLW9wZW4nKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS12aXNpYmxlJyk7XG4gICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgICQodGhpcy5jb25maWcub3ZlcmxheSkuY3NzKHtcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS12aXNpYmxlJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygncGFnZS12aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3BhZ2Utb3BlbicpO1xuXG4gICAgICAgICAgICB2YXIgdmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utb3BlbicpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKF90aGlzLmNvbmZpZy5vdmVybGF5KS5jc3Moe1xuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogdmlzaWJpbGl0eVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2FuZHdpY2hUcmlnZ2VyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5rZXlIb29rcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PSAyNyAmJiBfdGhpcy5pc09wZW4oKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvdmVybGF5VHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5jb25maWcub3ZlcmxheSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oY29uZmlnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChjb25maWcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNhbmR3aWNoVHJpZ2dlcigpO1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VHJpZ2dlcigpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG59KShqUXVlcnkpO1xuICJdfQ==

"use strict";

function is_null(x) {
    return x == null;
}

function is_undefined(x) {
    return typeof x == 'undefined';
}

function goPage(sPage) {
    window.location.href = sPage;
}

function lockScroll(element) {
    var lockX,
        lockY,
        events = ['scroll', 'mousewheel', 'touchmove'],
        keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiaXNfbnVsbCIsIngiLCJpc191bmRlZmluZWQiLCJnb1BhZ2UiLCJzUGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvY2tTY3JvbGwiLCJlbGVtZW50IiwibG9ja1giLCJsb2NrWSIsImV2ZW50cyIsImtleXMiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJldmVudCIsInJldHVyblZhbHVlIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwia2V5Q29kZSIsImRpc2FibGVTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsImRvY3VtZW50Iiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJlbmFibGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxDQUFqQixFQUNBO0FBQ0ksV0FBT0EsS0FBSyxJQUFaO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxDQUFzQkQsQ0FBdEIsRUFDQTtBQUNJLFdBQU8sT0FBT0EsQ0FBUCxJQUFhLFdBQXBCO0FBQ0g7O0FBRUQsU0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRUMsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJILEtBQXZCO0FBQStCOztBQUV4RCxTQUFTSSxVQUFULENBQW9CQyxPQUFwQixFQUE2QjtBQUN6QixRQUFJQyxLQUFKO0FBQUEsUUFBV0MsS0FBWDtBQUFBLFFBQWtCQyxTQUFTLENBQUMsUUFBRCxFQUFXLFlBQVgsRUFBeUIsV0FBekIsQ0FBM0I7QUFBQSxRQUFrRUMsT0FBTyxFQUFDLElBQUksQ0FBTCxFQUFRLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsRUFBc0IsSUFBSSxDQUExQixFQUF6RTs7QUFFQSxhQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2QkEsWUFBSUEsS0FBS1YsT0FBT1csS0FBaEI7QUFDQSxZQUFJRCxFQUFFRCxjQUFOLEVBQ0VDLEVBQUVELGNBQUY7QUFDRkMsVUFBRUUsV0FBRixHQUFnQixLQUFoQjtBQUNIOztBQUVELGFBQVNDLDJCQUFULENBQXFDSCxDQUFyQyxFQUF3QztBQUNwQyxZQUFJRixLQUFLRSxFQUFFSSxPQUFQLENBQUosRUFBcUI7QUFDakJMLDJCQUFlQyxDQUFmO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsYUFBU0ssYUFBVCxHQUF5QjtBQUNyQixZQUFJZixPQUFPZ0IsZ0JBQVgsRUFBNkI7QUFDekJoQixtQkFBT2dCLGdCQUFQLENBQXdCLGdCQUF4QixFQUEwQ1AsY0FBMUMsRUFBMEQsS0FBMUQ7QUFDSlQsZUFBT2lCLE9BQVAsR0FBaUJSLGNBQWpCLENBSHFCLENBR1k7QUFDakNULGVBQU9rQixZQUFQLEdBQXNCQyxTQUFTRCxZQUFULEdBQXdCVCxjQUE5QyxDQUpxQixDQUl5QztBQUM5RFQsZUFBT29CLFdBQVAsR0FBc0JYLGNBQXRCLENBTHFCLENBS2lCO0FBQ3RDVSxpQkFBU0UsU0FBVCxHQUFzQlIsMkJBQXRCO0FBQ0g7O0FBRUQsYUFBU1MsWUFBVCxHQUF3QjtBQUNwQixZQUFJdEIsT0FBT3VCLG1CQUFYLEVBQ0l2QixPQUFPdUIsbUJBQVAsQ0FBMkIsZ0JBQTNCLEVBQTZDZCxjQUE3QyxFQUE2RCxLQUE3RDtBQUNKVCxlQUFPa0IsWUFBUCxHQUFzQkMsU0FBU0QsWUFBVCxHQUF3QixJQUE5QztBQUNBbEIsZUFBT2lCLE9BQVAsR0FBaUIsSUFBakI7QUFDQWpCLGVBQU9vQixXQUFQLEdBQXFCLElBQXJCO0FBQ0FELGlCQUFTRSxTQUFULEdBQXFCLElBQXJCO0FBQ0g7QUFDSiIsImZpbGUiOiJfZnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGlzX251bGwoeClcbntcbiAgICByZXR1cm4geCA9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc191bmRlZmluZWQoeClcbntcbiAgICByZXR1cm4gdHlwZW9mKHgpID09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBnb1BhZ2Uoc1BhZ2UpIHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzUGFnZTsgfVxuXG5mdW5jdGlvbiBsb2NrU2Nyb2xsKGVsZW1lbnQpIHtcbiAgICB2YXIgbG9ja1gsIGxvY2tZLCBldmVudHMgPSBbJ3Njcm9sbCcsICdtb3VzZXdoZWVsJywgJ3RvdWNobW92ZSddLCBrZXlzID0gezM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxfTtcblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG4gICAgICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgd2luZG93Lm9ud2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xuICAgICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7ICBcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDsgIFxuICAgIH1cbn0iXX0=

'use strict';

(function ($) {
    "use strict";

    var that,
        top,
        changeItem,
        scrollToAnchor,
        $target,
        $element,
        $current,
        $navigationMap,
        $navigation = $('#navigation'),
        $hasScroll = $('html, body');
    var is_mobile = $(window).width() <= 667;

    $navigationMap = $('.j-section').map(function () {
        return {
            offset: $(this).offset().top - 115,
            element: $(this)
        };
    });

    changeItem = function changeItem(scrollTop) {
        $element = null;

        $navigationMap.map(function () {
            that = $(this)[0];
            if (that.offset < scrollTop) {
                $element = that.element;
            }
        });

        if ($element !== null && $element.attr('id')) {

            $current = $navigation.find('.j-navigation[href="#' + $element.attr('id').split('-')[0] + '-section"]');

            if (!$current.hasClass('current')) {
                $navigation.find('.j-navigation.current').removeClass('current');
                $current.addClass('current');
            }
        }
    };

    scrollToAnchor = function scrollToAnchor(hash, animate) {
        hash = hash.replace('-section', '').split('?')[0];

        $target = $(hash + '-anchor');

        if ($target.length) {
            top = $target.offset().top - 95;
            is_mobile = $(window).width() <= 667;

            if (animate) {
                $hasScroll.stop().animate({ 'scrollTop': top }, 'medium', function () {
                    $navigation.removeClass('is-disabled');
                });
            } else {
                $hasScroll.scrollTop(top);
            }
        }
    };

    $('body').on('click', '.j-navigation', function (e) {
        $navigation.addClass('is-disabled');
        scrollToAnchor(this.hash, true);
    });

    setTimeout(function () {
        if (window.location.hash.length > 1) {
            $navigation.addClass('is-disabled');
            scrollToAnchor(window.location.hash, false);
        }
    }, 50);

    $(window).scroll(function () {
        changeItem($(window).scrollTop());
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJ0aGF0IiwidG9wIiwiY2hhbmdlSXRlbSIsInNjcm9sbFRvQW5jaG9yIiwiJHRhcmdldCIsIiRlbGVtZW50IiwiJGN1cnJlbnQiLCIkbmF2aWdhdGlvbk1hcCIsIiRuYXZpZ2F0aW9uIiwiJGhhc1Njcm9sbCIsImlzX21vYmlsZSIsIndpbmRvdyIsIndpZHRoIiwibWFwIiwib2Zmc2V0IiwiZWxlbWVudCIsInNjcm9sbFRvcCIsImF0dHIiLCJmaW5kIiwic3BsaXQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNoIiwiYW5pbWF0ZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJzdG9wIiwib24iLCJlIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwic2Nyb2xsIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsUUFBSUMsSUFBSjtBQUFBLFFBQVVDLEdBQVY7QUFBQSxRQUFlQyxVQUFmO0FBQUEsUUFBMkJDLGNBQTNCO0FBQUEsUUFBMkNDLE9BQTNDO0FBQUEsUUFBb0RDLFFBQXBEO0FBQUEsUUFBOERDLFFBQTlEO0FBQUEsUUFBd0VDLGNBQXhFO0FBQUEsUUFBd0ZDLGNBQWNULEVBQUUsYUFBRixDQUF0RztBQUFBLFFBQXdIVSxhQUFhVixFQUFFLFlBQUYsQ0FBckk7QUFDQSxRQUFJVyxZQUFZWCxFQUFFWSxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBckM7O0FBRUFMLHFCQUFpQlIsRUFBRSxZQUFGLEVBQWdCYyxHQUFoQixDQUFvQixZQUFVO0FBQzNDLGVBQU87QUFDSEMsb0JBQVFmLEVBQUUsSUFBRixFQUFRZSxNQUFSLEdBQWlCYixHQUFqQixHQUF1QixHQUQ1QjtBQUVIYyxxQkFBU2hCLEVBQUUsSUFBRjtBQUZOLFNBQVA7QUFJSCxLQUxnQixDQUFqQjs7QUFPQUcsaUJBQWEsb0JBQVNjLFNBQVQsRUFBb0I7QUFDN0JYLG1CQUFXLElBQVg7O0FBRUFFLHVCQUFlTSxHQUFmLENBQW1CLFlBQVU7QUFDekJiLG1CQUFPRCxFQUFFLElBQUYsRUFBUSxDQUFSLENBQVA7QUFDQSxnQkFBSUMsS0FBS2MsTUFBTCxHQUFjRSxTQUFsQixFQUE2QjtBQUN6QlgsMkJBQVdMLEtBQUtlLE9BQWhCO0FBQ0g7QUFDSixTQUxEOztBQU9BLFlBQUlWLGFBQWEsSUFBYixJQUFxQkEsU0FBU1ksSUFBVCxDQUFjLElBQWQsQ0FBekIsRUFBOEM7O0FBRTFDWCx1QkFBV0UsWUFBWVUsSUFBWixDQUFpQiwwQkFBMEJiLFNBQVNZLElBQVQsQ0FBYyxJQUFkLEVBQW9CRSxLQUFwQixDQUEwQixHQUExQixFQUErQixDQUEvQixDQUExQixHQUE4RCxZQUEvRSxDQUFYOztBQUVBLGdCQUFJLENBQUNiLFNBQVNjLFFBQVQsQ0FBa0IsU0FBbEIsQ0FBTCxFQUFtQztBQUMvQlosNEJBQVlVLElBQVosQ0FBaUIsdUJBQWpCLEVBQTBDRyxXQUExQyxDQUFzRCxTQUF0RDtBQUNBZix5QkFBU2dCLFFBQVQsQ0FBa0IsU0FBbEI7QUFDSDtBQUNKO0FBQ0osS0FuQkQ7O0FBcUJBbkIscUJBQWlCLHdCQUFTb0IsSUFBVCxFQUFlQyxPQUFmLEVBQXdCO0FBQ3JDRCxlQUFPQSxLQUFLRSxPQUFMLENBQWEsVUFBYixFQUF5QixFQUF6QixFQUE2Qk4sS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsQ0FBUDs7QUFFQWYsa0JBQVVMLEVBQUV3QixPQUFPLFNBQVQsQ0FBVjs7QUFFQSxZQUFJbkIsUUFBUXNCLE1BQVosRUFDQTtBQUNJekIsa0JBQU1HLFFBQVFVLE1BQVIsR0FBaUJiLEdBQWpCLEdBQXVCLEVBQTdCO0FBQ0FTLHdCQUFZWCxFQUFFWSxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBakM7O0FBRUEsZ0JBQUlZLE9BQUosRUFBYTtBQUNUZiwyQkFBV2tCLElBQVgsR0FBa0JILE9BQWxCLENBQTBCLEVBQUUsYUFBYXZCLEdBQWYsRUFBMUIsRUFBZ0QsUUFBaEQsRUFBMEQsWUFBVTtBQUNoRU8sZ0NBQVlhLFdBQVosQ0FBd0IsYUFBeEI7QUFDSCxpQkFGRDtBQUdILGFBSkQsTUFLSztBQUNEWiwyQkFBV08sU0FBWCxDQUFxQmYsR0FBckI7QUFDSDtBQUNKO0FBQ0osS0FuQkQ7O0FBcUJBRixNQUFFLE1BQUYsRUFBVTZCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGVBQXRCLEVBQXVDLFVBQVNDLENBQVQsRUFBWTtBQUMvQ3JCLG9CQUFZYyxRQUFaLENBQXFCLGFBQXJCO0FBQ0FuQix1QkFBZSxLQUFLb0IsSUFBcEIsRUFBMEIsSUFBMUI7QUFDSCxLQUhEOztBQUtBTyxlQUFXLFlBQVU7QUFDakIsWUFBSW5CLE9BQU9vQixRQUFQLENBQWdCUixJQUFoQixDQUFxQkcsTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDakNsQix3QkFBWWMsUUFBWixDQUFxQixhQUFyQjtBQUNBbkIsMkJBQWVRLE9BQU9vQixRQUFQLENBQWdCUixJQUEvQixFQUFxQyxLQUFyQztBQUNIO0FBQ0osS0FMRCxFQUtHLEVBTEg7O0FBT0F4QixNQUFFWSxNQUFGLEVBQVVxQixNQUFWLENBQWlCLFlBQVU7QUFDdkI5QixtQkFBV0gsRUFBRVksTUFBRixFQUFVSyxTQUFWLEVBQVg7QUFDSCxLQUZEO0FBR0gsQ0F0RUQsRUFzRUdpQixNQXRFSCIsImZpbGUiOiJfbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgdGhhdCwgdG9wLCBjaGFuZ2VJdGVtLCBzY3JvbGxUb0FuY2hvciwgJHRhcmdldCwgJGVsZW1lbnQsICRjdXJyZW50LCAkbmF2aWdhdGlvbk1hcCwgJG5hdmlnYXRpb24gPSAkKCcjbmF2aWdhdGlvbicpLCAkaGFzU2Nyb2xsID0gJCgnaHRtbCwgYm9keScpO1xuICAgIHZhciBpc19tb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG5cbiAgICAkbmF2aWdhdGlvbk1hcCA9ICQoJy5qLXNlY3Rpb24nKS5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldDogJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAxMTUsXG4gICAgICAgICAgICBlbGVtZW50OiAkKHRoaXMpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYW5nZUl0ZW0gPSBmdW5jdGlvbihzY3JvbGxUb3ApIHtcbiAgICAgICAgJGVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICRuYXZpZ2F0aW9uTWFwLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhhdCA9ICQodGhpcylbMF07XG4gICAgICAgICAgICBpZiAodGhhdC5vZmZzZXQgPCBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudCA9IHRoYXQuZWxlbWVudDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCRlbGVtZW50ICE9PSBudWxsICYmICRlbGVtZW50LmF0dHIoJ2lkJykpIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAkY3VycmVudCA9ICRuYXZpZ2F0aW9uLmZpbmQoJy5qLW5hdmlnYXRpb25baHJlZj1cIiMnICsgJGVsZW1lbnQuYXR0cignaWQnKS5zcGxpdCgnLScpWzBdICsgJy1zZWN0aW9uXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghJGN1cnJlbnQuaGFzQ2xhc3MoJ2N1cnJlbnQnKSkge1xuICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLmZpbmQoJy5qLW5hdmlnYXRpb24uY3VycmVudCcpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQW5jaG9yID0gZnVuY3Rpb24oaGFzaCwgYW5pbWF0ZSkge1xuICAgICAgICBoYXNoID0gaGFzaC5yZXBsYWNlKCctc2VjdGlvbicsICcnKS5zcGxpdCgnPycpWzBdO1xuXG4gICAgICAgICR0YXJnZXQgPSAkKGhhc2ggKyAnLWFuY2hvcicpO1xuXG4gICAgICAgIGlmICgkdGFyZ2V0Lmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdG9wID0gJHRhcmdldC5vZmZzZXQoKS50b3AgLSA5NTtcbiAgICAgICAgICAgIGlzX21vYmlsZSA9ICQod2luZG93KS53aWR0aCgpIDw9IDY2NztcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICAkaGFzU2Nyb2xsLnN0b3AoKS5hbmltYXRlKHsgJ3Njcm9sbFRvcCc6IHRvcCB9LCAnbWVkaXVtJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmlnYXRpb24ucmVtb3ZlQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkaGFzU2Nyb2xsLnNjcm9sbFRvcCh0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1uYXZpZ2F0aW9uJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkbmF2aWdhdGlvbi5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgc2Nyb2xsVG9BbmNob3IodGhpcy5oYXNoLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICRuYXZpZ2F0aW9uLmFkZENsYXNzKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgc2Nyb2xsVG9BbmNob3Iod2luZG93LmxvY2F0aW9uLmhhc2gsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIDUwKTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlSXRlbSgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpXG4gICAgfSk7XG59KShqUXVlcnkpOyJdfQ==

'use strict';

function yandexMap() {
    ymaps.ready(function () {
        var YMap,
            myPlacemark,
            is_mobile = $(window).width() <= 667;

        YMap = new ymaps.Map('location-map', {
            center: [45.021188, 38.926667],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        YMap.behaviors.disable('multiTouch');
        YMap.behaviors.disable('scrollZoom');
        YMap.controls.get('zoomControl').options.set('size', 'small');
        YMap.controls.get('zoomControl').options.set('position', { right: 10, top: 50 });

        if (is_mobile) {
            YMap.behaviors.disable('drag');
        }

        myPlacemark = new ymaps.Placemark(YMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: '/images/vinograd-logo.png',
            iconImageSize: [141, 141],
            iconImageOffset: [-71, -71]
        });

        YMap.geoObjects.add(myPlacemark);
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl95YW5kZXgubWFwLmpzIl0sIm5hbWVzIjpbInlhbmRleE1hcCIsInltYXBzIiwicmVhZHkiLCJZTWFwIiwibXlQbGFjZW1hcmsiLCJpc19tb2JpbGUiLCIkIiwid2luZG93Iiwid2lkdGgiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIiwiZ2V0Iiwib3B0aW9ucyIsInNldCIsInJpZ2h0IiwidG9wIiwiUGxhY2VtYXJrIiwiZ2V0Q2VudGVyIiwiaWNvbkxheW91dCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCQyxVQUFNQyxLQUFOLENBQVksWUFBWTtBQUNwQixZQUFJQyxJQUFKO0FBQUEsWUFBVUMsV0FBVjtBQUFBLFlBQXVCQyxZQUFZQyxFQUFFQyxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBeEQ7O0FBRUFMLGVBQU8sSUFBSUYsTUFBTVEsR0FBVixDQUFjLGNBQWQsRUFBOEI7QUFDakNDLG9CQUFRLENBQUMsU0FBRCxFQUFXLFNBQVgsQ0FEeUI7QUFFakNDLGtCQUFNLEVBRjJCO0FBR2pDQyxzQkFBVSxDQUFDLGFBQUQsRUFBZ0IsbUJBQWhCO0FBSHVCLFNBQTlCLENBQVA7O0FBTUFULGFBQUtVLFNBQUwsQ0FBZUMsT0FBZixDQUF1QixZQUF2QjtBQUNBWCxhQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsWUFBdkI7QUFDQVgsYUFBS1MsUUFBTCxDQUFjRyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDQyxPQUFqQyxDQUF5Q0MsR0FBekMsQ0FBNkMsTUFBN0MsRUFBcUQsT0FBckQ7QUFDQWQsYUFBS1MsUUFBTCxDQUFjRyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDQyxPQUFqQyxDQUF5Q0MsR0FBekMsQ0FBNkMsVUFBN0MsRUFBeUQsRUFBRUMsT0FBTyxFQUFULEVBQWFDLEtBQUssRUFBbEIsRUFBekQ7O0FBRUEsWUFBSWQsU0FBSixFQUFlO0FBQ1hGLGlCQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkI7QUFDSDs7QUFFRFYsc0JBQWMsSUFBSUgsTUFBTW1CLFNBQVYsQ0FBb0JqQixLQUFLa0IsU0FBTCxFQUFwQixFQUFzQyxFQUF0QyxFQUEwQztBQUNwREMsd0JBQVksZUFEd0M7QUFFcERDLDJCQUFlLDJCQUZxQztBQUdwREMsMkJBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUhxQztBQUlwREMsNkJBQWlCLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQO0FBSm1DLFNBQTFDLENBQWQ7O0FBT0F0QixhQUFLdUIsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0J2QixXQUFwQjtBQUNILEtBMUJEO0FBMkJIIiwiZmlsZSI6Il95YW5kZXgubWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24geWFuZGV4TWFwKCkge1xuICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIFlNYXAsIG15UGxhY2VtYXJrLCBpc19tb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG4gICAgICAgIFxuICAgICAgICBZTWFwID0gbmV3IHltYXBzLk1hcCgnbG9jYXRpb24tbWFwJywge1xuICAgICAgICAgICAgY2VudGVyOiBbNDUuMDIxMTg4LDM4LjkyNjY2N10sXG4gICAgICAgICAgICB6b29tOiAxNixcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgWU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnbXVsdGlUb3VjaCcpO1xuICAgICAgICBZTWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgIFlNYXAuY29udHJvbHMuZ2V0KCd6b29tQ29udHJvbCcpLm9wdGlvbnMuc2V0KCdzaXplJywgJ3NtYWxsJyk7XG4gICAgICAgIFlNYXAuY29udHJvbHMuZ2V0KCd6b29tQ29udHJvbCcpLm9wdGlvbnMuc2V0KCdwb3NpdGlvbicsIHsgcmlnaHQ6IDEwLCB0b3A6IDUwIH0pO1xuXG4gICAgICAgIGlmIChpc19tb2JpbGUpIHtcbiAgICAgICAgICAgIFlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ2RyYWcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhZTWFwLmdldENlbnRlcigpLCB7fSwge1xuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy9pbWFnZXMvdmlub2dyYWQtbG9nby5wbmcnLFxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzE0MSwgMTQxXSxcbiAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy03MSwgLTcxXVxuICAgICAgICB9KTtcblxuICAgICAgICBZTWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICB9KTtcbn0iXX0=

"use strict";

$(document).ready(function () {
    $.app.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsTUFBRUcsR0FBRixDQUFNQyxJQUFOO0FBQ0gsQ0FGRCIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJC5hcHAuaW5pdCgpO1xufSk7Il19
