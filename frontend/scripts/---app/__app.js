;( function( $ ) {
    "use strict";

    $.app = {

        initBlock: function (selector) {
            // const startWindowScroll = 0;

            // var options = {
            //         type: 'image',
            //         preloader: true,
            //         delegate: 'a.zoom',
            //         closeOnContentClick: true,
            //         closeBtnInside: true,
            //         fixedContentPos: true,
            //         fixedBgPos: true,
            //         verticalFit: false,
            //         image: {
            //             verticalFit: true
            //         },
            //         zoom: {
            //             enabled: false
            //         }
            // };
 
            // if ($(window).width() >= 768) {
            //     options.gallery = {
            //         enabled: true
            //     };
            // }

            // $(selector).magnificPopup(options);
        },

        initZoomDefault: function () {
            $('.zoom-image').magnificPopup({type:'image'});
        },

        initZoom: function () {
            // this.initBlock('.j-gallery');
            // this.initBlock('.j-timeline-slider');
            // this.initBlock('.j-documents');
            // this.initBlock('.j-floors');
            // this.initBlock('.j-plans');
        },

        initLocation: function() {

        },

        initBanner: function(delay) {
            
        },

        initPorch: function() {
            var element = '', image = '';

            $('body').on('click', '.j-porch-tab', function(e){
                e.preventDefault();
                
                if (!$(this).hasClass('_current')) {
                    var $porch = $(this).closest('.j-porch'), tab = $(this).data('tab');

                    $porch.find('._current').removeClass('_current');
                    $porch.find('.j-porch-item._active').removeClass('_active');

                    $porch.find('#porch-tab-' + tab).addClass('_active');
                    $(this).addClass('_current');
                }
                
                return !1;
            });

            // Area
            $('.j-area-item').on('mouseenter', function(e){
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).addClass('_show');
                }
            });

            $('.j-area-item').on('mouseleave', function(e){
                element = $(this).data('element');
                if ($(element).length) {
                    $(element).removeClass('_show');
                }
            });

            $('.j-area-item').on('click', function(e){
                e.preventDefault();

                image = $(this).attr('href');

                return !1;
            });
        },


        init: function() {
            $.app.layzr.init();
            this.timeline.init();
            // this.banner.init();
            this.initGoals();
            this.initShow();
            this.initPorch();
            this.initTabs();
            this.initZoomDefault();
            this.initBanner(4);
            this.initPlans();
            this.initPopup();
            this.initSlider();
            this.initFancybox();
            this.initSandwich();
            this.initSwitcher();
            this.initLocation();
            this.initDocuments();
        }
    };

})( jQuery );