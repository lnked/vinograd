let app = app || {};

((body => {
    "use strict";

    app.goals = {

        trigger: function()
        {
            $('body').on('click', '.j-yandex-goal', function() {
                if ($(this).data('target-name')) {
                    $.each($(this).data('target-name').split(' '), function(key, value) {
                        yaCounter38867515.reachGoal($.trim(value));
                    });
                }
            });
        },

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);
