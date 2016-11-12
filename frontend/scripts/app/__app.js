;( function( $ ) {
    "use strict";

    $.app = {

        initSandwich: function() {
            $.app.sandwich.init({
                keyHooks: !0,
                selector: '.js-sandwich-menu',
                wrapper: '.layout-wrapper',
                overlay: '#menu-overlay'
            });
        },

        initMask: function() {
            $(".j-phone-mask").mask("+7 (999) 999-99-99");
        },

        initPopup: function()
        {
            $.popup.init('.js-open-popup', {
                cssPosition: false,
                wrapper: '.layout-wrapper'
            });
        },

        initDocuments: function() {
            $('body').on('click', '.j-load-documents', function(e) {
                var motion = $(this).data('motion');

                if (motion == 'show') {
                    $(this).data('motion', 'hide');
                    $('#documents').find('.is-motion').removeClass('is-hidden');
                }
                else {
                    $(this).data('motion', 'show');

                    $('html, body').stop().animate({ 'scrollTop': $('#documents-anchor').offset().top }, 'fast');

                    setTimeout(function(){
                        $('#documents').find('.is-motion').addClass('is-hidden');
                    }, 200);
                }

                $(this).closest('.page-button').toggleClass('_down').toggleClass('_up');
            });
        },

        initBlock: function (selector) {
            var options = {
                type: 'image',
                delegate: 'a.zoom',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                verticalFit: false,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                }
            };

            if ($(window).width() >= 768) {
                options.gallery = {
                    enabled:true
                };
            }

            $(selector).magnificPopup(options);
        },

        initZoom: function () {
            this.initBlock('.j-gallery');
            this.initBlock('.j-timeline');
            this.initBlock('.j-documents');
            this.initBlock('.j-floors');
            this.initBlock('.j-plans');
        },

        initTabs: function() {
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

        initCarousel: function() {

            $('.j-carousel').slick({
                dots: false,
                infinite: true,
                draggable: true,
                speed: 259,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="carousel__navigation _prev slick-prev"></button>',
                nextArrow: '<button type="button" class="carousel__navigation _next slick-next"></button>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            fade: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        },

        initSlider: function() {

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

        initSwitcher: function() {
            var $slider = $('#slider'), timeout = 6000, intervalID = null;

            $('body').on('change', '.j-switcher', function(){
                var daytime = $(this).val();
                $slider.find('.j-slider-item._active').addClass('_last-active');

                $slider.find('.j-slider-item._active').removeClass('_active');
                $slider.find('.j-slider-item').filter('[data-daytime="' + daytime + '"]').addClass('_active');

                setTimeout(function(){
                    $slider.find('.j-slider-item._last-active').removeClass('_last-active');
                }, 1000);
            });

            function startInterval() {
                clearInterval(intervalID);
                return setInterval(function(){
                    $('#slider-next').trigger('click');
                }, timeout);
            }

            function stopInterval(interval) {
                clearInterval(interval);
            }

            intervalID = startInterval();

            $('body').on('click', '.j-slider-navigation', function(){
                var direction = $(this).data('direction');

                stopInterval(intervalID);

                var $group = $slider.find('.j-slider-item._active'),
                    _count = $group.find('.j-slider-image').length - 1,
                    _index = $group.find('.j-slider-image._active').index(),
                    _next = 0;

                if (direction == 'prev') {
                    _next = _index - 1;
                }
                else if (direction == 'next') {
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

                setTimeout(function(){
                    $group.find('.j-slider-image._last-active').removeClass('_last-active');
                    intervalID = startInterval();
                }, 1000);
            });
        },

        initPlans: function() {
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

        initLocation: function() {
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

        initClose: function() {
            $('body').click(function(){
                if ($('#banner').length) {
                    var $banner = $('#banner');

                    if ($banner.hasClass('show')) {
                        $banner.removeClass('animate');

                        setTimeout(function(){
                            $banner.removeClass('show');
                        }, 300);
                    }
                }
            });
        },

        initBanner: function(delay) {
            var _this = this;

            if ($('#banner').length) {
                var $banner = $('#banner');
                
                if (!$.cookie('hideModal')) {
                    setTimeout(function(){
                        $banner.addClass('show');
                        
                        setTimeout(function(){
                            $banner.addClass('animate');
                        }, 10);

                        _this.initClose();

                    }, delay * 1000)
                }
                
                $.cookie('hideModal', true, {
                    expires: 7,
                    path: '/'
                });
            }
        },

        initPorch: function() {
            var element = '', image = '';

            $('body').on('click', '.j-porch-tab', function(e){
                e.preventDefault();
                
                if (!$(this).hasClass('_current')) {
                    var $porch = $(this).closest('.j-porch'), tab = $(this).data('tab');

                    $porch.find('._current').removeClass('_current');
                    $porch.find('.j-porch-item._active').removeClass('_active');

                    $porch.find('#porch-tab-' + tab).addClass('_active');
                    $(this).addClass('_current');
                }
                
                return !1;
            });

            // Area
            $('.j-area-item').on('mouseenter', function(e){
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).addClass('_show');
                }
            });

            $('.j-area-item').on('mouseleave', function(e){
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).removeClass('_show');
                }
            });

            $('.j-area-item').on('click', function(e){
                e.preventDefault();

                image = $(this).attr('href');

                // $.magnificPopup.open({
                //     closeOnContentClick: true,
                //     closeBtnInside: true,
                //     fixedContentPos: true,
                //     items: {
                //         src: '<div class="white-popup"><figure><img class="mfp-img" alt="" src="' + image + '" style="max-height: 500px;"></figure></div>',
                //         type: 'inline'
                //     }
                // });

                return !1;
            });
        },

        initGoals: function() {
            $('body').on('click', '.j-yandex-goal', function() {
                if ($(this).data('target-name')) {
                    $.each($(this).data('target-name').split(' '), function(key, value) {
                        yaCounter38867515.reachGoal($.trim(value));
                    });
                }
            });
        },

        initShow: function() {
            $('body').on('click', '.j-show', function(e) {
                e.preventDefault();

                var href = $(this).attr('href');

                if ($(href).length) {
                    $(href).addClass('is-show');
                }
                
                $(this).hide();

                return false;
            });
        },

        initFancybox: function() {
            $('.j-pinch-trigger').fancybox({ transition: "none",autoPlay: false, helpers : {buttons  : {}, title: {type: 'inside'}}});

            var $list, list = [ '.j-gallery', '.j-timeline', '.j-documents', '.j-floors', '.j-plans' ], random = '';

            for (var i = list.length - 1; i >= 0; i--) {
                random = Math.random();
                $list = $(list[i]).find('.zoom');
                $list.prop('rel', 'gallery-' + random);

                $list.fancybox({ rel: 'gallery-' + random, transition: "none", slideshow: true, width: "650px", height: "650px" });
            }
        },

        init: function() {
            // this.pinchzoom.init();
            this.initGoals();
            this.initShow();
            this.initPorch();
            this.initTabs();
            // this.initZoom();
            this.initPlans();
            this.initPopup();
            this.initSlider();
            this.initFancybox();
            this.initSandwich();
            this.initSwitcher();
            this.initLocation();
            this.initCarousel();
            this.initDocuments();
        }
    };

})( jQuery );