let app = app || {};

((body => {
    "use strict";

    app.yandex = {

        drow: function()
        {
            ymaps.ready(function () {
                var YMap, myPlacemark, is_mobile = $(window).width() <= 667;
                
                YMap = new ymaps.Map('location-map', {
                    center: [45.021188,38.926667],
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

    };

}))(document.body);
