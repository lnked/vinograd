let app = app || {};

((body => {
    "use strict";

    app.documents = {

        trigger: function()
        {
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

        init: function()
        {
            this.trigger();
        }

    };

}))(document.body);