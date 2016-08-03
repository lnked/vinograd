(function(body){
    "use strict";

    var app = {

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
            $(selector).magnificPopup({
                type: 'image',
                delegate: 'a.zoom',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled:true
                }
            });
        },

        initZoom: function () {

            this.initBlock('.j-gallery');
            this.initBlock('.j-timeline');
            this.initBlock('.j-documents');
            
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
                }
                
                return !1;
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
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
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
            var $slider = $('#slider'), timeout = 6000;

            $('body').on('change', '.j-switcher', function(){
                var daytime = $(this).val();
                $slider.find('.j-slider-item._active').addClass('_last-active');

                $slider.find('.j-slider-item._active').removeClass('_active');
                $slider.find('.j-slider-item').filter('[data-daytime="' + daytime + '"]').addClass('_active');

                setTimeout(function(){
                    $slider.find('.j-slider-item._last-active').removeClass('_last-active');
                }, 1000);
            });

            $('body').on('click', '.j-slider-navigation', function(){
                var direction = $(this).data('direction');

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
                }, 1000);
            });

            setInterval(function(){
                $('#slider-next').trigger('click');
            }, timeout);
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

        init: function() {
            this.initMask();
            this.initTabs();
            this.initZoom();
            this.initPlans();
            this.initPopup();
            this.initSlider();
            this.initSwitcher();
            this.initCarousel();
            this.initDocuments();
        }
    };

    app.init();
})(document.body);