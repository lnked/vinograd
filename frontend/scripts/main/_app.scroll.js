let app = app || {};

((body => {
    "use strict";

    app.scroll = {
        init() {
            $('html').scrollWithEase({
                "stepSize": 100,
                "animationTime": 1000
            });
        }
    };

}))(document.body);
