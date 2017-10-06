let app = app || {};

((body => {
    "use strict";

    app.scroll = {
        init() {
            $('html').scrollWithEase({
                "stepSize": 200,
                "animationTime": 500
            });
        }
    };

}))(document.body);
