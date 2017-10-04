let app = app || {};

((body => {
    "use strict";

    app.scroll = {
        init() {
            SmoothScroll({
                stepSize: 50
            });
        }
    };

}))(document.body);
