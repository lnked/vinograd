let app = app || {};

((body => {
    "use strict";

    app.slider = {

        trigger: function()
        {
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

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);