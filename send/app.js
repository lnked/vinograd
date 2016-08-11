// Find, Replace, Case
// i.e "Test to see if this works? (Yes|No)".replaceAll('(Yes|No)', 'Yes!');
// i.e.2 "Test to see if this works? (Yes|No)".replaceAll('(yes|no)', 'Yes!', true);
String.prototype.replaceAll = function(_f, _r, _c){ 

  var o = this.toString();
  var r = '';
  var s = o;
  var b = 0;
  var e = -1;
  if(_c){ _f = _f.toLowerCase(); s = o.toLowerCase(); }

  while((e=s.indexOf(_f)) > -1)
  {
    r += o.substring(b, b+e) + _r;
    s = s.substring(e+_f.length, s.length);
    b += e+_f.length;
  }

  // Add Leftover
  if(s.length>0){ r+=o.substring(o.length-s.length, o.length); }

  // Return New String
  return r;
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      if ( this === undefined || this === null ) {
        throw new TypeError( '"this" is null or not defined' );
      }

      var length = this.length >>> 0; // Hack to convert object.length to a UInt32

      fromIndex = +fromIndex || 0;

      if (Math.abs(fromIndex) === Infinity) {
        fromIndex = 0;
      }

      if (fromIndex < 0) {
        fromIndex += length;
        if (fromIndex < 0) {
          fromIndex = 0;
        }
      }

      for (;fromIndex < length; fromIndex++) {
        if (this[fromIndex] === searchElement) {
          return fromIndex;
        }
      }

      return -1;
    };
}

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
;(function(){
    var cache = {};

    this.tmpl = function tmpl(str, data){
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                    // Introduce the data as local variables using with(){}
                    "with(obj){p.push('" +

                    // Convert the template into pure JavaScript
                    str
                        .replace(/[\r\t\n]/g, " ")
                        .split("<%").join("\t")
                        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                        .replace(/\t=(.*?)%>/g, "',$1,'")
                        .split("\t").join("');")
                        .split("%>").join("p.push('")
                        .split("\r").join("\\'")
                    + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
    };
})();

(function($) {
    $.animateScroll = {
        options:
        {
            menu: '#navigation',
            link: 'a.link',
            current: 'current',
            lastId: '',
            menuHeight: 0,
            scrollItems: [],
            menuItems: [],
            menuPosition: 0
        },
        reload: function( page )
        {
            var History = window.History, State = History.getState() ;
            History.Adapter.bind( window, 'statechange', function(){ var State = History.getState(); });
            History.pushState({ state: 2, rand: Math.random() }, ( $('#'+page).data('title') || document.title ), ( window.location.hostname ? page : '#' + page ) );
        },
        change: function( scrollTop )
        {
            scrollTop += $.animateScroll.options.menuHeight ;

            var cur = $.animateScroll.options.scrollItems.map(function(){
                if ($(this).offset().top < scrollTop)
                return this;
            });
            
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";

            if ($.animateScroll.options.lastId !== id)
            {
                $.animateScroll.options.lastId = id;
                $.animateScroll.options.menuItems.parent().removeClass("current").end().filter("[href=#"+id+"]").parent().addClass("current");
                $.animateScroll.reload( id );
            }
        },
        init: function( options )
        {
            $menu = $($.animateScroll.options.menu);

            $.animateScroll.options.menuHeight = $menu.outerHeight() ;
            $.animateScroll.options.menuItems = $menu.find($.animateScroll.options.link) ;
            $.animateScroll.options.menuPosition = $menu.position().top ;
            $.animateScroll.options.scrollItems = $.animateScroll.options.menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

            $menu.find('a[href*=#]:not([href=#])').on('click', function(e) {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname)
                {
                    e.preventDefault();
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    
                    if (target.length)
                    {
                        $('html, body').stop().animate({ scrollTop: target.offset().top }, 'fast');
                        return false;
                    }
                }
            });
    
            $.animateScroll.change( $(document).scrollTop() );

            $(window).scroll(function(){
                $.animateScroll.change( $(document).scrollTop() );
            });
        }
    }

    $.animateScroll.init();
})(jQuery);

(function ($) {
    $.support.placeholder = ('placeholder' in document.createElement('input'));
})(jQuery);

