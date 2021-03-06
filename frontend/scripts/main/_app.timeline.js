let app = app || {};

((body => {
    "use strict";

    app.timeline = {
        data: {},

        filter: null,

        years: null,

        months: null,

        _initCarousel: function() {
            var width = $(window).width(),
                slides = $('#timeline-carousel').find('.slick-slide').length;

            if (
                (width > 768 && slides >= 4) ||
                (width > 568 && slides >= 3) ||
                (width > 375 && slides >= 2) ||
                (width < 375 && slides >= 1)
            ) {

                $('#timeline-carousel').slick({
                    lazyLoad: 'ondemand',
                    dots: false,
                    infinite: false,
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
            }
        },

        _currentYear: function()
        {
            return parseInt(this.years.find('.is-current').data('value'));
        },

        _currentMonth: function()
        {
            return parseInt(this.months.find('.is-current').data('value'));
        },

        _handle: function()
        {
            this.data.current = this._currentYear();
            this.data.months = [];

            this.months.find('.j-timeline-months-item').each((key, item) => {
                var years = [], strings = $(item).data('if') + '';

                if (typeof strings !== 'undefined' && strings !== '') {
                    years = strings.split(',');

                    for (var x in years) {
                        years[x] = parseInt(years[x]);
                    }
                }

                this.data.months.push({
                    item: item,
                    year: years
                });
            });
        },

        _reinitCarousel: function()
        {
            var _self_ = this,
                year = this._currentYear(),
                month = this._currentMonth();

            if ($('#timeline-carousel').hasClass('slick-initialized')) {
                $('#timeline-carousel').slick('unslick');
            }

            $('#timeline-carousel').html('');

            var count = $('#timeline-cache').find('.carousel__item.is-year-'+ year +'.is-month-'+month).length;

            $('#timeline-cache').find('.carousel__item.is-year-'+ year +'.is-month-'+month).each(function(k, item) {

                const $item = $(this).clone();

                $('#timeline-carousel').append($item);

                if ((k+1) == count) {
                    setTimeout(function() {
                        _self_._initCarousel();
                    }, 50);
                }
            });

            setTimeout(function() {
                // $.app.initBlock('.j-timeline-slider');
                app.gallery.fancybox('.j-timeline-slider');
            }, 300);
        },

        _changeFirstMonth: function()
        {
            this.months.find('.j-timeline-months-item.is-active:first').trigger('click');
        },

        _match: function()
        {
            var _self_ = this;

            this._handle();

            this.months.find('.j-timeline-months-item').removeClass('is-active');

            $.each(this.data.months, (k, item) => {
                if (item.year.indexOf(this.data.current) >= 0) {
                    $(item.item).addClass('is-active');
                }
            });

            this.filter.addClass('is-active');
        },

        _events: function()
        {
            var _self_ = this;

            this.years.find('.j-timeline-years-item').on('click', function(e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-years').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._changeFirstMonth();
                    _self_._reinitCarousel();
                }
            });

            this.months.find('.j-timeline-months-item').on('click', function(e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-months').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._reinitCarousel();
                }
            });
        },

        init: function()
        {
            var _self_ = this;

            this.filter = $('#timeline-filter');
            this.years = this.filter.find('.j-timeline-years');
            this.months = this.filter.find('.j-timeline-months');

            this._match();
            this._events();

            this._reinitCarousel();
        }

    };

}))(document.body);