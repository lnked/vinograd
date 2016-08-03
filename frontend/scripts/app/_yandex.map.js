function yandexMap() {
    ymaps.ready(function () {
        var YMap, myPlacemark;
        
        YMap = new ymaps.Map('location-map', {
            center: [45.030203, 38.940457],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        YMap.behaviors.disable('scrollZoom');
        YMap.controls.get('zoomControl').options.set('size', 'small');
        YMap.controls.get('zoomControl').options.set('position', { right: 10, top: 50 });

        myPlacemark = new ymaps.Placemark(YMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: '/images/vinograd-logo.png',
            iconImageSize: [141, 141],
            iconImageOffset: [-71, -71]
        });

        YMap.geoObjects.add(myPlacemark);
    });
}