//fix for IE7 and IE8
$(function () {
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function () {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function () {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function () {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
});

/**
*
*  AJAX IFRAME METHOD (AIM)
*  http://www.webtoolkit.info/
*
**/
var AIM = {
    frame : function(c) {
        var n = 'f' + Math.floor(Math.random() * 99999);
        var d = document.createElement('DIV');
        d.innerHTML = '<iframe style="display:none" src="about:blank" id="'+n+'" name="'+n+'" onload="AIM.loaded(\''+n+'\')"></iframe>';
        document.body.appendChild(d);

        var i = document.getElementById(n);
        if (c && typeof(c.onComplete) == 'function') {
            i.onComplete = c.onComplete;
        }
        return n;
    },

    form : function(f, name) {
        f.setAttribute('target', name);
    },

    submit : function(f, c) {
        AIM.form(f, AIM.frame(c));
        if (c && typeof(c.onStart) == 'function') {
            return c.onStart();
        } else {
            return true;
        }
    },

    loaded : function(id) {
        var i = document.getElementById(id);
        if (i.contentDocument) {
            var d = i.contentDocument;
        } else if (i.contentWindow) {
            var d = i.contentWindow.document;
        } else {
            var d = window.frames[id].document;
        }
        if (d.location.href == "about:blank") {
            return;
        }

        if (typeof(i.onComplete) == 'function') {
            var result = d.body.innerHTML.replace(/<\/?pre*>/ig, '');
            var response = eval('('+result+')');
            i.onComplete( response );
        }
    }
};

(function($) {
    $.app = {
        run: function()
        {
            Array.prototype.max = function() { return Math.max.apply(null, this); };
            Array.prototype.min = function() { return Math.min.apply(null, this); };

            var wh = $(window).height();

            $('.wrap-content').find('.content-trigger').each(function(){
                if( $(this).height() < wh )
                {
                    $(this).closest('.layout').css({
                        'margin-top': Math.ceil( (wh-$(this).height()) / 2 ),
                        'height': 'auto'
                    });
                }
            });

            $('.wrap-content').css({
                'min-height': wh
            });

            $('body').on('click', '.captcha-update', function(e){
                e.preventDefault();
                $.app.module.updateImage($(this).attr('href'));
                return false;
            });

            $('body').on('click', '.form-close', function(e){
                e.preventDefault();
                var item = $(this).attr('href');
                $(item).fadeOut(200);
                return false;
            });

            $('body').on('click', '.map-order', function(e){
                e.preventDefault();
                var item = $(this).attr('href');
                $(item).fadeToggle(200);
                return false;
            });
            
            $.app.module.fixed();
            $.app.custom_placeholder();
            $.app.module.form_ajax();
            $.app.module.resize(function(){
                $('.wrap-content').css({
                    'min-height': $(window).height()
                });
            }, 500);
        },
        module: {
            resize: function( callback, time )
            {
                $(window).resize(function(e){
                    window.resizeEvt;
                    $(window).resize(function(){
                    clearTimeout(window.resizeEvt);
                        window.resizeEvt = setTimeout(function(){
                            callback.apply();
                        }, time);
                    });
                });
            },
            fixed: function()
            {
                if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l') 
                {
                    window.ontouchstart = function () 
                    {
                        $("#navigation").css("display", "none");
                    }

                    $(window).scroll(function(){
                        var iPadPosition = window.pageYOffset ;
                        $("#navigation").css("position", "absolute");
                        $("#navigation").css("top", iPadPosition);
                        $("#navigation").css("display", "block");
                    });
                }
            },
            googleMap: function()
            {
                var mapOptions = {
                    zoom: 17,
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    panControl: !0,
                    panControlOptions: {
                        position: google.maps.ControlPosition.LEFT_TOP
                    },
                    scrollwheel: !1,
                    navigationControl: !1,
                    mapTypeControl: !1,
                    scaleControl: !1,
                    draggable: !0,
                    /*
                    styles: [
                        {
                            "featureType": "administrative",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "stylers": [
                                {
                                    "color": "#5f94ff"
                                },
                                {
                                    "lightness": 26
                                },
                                {
                                    "gamma": 5.86
                                }
                            ]
                        },
                        {},
                        {
                            "featureType": "road.highway",
                            "stylers": [
                                {
                                    "weight": 0.6
                                },
                                {
                                    "saturation": -85
                                },
                                {
                                    "lightness": 61
                                }
                            ]
                        },
                        {
                            "featureType": "road"
                        },
                        {},
                        {
                            "featureType": "landscape",
                            "stylers": [
                                {
                                    "hue": "#0066ff"
                                },
                                {
                                    "saturation": 74
                                },
                                {
                                    "lightness": 100
                                }
                            ]
                        }
                    ],
                    */
                    disableDoubleClickZoom: !1,
                    center: new google.maps.LatLng(45.035655, 38.912253)
                };

                var map = new google.maps.Map(document.getElementById( 'map-conteiner' ), mapOptions);
                
                var bullet = {
                    url: 'images/map-bullet.png',
                    size: new google.maps.Size(39, 52),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(39, 52)
                };

                new google.maps.Marker({
                    position: new google.maps.LatLng(45.035655, 38.912253),
                    map: map,
                    icon: bullet
                });
            },
            cache: function( s, cb )
            {
                try {
                    var a, g = [], i, x, cnt = s.length, p = { i: {}, ac: 0, c: 0 }, cb = cb || function(){};
                    
                    function y( index, src )
                    {
                        g.push( src );
                        
                        if( g.length >= cnt )
                        {
                            cb.call();
                        }
                        
                        p.c++
                    }

                    for (x in s)
                    {
                        a = s[x];
                        
                        i = new Image();
                        i.src = a;

                        i.onload = y( x, a );

                        p.i[a] = i;
                        p.ac++
                    }
                }
                catch(e) {}
            },
            retina: function()
            {
                if( 'devicePixelRatio' in window && window.devicePixelRatio == 2 )
                {
                    var i=0, src, img = $( 'img.replace-2x' ).get(), l = img.length;
                    for (i; i<l; i++)
                    {
                        src = img[i].src;
                        src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
                        img[i].src = src;
                    }
                }
            },
            isUndefined: function( obj )
            {
                return obj === void 0;
            },
            updateImage: function(element)
            {
                if( $(element).length > 0 ) {
                    var image = $(element).attr('src').split( '?' )[0] ;
                    $(element).attr('src', image + '?v=' + Math.random() );
                }
                return false;
            },
            random: function(min, max)
            {
                min = min || 0 ;
                max = max || 100 ;
                return Math.floor(Math.random() * ( max - min + 1 )) + min ;
            }
        }
    };
    
    $.app.module.form_validation_default = function($form, errors) {
        $form.find('.error').removeClass('error');
        if(errors) {
            $form.find('.form_error_block').show();
            for(fieldName in errors)
            {
                if( $form.find('input[name="'+fieldName+'"]').length > 0 )
                {
                    $field = $form.find('input[name="'+fieldName+'"]');
                }

                if( $form.find('textarea[name="'+fieldName+'"]').length > 0 )
                {
                    $field = $form.find('textarea[name="'+fieldName+'"]');
                }

                $field.addClass('error');
            }
        }
    };

    $.app.callback_stack = {};
    $.app.callback_stack.form_ajax_default = function($form, response) {
        if(response.status) {
            if(response.hasOwnProperty('redirect_url')) {
                window.location.href = response.redirect_url;
            }
        }
        else if(response.errors) {
            $.app.module.form_validation_default($form, response.errors);
        }

        if(response.hasOwnProperty('message')) {
            $.popup.message(response.title, response.message);
        }
    };

    $.app.module.form_ajax = function() {
        $('body').on('submit' ,'.form-ajax', function(e) {
            var $form = $(this);
            e.preventDefault();

            $form.find('.error').removeClass('error');

            $.ajax({
                url: $form.attr('action'),
                type: ($form.attr('method') || 'post'),
                data: $form.serialize(),
                dataType: 'json',
                success: function(response)
                {
                    if($form.data('callback') && $.app.callback_stack.hasOwnProperty($form.data('callback'))) {
                        $.app.callback_stack[$form.data('callback')]($form, response);
                    }
                    else {
                        $.app.callback_stack.form_ajax_default($form, response);
                    }
                    
                    if( response.status === true && response.message !== '' )
                    {
                        //$.popup.message( response.title, response.message );
                    }

                    if($form.hasClass('form-reset'))
                    {
                        $form.find('.error').removeClass('error');
                        $form.get(0).reset();
                    }
                },
                error: function(response)
                {
                    $.app.callback_stack.form_ajax_default($form, response);

                    //alert("error");
                }
            });
        });
    };

    $.app.module.upload_button = function(){
        $('body').on('submit' ,'.form-file-upload', function(e) {
            return AIM.submit(this, {
                onStart: function()
                {

                },
                onComplete: function( result )
                {
                    if( typeof result === 'object' && result.status === true && typeof result.photo_url !== 'undefined' )
                    { }
                }
            });
        });
        
        $(document).on('change', '.upload_button_onchange', function(){
            if( $(this).closest('.upload_button').find('.upload_button_field').length > 0 )
            {
                $(this).closest('.upload_button').find('.upload_button_field').html( $(this).val() );
            }
        });
    };

    $.app.custom_placeholder = function() {
        if (Modernizr.touch) {
            return;
        }

        $('input, textarea').each(function() {
            var $input = $(this), $inputWrapper, $placeholder, placeholderText = $input.attr('placeholder');
            if(placeholderText) {
                $inputWrapper = $input.parent();
                $placeholder = $('<div class="default-input__placeholder" style="line-height: '+($input.is('textarea') ? '44px' : ( $inputWrapper.innerHeight() == 0 ? '44' : $inputWrapper.innerHeight() )+'px')+'">'+placeholderText+'</div>');
                $placeholder[$input.val().length ? 'hide' : 'show']();
                $input.addClass('custom-placeholder').attr('placeholder', '');
                $inputWrapper.append($placeholder);
            }
        });
        
        $('body').on('blur', '.custom-placeholder', function() {
            var $this = $(this);
            if(!$this.val().length) {
                $this.parent().find('.default-input__placeholder').show();
            }
        });
        $('body').on('focus', '.custom-placeholder', function() {
            $(this).parent().find('.default-input__placeholder').hide();
        });

        $('body').on('click', '.default-input__placeholder', function() {
            var $this = $(this);
    
            $this.hide();
            $this.parent().find('.custom-placeholder').trigger('focus');
        });
        $('body').on('selectstart', '.default-input__placeholder', false);
    };

    $.app.run();
})(jQuery);