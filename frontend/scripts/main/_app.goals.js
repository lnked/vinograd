let app = app || {};

((body => {
    "use strict";

    app.goals = {

        trigger: function()
        {
            $('body').on('click', '#roistat-lh-submit', function(e) {
                yaCounter38867515.reachGoal('Callback');
                ga('send', 'event', 'forma', 'Callback');
            });

            $('body').on('click', '.j-goal', function() {
                let target = false;

                if ($(this).data('target-name'))
                {
                    target = $(this).data('target-name');
                }

                if ($(this).data('ga-name'))
                {
                    target = $(this).data('ga-name');
                }

                if (target)
                {
                    $.each(target.split(' '), function(key, value) {
                        ga('send', 'event', 'forma', $.trim(value));
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
