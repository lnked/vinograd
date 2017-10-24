var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = app || {};

(function (body) {
    'use strict';

    app = {
        _extend: function _extend(source, config) {
            if (typeof config !== 'undefined') {
                for (var x in config) {
                    source[x] = config[x];
                }
            }

            return source;
        },
        bind: function bind() {
            for (var _ in this) {
                if (_typeof(this[_]) == 'object' && typeof this[_].init !== 'undefined') {
                    if (typeof this[_].init == 'function') {
                        this[_].init();
                    }
                }
            }
        },
        init: function init() {
            this.bind();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmluaXQuanMiXSwibmFtZXMiOlsiYXBwIiwiX2V4dGVuZCIsInNvdXJjZSIsImNvbmZpZyIsIngiLCJiaW5kIiwiXyIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFVBQU07QUFFRkMsZUFGRSxtQkFFT0MsTUFGUCxFQUVlQyxNQUZmLEVBRXVCO0FBQ3JCLGdCQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLHFCQUFLLElBQU1DLENBQVgsSUFBZ0JELE1BQWhCLEVBQ0E7QUFDSUQsMkJBQU9FLENBQVAsSUFBWUQsT0FBT0MsQ0FBUCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxtQkFBT0YsTUFBUDtBQUNILFNBWkM7QUFjRkcsWUFkRSxrQkFjTTtBQUNKLGlCQUFJLElBQU1DLENBQVYsSUFBZSxJQUFmLEVBQ0E7QUFDSSxvQkFBSSxRQUFRLEtBQUtBLENBQUwsQ0FBUixLQUFvQixRQUFwQixJQUFnQyxPQUFRLEtBQUtBLENBQUwsRUFBUUMsSUFBaEIsS0FBMEIsV0FBOUQsRUFDQTtBQUNJLHdCQUFJLE9BQVEsS0FBS0QsQ0FBTCxFQUFRQyxJQUFoQixJQUF5QixVQUE3QixFQUNBO0FBQ0ksNkJBQUtELENBQUwsRUFBUUMsSUFBUjtBQUNIO0FBQ0o7QUFDSjtBQUNKLFNBekJDO0FBMkJGQSxZQTNCRSxrQkEyQk07QUFDSixpQkFBS0YsSUFBTDtBQUNIO0FBN0JDLEtBQU47QUFnQ0gsQ0FuQ0QsRUFtQ0lHLFNBQVNDLElBbkNiIiwiZmlsZSI6Il9fYXBwLmluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFwcCA9IHtcblxuICAgICAgICBfZXh0ZW5kIChzb3VyY2UsIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgeCBpbiBjb25maWcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VbeF0gPSBjb25maWdbeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJpbmQgKCkge1xuICAgICAgICAgICAgZm9yKGNvbnN0IF8gaW4gdGhpcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzW19dKSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgKHRoaXNbX10uaW5pdCkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tfXS5pbml0KSA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19dLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = app || {};

(function (body) {
    "use strict";

    var $body = $(body),
        _this;

    app.ajaxForm = {

        config: {
            form_class: '.form-ajax',
            form_reset: 'form-reset',
            link_class: '.js-request-link',
            error_class: 'error',
            error_message: 'form__error-message',
            error_message_class: 'j-error-message',
            error_message_addclass: 'show',
            form_label: '.form__wrapper',
            checkbox_label: 'checkbox__label'
        },

        callback_stack: {},

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },

        default_handler: function default_handler(form, response) {
            _this = this;

            if (response.status) {
                if (response.hasOwnProperty('redirect_url')) {
                    window.location.href = response.redirect_url;
                }
            } else if (typeof response.errors !== 'undefined' || typeof response.error_message !== 'undefined') {
                var errors, error_message;

                if (typeof response.errors !== 'undefined') {
                    errors = response.errors;
                }

                if (typeof response.error_message !== 'undefined') {
                    error_message = response.error_message;
                }

                _this.validation(form, errors, response.error_message);
            }

            if (response.hasOwnProperty('open_popup')) {
                if ($('body').find('.popup.is-open').length) {
                    $.popup.close($('body').find('.popup.is-open'), function () {
                        $.popup.open(response.open_popup);
                    });
                } else {
                    $.popup.open(response.open_popup);
                }
            }

            if (response.hasOwnProperty('message')) {
                $.popup.message(response.title, response.message);
            }
        },

        validation: function validation(form, errors, error_message) {
            _this = this;

            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
            form.find('.' + _this.config.error_message).remove();
            form.find('.' + _this.config.error_message_class).removeClass(_this.config.error_message_addclass);

            var fieldName, field;

            setTimeout(function () {
                if (typeof error_message !== 'undefined' && error_message !== '') {
                    form.find('.' + _this.config.error_message_class).html(error_message);
                    form.find('.' + _this.config.error_message_class).addClass(_this.config.error_message_addclass);
                }

                if (typeof errors !== 'undefined' && errors !== '') {
                    for (fieldName in errors) {
                        if (form.find('input[name="' + fieldName + '"]').length > 0) {
                            field = form.find('input[name="' + fieldName + '"]');
                        }

                        if (form.find('select[name="' + fieldName + '"]').length > 0) {
                            field = form.find('select[name="' + fieldName + '"]');
                        }

                        if (form.find('textarea[name="' + fieldName + '"]').length > 0) {
                            field = form.find('textarea[name="' + fieldName + '"]');
                        }

                        if (field.closest('.' + _this.config.checkbox_label).length > 0) {
                            field = field.closest('.' + _this.config.checkbox_label);
                        }

                        if (typeof field !== 'undefined') {
                            field.addClass(_this.config.error_class);
                            field.closest(_this.config.form_label).append('<div class="' + _this.config.error_message + '">' + errors[fieldName] + '</div>');
                        }
                    }
                }
            }, 10);
        },

        upload: function upload() {
            _this = this;

            $body.on('submit', '.form-file-upload', function (e) {
                return AIM.submit(this, {
                    onStart: function onStart() {},
                    onComplete: function onComplete(result) {
                        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.status === true && result.hasOwnProperty('photo_url')) {}
                    }
                });
            });

            $(document).on('change', '.upload_button_onchange', function () {
                if ($(this).closest('.upload_button').find('.upload_button_field').length > 0) {
                    $(this).closest('.upload_button').find('.upload_button_field').html($(this).val());
                }
            });
        },

        send: function send(action, method, data, cb, err) {

            if (typeof cb !== 'function') {
                cb = function cb() {};
            }

            if (typeof err !== 'function') {
                err = function err() {};
            }

            try {

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                $.ajax({
                    url: action,
                    type: method,
                    data: data,
                    contentType: false,
                    processData: method.toLowerCase() == 'get',
                    success: cb,
                    error: err,
                    dataType: 'JSON'
                });
            } catch (e) {}
        },

        initLink: function initLink() {
            _this = this;

            $body.on('click', _this.config.link_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var link = $(this);

                if (link.data('is-busy')) {
                    return;
                }

                link.data('is-busy', true);

                var action = $(this).attr('href') || $(this).data('action'),
                    method = $(this).data('method') || 'get',
                    data = {};

                _this.send(action, method, data, function (response) {
                    if (link.data('callback') && _this.callback_stack.hasOwnProperty(link.data('callback'))) {
                        _this.callback_stack[link.data('callback')](link, response);
                    } else {
                        _this.default_handler(link, response);
                    }

                    if (response.status === true) {}

                    link.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(link, response);
                    link.data('is-busy', false);
                });
            });
        },

        initForm: function initForm() {
            _this = this;

            $body.on('submit', _this.config.form_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var form = $(this),
                    action = form.attr('action'),
                    method = form.attr('method') || 'post',
                    data = !!window.FormData ? new FormData(form[0]) : form.serialize();

                if (form.data('is-busy')) {
                    return;
                }

                form.data('is-busy', true);

                if (typeof button !== 'undefined') {
                    if (button.data('loading')) {
                        button.data('original', button.text());
                        button.text(button.data('loading'));
                    }

                    button.addClass('preload');
                }

                if (form.data('precallback') && _this.callback_stack.hasOwnProperty(form.data('precallback'))) {
                    if (!_this.callback_stack[form.data('precallback')](form)) {
                        return false;
                    }
                }

                _this.send(action, method, data, function (response) {
                    if (form.data('callback') && _this.callback_stack.hasOwnProperty(form.data('callback'))) {
                        _this.callback_stack[form.data('callback')](form, response);
                    } else {
                        _this.default_handler(form, response);
                    }

                    if (response.status === true) {
                        if (form.hasClass(_this.config.form_reset)) {
                            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
                            form.get(0).reset();
                        }
                    }

                    if (typeof button !== 'undefined') {
                        if (button.data('original')) {
                            button.text(button.data('original'));
                        }

                        button.removeClass('preload');
                    }

                    form.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(form, response);
                    form.data('is-busy', false);
                });
            });
        },

        init: function init(config) {
            this.extend(config);

            this.initForm();
            this.initLink();
        }
    };

    app.ajaxForm.init();
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuYWpheC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJib2R5IiwiJGJvZHkiLCIkIiwiX3RoaXMiLCJhamF4Rm9ybSIsImNvbmZpZyIsImZvcm1fY2xhc3MiLCJmb3JtX3Jlc2V0IiwibGlua19jbGFzcyIsImVycm9yX2NsYXNzIiwiZXJyb3JfbWVzc2FnZSIsImVycm9yX21lc3NhZ2VfY2xhc3MiLCJlcnJvcl9tZXNzYWdlX2FkZGNsYXNzIiwiZm9ybV9sYWJlbCIsImNoZWNrYm94X2xhYmVsIiwiY2FsbGJhY2tfc3RhY2siLCJleHRlbmQiLCJ4IiwiZGVmYXVsdF9oYW5kbGVyIiwiZm9ybSIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGFzT3duUHJvcGVydHkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZWRpcmVjdF91cmwiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uIiwiZmluZCIsImxlbmd0aCIsInBvcHVwIiwiY2xvc2UiLCJvcGVuIiwib3Blbl9wb3B1cCIsIm1lc3NhZ2UiLCJ0aXRsZSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiZmllbGROYW1lIiwiZmllbGQiLCJzZXRUaW1lb3V0IiwiaHRtbCIsImFkZENsYXNzIiwiY2xvc2VzdCIsImFwcGVuZCIsInVwbG9hZCIsIm9uIiwiZSIsIkFJTSIsInN1Ym1pdCIsIm9uU3RhcnQiLCJvbkNvbXBsZXRlIiwicmVzdWx0IiwiZG9jdW1lbnQiLCJ2YWwiLCJzZW5kIiwiYWN0aW9uIiwibWV0aG9kIiwiZGF0YSIsImNiIiwiZXJyIiwiYWpheFNldHVwIiwiaGVhZGVycyIsImF0dHIiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJ0b0xvd2VyQ2FzZSIsInN1Y2Nlc3MiLCJlcnJvciIsImRhdGFUeXBlIiwiaW5pdExpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwibGluayIsImluaXRGb3JtIiwiRm9ybURhdGEiLCJzZXJpYWxpemUiLCJidXR0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LE1BQU1FLE1BQU4sQ0FBYUksV0FBbkU7QUFDQVUsaUNBQUtpRSxHQUFMLENBQVMsQ0FBVCxFQUFZQyxLQUFaO0FBQ0g7QUFDSjs7QUFFRCx3QkFBSSxPQUFPSixNQUFQLEtBQWtCLFdBQXRCLEVBQ0E7QUFDSSw0QkFBSUEsT0FBT3RCLElBQVAsQ0FBWSxVQUFaLENBQUosRUFDQTtBQUNJc0IsbUNBQU9DLElBQVAsQ0FBWUQsT0FBT3RCLElBQVAsQ0FBWSxVQUFaLENBQVo7QUFDSDs7QUFFRHNCLCtCQUFPNUMsV0FBUCxDQUFtQixTQUFuQjtBQUNIOztBQUVEbEIseUJBQUt3QyxJQUFMLENBQVUsU0FBVixFQUFxQixLQUFyQjtBQUNILGlCQW5DTCxFQW9DSSxVQUFTdkMsUUFBVCxFQUNBO0FBQ0lqQiwwQkFBTWUsZUFBTixDQUFzQkMsSUFBdEIsRUFBNEJDLFFBQTVCO0FBQ0FELHlCQUFLd0MsSUFBTCxDQUFVLFNBQVYsRUFBcUIsS0FBckI7QUFDSCxpQkF4Q0w7QUEwQ0gsYUExRUQ7QUEyRUgsU0FsVVU7O0FBb1VYMkIsY0FBTSxjQUFTakYsTUFBVCxFQUNOO0FBQ0ksaUJBQUtXLE1BQUwsQ0FBWVgsTUFBWjs7QUFFQSxpQkFBS3lFLFFBQUw7QUFDQSxpQkFBS0osUUFBTDtBQUNIO0FBMVVVLEtBQWY7O0FBNlVBM0UsUUFBSUssUUFBSixDQUFha0YsSUFBYjtBQUVILENBclZELEVBcVZHaEMsU0FBU3RELElBclZaIiwiZmlsZSI6Il9hcHAuYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhcHAgfHwge307XG5cbihmdW5jdGlvbihib2R5KXtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciAkYm9keSA9ICQoYm9keSksXG4gICAgICAgIF90aGlzO1xuXG4gICAgYXBwLmFqYXhGb3JtID0ge1xuXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgZm9ybV9jbGFzczogJy5mb3JtLWFqYXgnLFxuICAgICAgICAgICAgZm9ybV9yZXNldDogJ2Zvcm0tcmVzZXQnLFxuICAgICAgICAgICAgbGlua19jbGFzczogJy5qcy1yZXF1ZXN0LWxpbmsnLFxuICAgICAgICAgICAgZXJyb3JfY2xhc3M6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnZm9ybV9fZXJyb3ItbWVzc2FnZScsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiAnai1lcnJvci1tZXNzYWdlJyxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2VfYWRkY2xhc3M6ICdzaG93JyxcbiAgICAgICAgICAgIGZvcm1fbGFiZWw6ICcuZm9ybV9fd3JhcHBlcicsXG4gICAgICAgICAgICBjaGVja2JveF9sYWJlbDogJ2NoZWNrYm94X19sYWJlbCdcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxsYmFja19zdGFjazoge30sXG5cbiAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbihjb25maWcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB4O1xuICAgICAgICAgICAgICAgIGZvciAoeCBpbiBjb25maWcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmNvbmZpZ1t4XSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25maWdbeF0gPSBjb25maWdbeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRfaGFuZGxlcjogZnVuY3Rpb24oZm9ybSwgcmVzcG9uc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0X3VybCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdF91cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc3BvbnNlLmVycm9ycyAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcnMsIGVycm9yX21lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmVycm9ycyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvcl9tZXNzYWdlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSByZXNwb25zZS5lcnJvcl9tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLnZhbGlkYXRpb24oZm9ybSwgZXJyb3JzLCByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdvcGVuX3BvcHVwJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5maW5kKCcucG9wdXAuaXMtb3BlbicpLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQucG9wdXAuY2xvc2UoJCgnYm9keScpLmZpbmQoJy5wb3B1cC5pcy1vcGVuJyksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLnBvcHVwLm9wZW4ocmVzcG9uc2Uub3Blbl9wb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkLnBvcHVwLm9wZW4ocmVzcG9uc2Uub3Blbl9wb3B1cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkLnBvcHVwLm1lc3NhZ2UocmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRhdGlvbjogZnVuY3Rpb24oZm9ybSwgZXJyb3JzLCBlcnJvcl9tZXNzYWdlKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpLnJlbW92ZUNsYXNzKF90aGlzLmNvbmZpZy5lcnJvcl9jbGFzcyk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2UpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9tZXNzYWdlX2NsYXNzKS5yZW1vdmVDbGFzcyhfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZV9hZGRjbGFzcyk7XG5cbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JfbWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXJyb3JfbWVzc2FnZSAhPT0gJycpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfY2xhc3MpLmh0bWwoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZV9jbGFzcykuYWRkQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfYWRkY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JzICE9PSAndW5kZWZpbmVkJyAmJiBlcnJvcnMgIT09ICcnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGZpZWxkTmFtZSBpbiBlcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIicrZmllbGROYW1lKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uZmluZCgnc2VsZWN0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgnc2VsZWN0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmZpbmQoJ3RleHRhcmVhW25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT1cIicrZmllbGROYW1lKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNsb3Nlc3QoJy4nICsgX3RoaXMuY29uZmlnLmNoZWNrYm94X2xhYmVsKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZmllbGQuY2xvc2VzdCgnLicgKyBfdGhpcy5jb25maWcuY2hlY2tib3hfbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5hZGRDbGFzcyhfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsb3Nlc3QoX3RoaXMuY29uZmlnLmZvcm1fbGFiZWwpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicgKyBfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZSArICdcIj4nICsgZXJyb3JzW2ZpZWxkTmFtZV0gKyAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBsb2FkOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgJGJvZHkub24oJ3N1Ym1pdCcsICcuZm9ybS1maWxlLXVwbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQUlNLnN1Ym1pdCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdC5zdGF0dXMgPT09IHRydWUgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCdwaG90b191cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBsb2FkX2J1dHRvbl9vbmNoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdCgnLnVwbG9hZF9idXR0b24nKS5maW5kKCcudXBsb2FkX2J1dHRvbl9maWVsZCcpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51cGxvYWRfYnV0dG9uJykuZmluZCgnLnVwbG9hZF9idXR0b25fZmllbGQnKS5odG1sKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbmQ6IGZ1bmN0aW9uKGFjdGlvbiwgbWV0aG9kLCBkYXRhLCBjYiwgZXJyKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYiA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZXJyID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogbWV0aG9kLnRvTG93ZXJDYXNlKCkgPT0gJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGNiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdExpbms6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAkYm9keS5vbignY2xpY2snLCBfdGhpcy5jb25maWcubGlua19jbGFzcywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGluayA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGluay5kYXRhKCdpcy1idXN5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpbmsuZGF0YSgnaXMtYnVzeScsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkgfHwgJCh0aGlzKS5kYXRhKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gKCQodGhpcykuZGF0YSgnbWV0aG9kJykpIHx8ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kKFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmRhdGEoJ2NhbGxiYWNrJykgJiYgX3RoaXMuY2FsbGJhY2tfc3RhY2suaGFzT3duUHJvcGVydHkobGluay5kYXRhKCdjYWxsYmFjaycpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFja19zdGFja1tsaW5rLmRhdGEoJ2NhbGxiYWNrJyldKGxpbmssIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWZhdWx0X2hhbmRsZXIobGluaywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuZGF0YSgnaXMtYnVzeScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihsaW5rLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmRhdGEoJ2lzLWJ1c3knLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEZvcm06IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAkYm9keS5vbignc3VibWl0JywgX3RoaXMuY29uZmlnLmZvcm1fY2xhc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gICAgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gID0gZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kICA9IChmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdwb3N0JyksXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgICAgPSAhIXdpbmRvdy5Gb3JtRGF0YSA/IG5ldyBGb3JtRGF0YShmb3JtWzBdKSA6IGZvcm0uc2VyaWFsaXplKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5kYXRhKCdpcy1idXN5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm0uZGF0YSgnaXMtYnVzeScsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBidXR0b24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5kYXRhKCdsb2FkaW5nJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kYXRhKCdvcmlnaW5hbCcsIGJ1dHRvbi50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHQoYnV0dG9uLmRhdGEoJ2xvYWRpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ3ByZWxvYWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5kYXRhKCdwcmVjYWxsYmFjaycpICYmIF90aGlzLmNhbGxiYWNrX3N0YWNrLmhhc093blByb3BlcnR5KGZvcm0uZGF0YSgncHJlY2FsbGJhY2snKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIV90aGlzLmNhbGxiYWNrX3N0YWNrW2Zvcm0uZGF0YSgncHJlY2FsbGJhY2snKV0oZm9ybSkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLnNlbmQoXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uZGF0YSgnY2FsbGJhY2snKSAmJiBfdGhpcy5jYWxsYmFja19zdGFjay5oYXNPd25Qcm9wZXJ0eShmb3JtLmRhdGEoJ2NhbGxiYWNrJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrX3N0YWNrW2Zvcm0uZGF0YSgnY2FsbGJhY2snKV0oZm9ybSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihmb3JtLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uaGFzQ2xhc3MoX3RoaXMuY29uZmlnLmZvcm1fcmVzZXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9jbGFzcykucmVtb3ZlQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoMCkucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnV0dG9uICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ29yaWdpbmFsJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dChidXR0b24uZGF0YSgnb3JpZ2luYWwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKCdwcmVsb2FkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZGF0YSgnaXMtYnVzeScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihmb3JtLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmRhdGEoJ2lzLWJ1c3knLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oY29uZmlnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChjb25maWcpO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXBwLmFqYXhGb3JtLmluaXQoKTtcblxufSkoZG9jdW1lbnQuYm9keSk7Il19

var app = app || {};

(function (body) {
    "use strict";

    app.banner = {

        initClose: function initClose() {
            $('.banner.show').click(function () {
                if ($('#banner-10m').length) {
                    var $banner = $('#banner-10m');

                    if ($banner.hasClass('show')) {
                        $banner.removeClass('animate');

                        setTimeout(function () {
                            $banner.removeClass('show');
                        }, 300);
                    }
                }
            });
        },

        make: function make(delay) {
            var _this = this;

            var close = function close($b) {
                $b.removeClass('animate');

                setTimeout(function () {
                    $b.removeClass('show');
                }, 400);
            };

            if ($('#banner-new-action').length) {
                var $banner = $('#banner-new-action');

                $(document).on('keyup', function (e) {
                    if (e.keyCode == 27) {
                        if ($banner.hasClass('show')) {
                            close($banner);
                        }
                    }
                });

                $banner.on('click', '.banner__image__close', function (e) {
                    e.preventDefault();
                    close($banner);
                });

                setTimeout(function () {
                    $banner.addClass('show');

                    setTimeout(function () {
                        $banner.addClass('animate');
                    }, 10);

                    _this.initClose();
                }, delay * 1000);
            }
        },

        init: function init() {
            this.make(4);
        }

    };
})(document.body);

// ((body => {
//     "use strict";

//     app.banner = {

//         close: function() {
//             var $body = $('body');

//             $('#rs-event').fadeOut(300, function(){
//                 setTimeout(function() {
//                     $('#rs-event').remove();
//                     $body.removeClass('is-no-overflow');
//                 }, 150);
//             });
//         },

//         events: function() {
//             var _this = this;
//             $('body').on('click', '.rs-event-close-button', function(e) {
//                 e.preventDefault();
//                 _this.close();
//             });
//         },

//         show: function() {
//             var _this = this;
//             var $body = $('body');

//             var template = [
//                 '<div class="rs-event" id="rs-event">',
//                     '<div class="rs-event__image">',
//                         '<a href="#" class="rs-event__close rs-event-close-button"></a>',
//                         '<img src="/images/banner-action-double.jpg" class="rs-event__image__src">',
//                     '</div>',
//                     '<div class="rs-event__content">',
//                         '<h2>Две квартиры по цене одной!</h2>',
//                         '<h3>В ЖК «ВиноградЪ» только до конца мая Вы можете приобрести две квартиры по цене одной!</h3>',
//                         '<h3>За 1,5 млн.руб. – сразу ДВЕ КВАРТИРЫ!!!!</h3>',
//                         '<p>Условия акции продиктованы сложившейся рыночной ситуацией, так согласно статистическим данным от независимых экспертов на сегодняшний день средняя стоимость однокомнатной квартиры в Краснодарском крае возросла до 2 млн.руб. (см. статистику в конце статьи)</p>',
//                         '<p>Строительная компания «Регион-Строй» идет на беспрецедентные меры! Только до конца мая (по 31.05.2017 включительно) мы фиксируем стоимость квартиры студии в пределах 700-750 тыс. руб. (в зависимости от площади)! Таким образом всего за 1,5 млн.руб. Вы сможете приобрести две квартиры студии, в сравнении с приведенной ниже статистикой за такую же стоимость сегодня можно приобрести всего одну однокомнатную квартиру! Две лучше, чем одна! Спешите – предложение ограничено.</p>',
//                         '<p>До конца мая по фиксированной цене Вы можете купить и одну квартиру студию – стоимостью от 700 до 750 тыс.руб. (точная стоимость определяется площадью квартиры).  Приобретая квартиру по данному  предложению, Вы можете так же воспользоваться: Ипотекой, Рассрочкой, Мат.капиталом.</p>',
//                         '<p>Подробности в отделе продаж СК «Регион-Строй»: <strong><a href="tel:8-800-707-16-87">8 800 707 16 87</a></strong></p>',
//                         '<p>Данные предоставлены: <a href="http://krasnodar.naydidom.com/tseny/adtype-kupit" target="_blank">http://krasnodar.naydidom.com/tseny/adtype-kupit</a></p>',
//                         '<p><img src="/images/grafik-prodaj.jpg" alt=""></p>',
//                     '</div>',
//                 '</div>'
//             ];

//             $body.addClass('is-no-overflow');
//             $body.append(template.join(''));

//             _this.events();
//         },

//         init: function() {
//             var _this = this;

//             if (!$.cookie('main.page.banner.updated')) {
//                 $.removeCookie('main.page.banner');

//                 $.cookie('main.page.banner.updated', true, {
//                     expires: 1,
//                     path: '/'
//                 });
//             }

//             var timeout = 2000;

//             if (typeof window.location.hash !== 'undefined' && window.location.hash === '#two-apartments-price-of-one') {
//                 timeout = 0;
//             }

//             setTimeout(function() {
//                 _this.show();
//             }, timeout);

//             // if (!$.cookie('main.page.banner')) {
//             //     setTimeout(function() {
//             //         _this.show();
//             //     }, timeout);

//             //     var date = new Date();
//             //     var m = 3;
//             //     date.setTime(date.getTime() + (m * 60 * 1000));

//             //     $.cookie('main.page.banner', true, {
//             //         expires: date,
//             //         path: '/'
//             //     });
//             // }
//         }

//     };

// }))(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuYmFubmVyLmpzIl0sIm5hbWVzIjpbImFwcCIsImJhbm5lciIsImluaXRDbG9zZSIsIiQiLCJjbGljayIsImxlbmd0aCIsIiRiYW5uZXIiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsIm1ha2UiLCJkZWxheSIsIl90aGlzIiwiY2xvc2UiLCIkYiIsImRvY3VtZW50Iiwib24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJpbml0IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFHQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLE1BQUosR0FBYTs7QUFFVEMsbUJBQVcscUJBQVc7QUFDbEJDLGNBQUUsY0FBRixFQUFrQkMsS0FBbEIsQ0FBd0IsWUFBVTtBQUM5QixvQkFBSUQsRUFBRSxhQUFGLEVBQWlCRSxNQUFyQixFQUE2QjtBQUN6Qix3QkFBSUMsVUFBVUgsRUFBRSxhQUFGLENBQWQ7O0FBRUEsd0JBQUlHLFFBQVFDLFFBQVIsQ0FBaUIsTUFBakIsQ0FBSixFQUE4QjtBQUMxQkQsZ0NBQVFFLFdBQVIsQ0FBb0IsU0FBcEI7O0FBRUFDLG1DQUFXLFlBQVU7QUFDakJILG9DQUFRRSxXQUFSLENBQW9CLE1BQXBCO0FBQ0gseUJBRkQsRUFFRyxHQUZIO0FBR0g7QUFDSjtBQUNKLGFBWkQ7QUFhSCxTQWhCUTs7QUFrQlRFLGNBQU0sY0FBU0MsS0FBVCxFQUNOO0FBQ0ksZ0JBQU1DLFFBQVEsSUFBZDs7QUFFQSxnQkFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQVVDLEVBQVYsRUFBYztBQUN4QkEsbUJBQUdOLFdBQUgsQ0FBZSxTQUFmOztBQUVBQywyQkFBVyxZQUFNO0FBQ2JLLHVCQUFHTixXQUFILENBQWUsTUFBZjtBQUNILGlCQUZELEVBRUcsR0FGSDtBQUdILGFBTkQ7O0FBUUEsZ0JBQUlMLEVBQUUsb0JBQUYsRUFBd0JFLE1BQTVCLEVBQW9DO0FBQ2hDLG9CQUFNQyxVQUFVSCxFQUFFLG9CQUFGLENBQWhCOztBQUVBQSxrQkFBRVksUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFTQyxDQUFULEVBQVk7QUFDaEMsd0JBQUlBLEVBQUVDLE9BQUYsSUFBYSxFQUFqQixFQUFxQjtBQUNqQiw0QkFBSVosUUFBUUMsUUFBUixDQUFpQixNQUFqQixDQUFKLEVBQThCO0FBQzFCTSxrQ0FBTVAsT0FBTjtBQUNIO0FBQ0o7QUFDSixpQkFORDs7QUFRQUEsd0JBQVFVLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLHVCQUFwQixFQUE2QyxVQUFTQyxDQUFULEVBQVk7QUFDckRBLHNCQUFFRSxjQUFGO0FBQ0FOLDBCQUFNUCxPQUFOO0FBQ0gsaUJBSEQ7O0FBS0FHLDJCQUFXLFlBQVU7QUFDakJILDRCQUFRYyxRQUFSLENBQWlCLE1BQWpCOztBQUVBWCwrQkFBVyxZQUFVO0FBQ2pCSCxnQ0FBUWMsUUFBUixDQUFpQixTQUFqQjtBQUNILHFCQUZELEVBRUcsRUFGSDs7QUFJQVIsMEJBQU1WLFNBQU47QUFDSCxpQkFSRCxFQVFHUyxRQUFRLElBUlg7QUFTSDtBQUNKLFNBeERROztBQTBEVFUsY0FBTSxnQkFBVztBQUNiLGlCQUFLWCxJQUFMLENBQVUsQ0FBVjtBQUNIOztBQTVEUSxLQUFiO0FBZ0VILENBbkVELEVBbUVJSyxTQUFTTyxJQW5FYjs7QUFxRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Il9hcHAuYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLmJhbm5lciA9IHtcblxuICAgICAgICBpbml0Q2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmJhbm5lci5zaG93JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2Jhbm5lci0xMG0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRiYW5uZXIgPSAkKCcjYmFubmVyLTEwbScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkYmFubmVyLmhhc0NsYXNzKCdzaG93JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRiYW5uZXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiYW5uZXIucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYWtlOiBmdW5jdGlvbihkZWxheSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IGZ1bmN0aW9uICgkYikge1xuICAgICAgICAgICAgICAgICRiLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJGIucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnI2Jhbm5lci1uZXctYWN0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGJhbm5lciA9ICQoJyNiYW5uZXItbmV3LWFjdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGJhbm5lci5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UoJGJhbm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRiYW5uZXIub24oJ2NsaWNrJywgJy5iYW5uZXJfX2ltYWdlX19jbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZSgkYmFubmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJGJhbm5lci5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJhbm5lci5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5pdENsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubWFrZSg0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpO1xuXG4vLyAoKGJvZHkgPT4ge1xuLy8gICAgIFwidXNlIHN0cmljdFwiO1xuXG4vLyAgICAgYXBwLmJhbm5lciA9IHtcblxuLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG5cbi8vICAgICAgICAgICAgICQoJyNycy1ldmVudCcpLmZhZGVPdXQoMzAwLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICQoJyNycy1ldmVudCcpLnJlbW92ZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnaXMtbm8tb3ZlcmZsb3cnKTtcbi8vICAgICAgICAgICAgICAgICB9LCAxNTApO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0sXG5cbi8vICAgICAgICAgZXZlbnRzOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4vLyAgICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5ycy1ldmVudC1jbG9zZS1idXR0b24nLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSxcblxuLy8gICAgICAgICBzaG93OiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4vLyAgICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG5cbi8vICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IFtcbi8vICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJzLWV2ZW50XCIgaWQ9XCJycy1ldmVudFwiPicsXG4vLyAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicnMtZXZlbnRfX2ltYWdlXCI+Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIGNsYXNzPVwicnMtZXZlbnRfX2Nsb3NlIHJzLWV2ZW50LWNsb3NlLWJ1dHRvblwiPjwvYT4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgc3JjPVwiL2ltYWdlcy9iYW5uZXItYWN0aW9uLWRvdWJsZS5qcGdcIiBjbGFzcz1cInJzLWV2ZW50X19pbWFnZV9fc3JjXCI+Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicsXG4vLyAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicnMtZXZlbnRfX2NvbnRlbnRcIj4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJzxoMj7QlNCy0LUg0LrQstCw0YDRgtC40YDRiyDQv9C+INGG0LXQvdC1INC+0LTQvdC+0LkhPC9oMj4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJzxoMz7QkiDQltCaIMKr0JLQuNC90L7Qs9GA0LDQtNCqwrsg0YLQvtC70YzQutC+INC00L4g0LrQvtC90YbQsCDQvNCw0Y8g0JLRiyDQvNC+0LbQtdGC0LUg0L/RgNC40L7QsdGA0LXRgdGC0Lgg0LTQstC1INC60LLQsNGA0YLQuNGA0Ysg0L/QviDRhtC10L3QtSDQvtC00L3QvtC5ITwvaDM+Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICc8aDM+0JfQsCAxLDUg0LzQu9C9LtGA0YPQsS4g4oCTINGB0YDQsNC30YMg0JTQktCVINCa0JLQkNCg0KLQmNCg0KshISEhPC9oMz4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJzxwPtCj0YHQu9C+0LLQuNGPINCw0LrRhtC40Lgg0L/RgNC+0LTQuNC60YLQvtCy0LDQvdGLINGB0LvQvtC20LjQstGI0LXQudGB0Y8g0YDRi9C90L7Rh9C90L7QuSDRgdC40YLRg9Cw0YbQuNC10LksINGC0LDQuiDRgdC+0LPQu9Cw0YHQvdC+INGB0YLQsNGC0LjRgdGC0LjRh9C10YHQutC40Lwg0LTQsNC90L3Ri9C8INC+0YIg0L3QtdC30LDQstC40YHQuNC80YvRhSDRjdC60YHQv9C10YDRgtC+0LIg0L3QsCDRgdC10LPQvtC00L3Rj9GI0L3QuNC5INC00LXQvdGMINGB0YDQtdC00L3Rj9GPINGB0YLQvtC40LzQvtGB0YLRjCDQvtC00L3QvtC60L7QvNC90LDRgtC90L7QuSDQutCy0LDRgNGC0LjRgNGLINCyINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQvtC8INC60YDQsNC1INCy0L7Qt9GA0L7RgdC70LAg0LTQviAyINC80LvQvS7RgNGD0LEuICjRgdC8LiDRgdGC0LDRgtC40YHRgtC40LrRgyDQsiDQutC+0L3RhtC1INGB0YLQsNGC0YzQuCk8L3A+Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICc8cD7QodGC0YDQvtC40YLQtdC70YzQvdCw0Y8g0LrQvtC80L/QsNC90LjRjyDCq9Cg0LXQs9C40L7QvS3QodGC0YDQvtC5wrsg0LjQtNC10YIg0L3QsCDQsdC10YHQv9GA0LXRhtC10LTQtdC90YLQvdGL0LUg0LzQtdGA0YshINCi0L7Qu9GM0LrQviDQtNC+INC60L7QvdGG0LAg0LzQsNGPICjQv9C+IDMxLjA1LjIwMTcg0LLQutC70Y7Rh9C40YLQtdC70YzQvdC+KSDQvNGLINGE0LjQutGB0LjRgNGD0LXQvCDRgdGC0L7QuNC80L7RgdGC0Ywg0LrQstCw0YDRgtC40YDRiyDRgdGC0YPQtNC40Lgg0LIg0L/RgNC10LTQtdC70LDRhSA3MDAtNzUwINGC0YvRgS4g0YDRg9CxLiAo0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC/0LvQvtGJ0LDQtNC4KSEg0KLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCDQstGB0LXQs9C+INC30LAgMSw1INC80LvQvS7RgNGD0LEuINCS0Ysg0YHQvNC+0LbQtdGC0LUg0L/RgNC40L7QsdGA0LXRgdGC0Lgg0LTQstC1INC60LLQsNGA0YLQuNGA0Ysg0YHRgtGD0LTQuNC4LCDQsiDRgdGA0LDQstC90LXQvdC40Lgg0YEg0L/RgNC40LLQtdC00LXQvdC90L7QuSDQvdC40LbQtSDRgdGC0LDRgtC40YHRgtC40LrQvtC5INC30LAg0YLQsNC60YPRjiDQttC1INGB0YLQvtC40LzQvtGB0YLRjCDRgdC10LPQvtC00L3RjyDQvNC+0LbQvdC+INC/0YDQuNC+0LHRgNC10YHRgtC4INCy0YHQtdCz0L4g0L7QtNC90YMg0L7QtNC90L7QutC+0LzQvdCw0YLQvdGD0Y4g0LrQstCw0YDRgtC40YDRgyEg0JTQstC1INC70YPRh9GI0LUsINGH0LXQvCDQvtC00L3QsCEg0KHQv9C10YjQuNGC0LUg4oCTINC/0YDQtdC00LvQvtC20LXQvdC40LUg0L7Qs9GA0LDQvdC40YfQtdC90L4uPC9wPicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+0JTQviDQutC+0L3RhtCwINC80LDRjyDQv9C+INGE0LjQutGB0LjRgNC+0LLQsNC90L3QvtC5INGG0LXQvdC1INCS0Ysg0LzQvtC20LXRgtC1INC60YPQv9C40YLRjCDQuCDQvtC00L3RgyDQutCy0LDRgNGC0LjRgNGDINGB0YLRg9C00LjRjiDigJMg0YHRgtC+0LjQvNC+0YHRgtGM0Y4g0L7RgiA3MDAg0LTQviA3NTAg0YLRi9GBLtGA0YPQsS4gKNGC0L7Rh9C90LDRjyDRgdGC0L7QuNC80L7RgdGC0Ywg0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINC/0LvQvtGJ0LDQtNGM0Y4g0LrQstCw0YDRgtC40YDRiykuICDQn9GA0LjQvtCx0YDQtdGC0LDRjyDQutCy0LDRgNGC0LjRgNGDINC/0L4g0LTQsNC90L3QvtC80YMgINC/0YDQtdC00LvQvtC20LXQvdC40Y4sINCS0Ysg0LzQvtC20LXRgtC1INGC0LDQuiDQttC1INCy0L7RgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjzog0JjQv9C+0YLQtdC60L7QuSwg0KDQsNGB0YHRgNC+0YfQutC+0LksINCc0LDRgi7QutCw0L/QuNGC0LDQu9C+0LwuPC9wPicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+0J/QvtC00YDQvtCx0L3QvtGB0YLQuCDQsiDQvtGC0LTQtdC70LUg0L/RgNC+0LTQsNC2INCh0JogwqvQoNC10LPQuNC+0L0t0KHRgtGA0L7QucK7OiA8c3Ryb25nPjxhIGhyZWY9XCJ0ZWw6OC04MDAtNzA3LTE2LTg3XCI+OMKgODAwwqA3MDcgMTYgODc8L2E+PC9zdHJvbmc+PC9wPicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAnPHA+0JTQsNC90L3Ri9C1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdGLOiA8YSBocmVmPVwiaHR0cDovL2tyYXNub2Rhci5uYXlkaWRvbS5jb20vdHNlbnkvYWR0eXBlLWt1cGl0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL2tyYXNub2Rhci5uYXlkaWRvbS5jb20vdHNlbnkvYWR0eXBlLWt1cGl0PC9hPjwvcD4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJzxwPjxpbWcgc3JjPVwiL2ltYWdlcy9ncmFmaWstcHJvZGFqLmpwZ1wiIGFsdD1cIlwiPjwvcD4nLFxuLy8gICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyxcbi8vICAgICAgICAgICAgICAgICAnPC9kaXY+J1xuLy8gICAgICAgICAgICAgXTtcblxuLy8gICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2lzLW5vLW92ZXJmbG93Jyk7XG4vLyAgICAgICAgICAgICAkYm9keS5hcHBlbmQodGVtcGxhdGUuam9pbignJykpO1xuXG4vLyAgICAgICAgICAgICBfdGhpcy5ldmVudHMoKTtcbi8vICAgICAgICAgfSxcblxuLy8gICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbi8vICAgICAgICAgICAgIGlmICghJC5jb29raWUoJ21haW4ucGFnZS5iYW5uZXIudXBkYXRlZCcpKSB7XG4vLyAgICAgICAgICAgICAgICAgJC5yZW1vdmVDb29raWUoJ21haW4ucGFnZS5iYW5uZXInKTtcbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICAkLmNvb2tpZSgnbWFpbi5wYWdlLmJhbm5lci51cGRhdGVkJywgdHJ1ZSwge1xuLy8gICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiAxLFxuLy8gICAgICAgICAgICAgICAgICAgICBwYXRoOiAnLydcbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSAyMDAwO1xuXG4vLyAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyN0d28tYXBhcnRtZW50cy1wcmljZS1vZi1vbmUnKSB7XG4vLyAgICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgX3RoaXMuc2hvdygpO1xuLy8gICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbi8vICAgICAgICAgICAgIC8vIGlmICghJC5jb29raWUoJ21haW4ucGFnZS5iYW5uZXInKSkge1xuLy8gICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIF90aGlzLnNob3coKTtcbi8vICAgICAgICAgICAgIC8vICAgICB9LCB0aW1lb3V0KTtcblxuLy8gICAgICAgICAgICAgLy8gICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbi8vICAgICAgICAgICAgIC8vICAgICB2YXIgbSA9IDM7XG4vLyAgICAgICAgICAgICAvLyAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKG0gKiA2MCAqIDEwMDApKTtcblxuLy8gICAgICAgICAgICAgLy8gICAgICQuY29va2llKCdtYWluLnBhZ2UuYmFubmVyJywgdHJ1ZSwge1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICBleHBpcmVzOiBkYXRlLFxuLy8gICAgICAgICAgICAgLy8gICAgICAgICBwYXRoOiAnLydcbi8vICAgICAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgfTtcblxuLy8gfSkpKGRvY3VtZW50LmJvZHkpO1xuIl19

var app = app || {};

(function (body) {
    "use strict";

    app.documents = {

        trigger: function trigger() {
            $('body').on('click', '.j-load-documents', function (e) {
                var motion = $(this).data('motion');

                if (motion == 'show') {
                    $(this).data('motion', 'hide');
                    $('#documents').find('.is-motion').removeClass('is-hidden');
                } else {
                    $(this).data('motion', 'show');

                    $('html, body').stop().animate({ 'scrollTop': $('#documents-anchor').offset().top }, 'fast');

                    setTimeout(function () {
                        $('#documents').find('.is-motion').addClass('is-hidden');
                    }, 200);
                }

                $(this).closest('.page-button').toggleClass('_down').toggleClass('_up');
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuZG9jdW1lbnRzLmpzIl0sIm5hbWVzIjpbImFwcCIsImRvY3VtZW50cyIsInRyaWdnZXIiLCIkIiwib24iLCJlIiwibW90aW9uIiwiZGF0YSIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInN0b3AiLCJhbmltYXRlIiwib2Zmc2V0IiwidG9wIiwic2V0VGltZW91dCIsImFkZENsYXNzIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLFNBQUosR0FBZ0I7O0FBRVpDLGlCQUFTLG1CQUNUO0FBQ0lDLGNBQUUsTUFBRixFQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQixtQkFBdEIsRUFBMkMsVUFBU0MsQ0FBVCxFQUFZO0FBQ25ELG9CQUFJQyxTQUFTSCxFQUFFLElBQUYsRUFBUUksSUFBUixDQUFhLFFBQWIsQ0FBYjs7QUFFQSxvQkFBSUQsVUFBVSxNQUFkLEVBQXNCO0FBQ2xCSCxzQkFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxRQUFiLEVBQXVCLE1BQXZCO0FBQ0FKLHNCQUFFLFlBQUYsRUFBZ0JLLElBQWhCLENBQXFCLFlBQXJCLEVBQW1DQyxXQUFuQyxDQUErQyxXQUEvQztBQUNILGlCQUhELE1BSUs7QUFDRE4sc0JBQUUsSUFBRixFQUFRSSxJQUFSLENBQWEsUUFBYixFQUF1QixNQUF2Qjs7QUFFQUosc0JBQUUsWUFBRixFQUFnQk8sSUFBaEIsR0FBdUJDLE9BQXZCLENBQStCLEVBQUUsYUFBYVIsRUFBRSxtQkFBRixFQUF1QlMsTUFBdkIsR0FBZ0NDLEdBQS9DLEVBQS9CLEVBQXFGLE1BQXJGOztBQUVBQywrQkFBVyxZQUFVO0FBQ2pCWCwwQkFBRSxZQUFGLEVBQWdCSyxJQUFoQixDQUFxQixZQUFyQixFQUFtQ08sUUFBbkMsQ0FBNEMsV0FBNUM7QUFDSCxxQkFGRCxFQUVHLEdBRkg7QUFHSDs7QUFFRFosa0JBQUUsSUFBRixFQUFRYSxPQUFSLENBQWdCLGNBQWhCLEVBQWdDQyxXQUFoQyxDQUE0QyxPQUE1QyxFQUFxREEsV0FBckQsQ0FBaUUsS0FBakU7QUFDSCxhQWxCRDtBQW1CSCxTQXZCVzs7QUF5QlpDLGNBQU0sZ0JBQ047QUFDSSxpQkFBS2hCLE9BQUw7QUFDSDs7QUE1QlcsS0FBaEI7QUFnQ0gsQ0FuQ0QsRUFtQ0lpQixTQUFTQyxJQW5DYiIsImZpbGUiOiJfYXBwLmRvY3VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAuZG9jdW1lbnRzID0ge1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1sb2FkLWRvY3VtZW50cycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW90aW9uID0gJCh0aGlzKS5kYXRhKCdtb3Rpb24nKTtcblxuICAgICAgICAgICAgICAgIGlmIChtb3Rpb24gPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZGF0YSgnbW90aW9uJywgJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RvY3VtZW50cycpLmZpbmQoJy5pcy1tb3Rpb24nKS5yZW1vdmVDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ21vdGlvbicsICdzaG93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHsgJ3Njcm9sbFRvcCc6ICQoJyNkb2N1bWVudHMtYW5jaG9yJykub2Zmc2V0KCkudG9wIH0sICdmYXN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RvY3VtZW50cycpLmZpbmQoJy5pcy1tb3Rpb24nKS5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucGFnZS1idXR0b24nKS50b2dnbGVDbGFzcygnX2Rvd24nKS50b2dnbGVDbGFzcygnX3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

var app = app || {};

(function (body) {
    "use strict";

    app.gallery = {

        fancybox: function fancybox(selector) {
            var options = {
                helpers: {
                    overlay: {
                        locked: false
                    },
                    title: {
                        type: 'inside'
                    },
                    buttons: {}
                },
                width: "650px",
                height: "650px",
                autoPlay: false,
                slideshow: true,
                transition: "none"
            };

            if (typeof selector !== 'undefined' && $(selector).length) {
                var $list,
                    list = ['.j-gallery', '.j-timeline', '.j-documents', '.j-floors', '.j-plans'],
                    random = '';

                for (var i = list.length - 1; i >= 0; i--) {
                    random = Math.random();

                    $list = $(list[i]).find('.zoom');
                    $list.prop('rel', 'gallery-' + random);

                    var params = Object.assign(options, {
                        rel: 'gallery-' + random
                    });

                    $list.fancybox(params);
                }
            } else {
                $(".zoom").fancybox(options);
            }

            $('.j-pinch-trigger').fancybox(options);
        },

        init: function init() {
            this.fancybox();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJhcHAiLCJnYWxsZXJ5IiwiZmFuY3lib3giLCJzZWxlY3RvciIsIm9wdGlvbnMiLCJoZWxwZXJzIiwib3ZlcmxheSIsImxvY2tlZCIsInRpdGxlIiwidHlwZSIsImJ1dHRvbnMiLCJ3aWR0aCIsImhlaWdodCIsImF1dG9QbGF5Iiwic2xpZGVzaG93IiwidHJhbnNpdGlvbiIsIiQiLCJsZW5ndGgiLCIkbGlzdCIsImxpc3QiLCJyYW5kb20iLCJpIiwiTWF0aCIsImZpbmQiLCJwcm9wIiwicGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwicmVsIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLE9BQUosR0FBYzs7QUFFVkMsa0JBQVUsa0JBQVNDLFFBQVQsRUFDVjtBQUNJLGdCQUFNQyxVQUFVO0FBQ1pDLHlCQUFTO0FBQ0xDLDZCQUFTO0FBQ0xDLGdDQUFRO0FBREgscUJBREo7QUFJTEMsMkJBQU87QUFDSEMsOEJBQU07QUFESCxxQkFKRjtBQU9MQyw2QkFBUztBQVBKLGlCQURHO0FBVVpDLHVCQUFPLE9BVks7QUFXWkMsd0JBQVEsT0FYSTtBQVlaQywwQkFBVSxLQVpFO0FBYVpDLDJCQUFXLElBYkM7QUFjWkMsNEJBQVk7QUFkQSxhQUFoQjs7QUFpQkEsZ0JBQUksT0FBT1osUUFBUCxLQUFvQixXQUFwQixJQUFtQ2EsRUFBRWIsUUFBRixFQUFZYyxNQUFuRCxFQUNBO0FBQ0ksb0JBQUlDLEtBQUo7QUFBQSxvQkFBV0MsT0FBTyxDQUFFLFlBQUYsRUFBZ0IsYUFBaEIsRUFBK0IsY0FBL0IsRUFBK0MsV0FBL0MsRUFBNEQsVUFBNUQsQ0FBbEI7QUFBQSxvQkFBNEZDLFNBQVMsRUFBckc7O0FBRUEscUJBQUssSUFBSUMsSUFBSUYsS0FBS0YsTUFBTCxHQUFjLENBQTNCLEVBQThCSSxLQUFLLENBQW5DLEVBQXNDQSxHQUF0QyxFQUEyQztBQUN2Q0QsNkJBQVNFLEtBQUtGLE1BQUwsRUFBVDs7QUFFQUYsNEJBQVFGLEVBQUVHLEtBQUtFLENBQUwsQ0FBRixFQUFXRSxJQUFYLENBQWdCLE9BQWhCLENBQVI7QUFDQUwsMEJBQU1NLElBQU4sQ0FBVyxLQUFYLEVBQWtCLGFBQWFKLE1BQS9COztBQUVBLHdCQUFNSyxTQUFTQyxPQUFPQyxNQUFQLENBQWN2QixPQUFkLEVBQXVCO0FBQ2xDd0IsNkJBQUssYUFBYVI7QUFEZ0IscUJBQXZCLENBQWY7O0FBSUFGLDBCQUFNaEIsUUFBTixDQUFldUIsTUFBZjtBQUNIO0FBRUosYUFqQkQsTUFpQk87QUFDSFQsa0JBQUUsT0FBRixFQUFXZCxRQUFYLENBQW9CRSxPQUFwQjtBQUNIOztBQUVEWSxjQUFFLGtCQUFGLEVBQXNCZCxRQUF0QixDQUErQkUsT0FBL0I7QUFDSCxTQTNDUzs7QUE2Q1Z5QixjQUFNLGdCQUNOO0FBQ0ksaUJBQUszQixRQUFMO0FBQ0g7O0FBaERTLEtBQWQ7QUFvREgsQ0F2REQsRUF1REk0QixTQUFTQyxJQXZEYiIsImZpbGUiOiJfYXBwLmdhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLmdhbGxlcnkgPSB7XG5cbiAgICAgICAgZmFuY3lib3g6IGZ1bmN0aW9uKHNlbGVjdG9yKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlbHBlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2lkZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczoge31cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY1MHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjY1MHB4XCIsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmVcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcgJiYgJChzZWxlY3RvcikubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciAkbGlzdCwgbGlzdCA9IFsgJy5qLWdhbGxlcnknLCAnLmotdGltZWxpbmUnLCAnLmotZG9jdW1lbnRzJywgJy5qLWZsb29ycycsICcuai1wbGFucycgXSwgcmFuZG9tID0gJyc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICRsaXN0ID0gJChsaXN0W2ldKS5maW5kKCcuem9vbScpO1xuICAgICAgICAgICAgICAgICAgICAkbGlzdC5wcm9wKCdyZWwnLCAnZ2FsbGVyeS0nICsgcmFuZG9tKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbDogJ2dhbGxlcnktJyArIHJhbmRvbSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGxpc3QuZmFuY3lib3gocGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi56b29tXCIpLmZhbmN5Ym94KG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcuai1waW5jaC10cmlnZ2VyJykuZmFuY3lib3gob3B0aW9ucyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZhbmN5Ym94KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.goals = {

        trigger: function trigger() {
            $('body').on('click', '.j-yandex-goal', function () {
                if ($(this).data('target-name')) {
                    $.each($(this).data('target-name').split(' '), function (key, value) {
                        yaCounter38867515.reachGoal($.trim(value));
                    });
                }
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuZ29hbHMuanMiXSwibmFtZXMiOlsiYXBwIiwiZ29hbHMiLCJ0cmlnZ2VyIiwiJCIsIm9uIiwiZGF0YSIsImVhY2giLCJzcGxpdCIsImtleSIsInZhbHVlIiwieWFDb3VudGVyMzg4Njc1MTUiLCJyZWFjaEdvYWwiLCJ0cmltIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLEtBQUosR0FBWTs7QUFFUkMsaUJBQVMsbUJBQ1Q7QUFDSUMsY0FBRSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGdCQUF0QixFQUF3QyxZQUFXO0FBQy9DLG9CQUFJRCxFQUFFLElBQUYsRUFBUUUsSUFBUixDQUFhLGFBQWIsQ0FBSixFQUFpQztBQUM3QkYsc0JBQUVHLElBQUYsQ0FBT0gsRUFBRSxJQUFGLEVBQVFFLElBQVIsQ0FBYSxhQUFiLEVBQTRCRSxLQUE1QixDQUFrQyxHQUFsQyxDQUFQLEVBQStDLFVBQVNDLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUNoRUMsMENBQWtCQyxTQUFsQixDQUE0QlIsRUFBRVMsSUFBRixDQUFPSCxLQUFQLENBQTVCO0FBQ0gscUJBRkQ7QUFHSDtBQUNKLGFBTkQ7QUFPSCxTQVhPOztBQWFSSSxjQUFNLGdCQUNOO0FBQ0ksaUJBQUtYLE9BQUw7QUFDSDs7QUFoQk8sS0FBWjtBQW9CSCxDQXZCRCxFQXVCSVksU0FBU0MsSUF2QmIiLCJmaWxlIjoiX2FwcC5nb2Fscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAuZ29hbHMgPSB7XG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXlhbmRleC1nb2FsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgndGFyZ2V0LW5hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkLmVhY2goJCh0aGlzKS5kYXRhKCd0YXJnZXQtbmFtZScpLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlhQ291bnRlcjM4ODY3NTE1LnJlYWNoR29hbCgkLnRyaW0odmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpO1xuIl19

// let app = app || {};

// ((body => {
//     "use strict";

//     app.layzr = {

//         init: function()
//         {
//             $('.lazy').lazyLoadXT({
//                 edgeY:  200,
//                 srcAttr: 'data-src'
//             });
//         }

//     };

// }))(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubGF5enIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJfYXBwLmxheXpyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuLy8gKChib2R5ID0+IHtcbi8vICAgICBcInVzZSBzdHJpY3RcIjtcblxuLy8gICAgIGFwcC5sYXl6ciA9IHtcblxuLy8gICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgICQoJy5sYXp5JykubGF6eUxvYWRYVCh7XG4vLyAgICAgICAgICAgICAgICAgZWRnZVk6ICAyMDAsXG4vLyAgICAgICAgICAgICAgICAgc3JjQXR0cjogJ2RhdGEtc3JjJ1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgIH07XG5cbi8vIH0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.location = {

        trigger: function trigger() {
            var $mobile = $('#location-mobile'),
                $content = null,
                number = 0;

            $mobile.find('.j-close').on('click', function () {
                $mobile.addClass('is-disabled');
                $content = $mobile.find('.j-content');

                $content.removeClass('_animate');

                setTimeout(function () {
                    $content.removeClass('_active');

                    $mobile.addClass('is-hidden').removeClass('is-disabled');
                }, 300);
            });

            $('body').on('click', '.j-loc-flag', function () {
                $mobile.removeClass('is-hidden');
                $content = $mobile.find('.j-content');

                $content.find('.j-content-middle').html($(this).closest('.location__item').find('.location__item__content').html());

                $content.addClass('_active');

                number = $(this).data('number');

                $mobile.removeClass('_num-1 _num-2 _num-3 _num-4 _num-5 _num-6').addClass('_num-' + number);

                setTimeout(function () {
                    $content.addClass('_animate');
                }, 10);
            });
        },

        init: function init() {
            // $('.zoom').fancybox();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubG9jYXRpb24uanMiXSwibmFtZXMiOlsiYXBwIiwibG9jYXRpb24iLCJ0cmlnZ2VyIiwiJG1vYmlsZSIsIiQiLCIkY29udGVudCIsIm51bWJlciIsImZpbmQiLCJvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiaHRtbCIsImNsb3Nlc3QiLCJkYXRhIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLFFBQUosR0FBZTs7QUFFWEMsaUJBQVMsbUJBQ1Q7QUFDSSxnQkFBSUMsVUFBVUMsRUFBRSxrQkFBRixDQUFkO0FBQUEsZ0JBQXFDQyxXQUFXLElBQWhEO0FBQUEsZ0JBQXNEQyxTQUFTLENBQS9EOztBQUVBSCxvQkFBUUksSUFBUixDQUFhLFVBQWIsRUFBeUJDLEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFlBQVU7QUFDM0NMLHdCQUFRTSxRQUFSLENBQWlCLGFBQWpCO0FBQ0FKLDJCQUFXRixRQUFRSSxJQUFSLENBQWEsWUFBYixDQUFYOztBQUVBRix5QkFBU0ssV0FBVCxDQUFxQixVQUFyQjs7QUFFQUMsMkJBQVcsWUFBVTtBQUNqQk4sNkJBQVNLLFdBQVQsQ0FBcUIsU0FBckI7O0FBRUFQLDRCQUFRTSxRQUFSLENBQWlCLFdBQWpCLEVBQThCQyxXQUE5QixDQUEwQyxhQUExQztBQUNILGlCQUpELEVBSUcsR0FKSDtBQUtILGFBWEQ7O0FBYUFOLGNBQUUsTUFBRixFQUFVSSxFQUFWLENBQWEsT0FBYixFQUFzQixhQUF0QixFQUFxQyxZQUFVO0FBQzNDTCx3QkFBUU8sV0FBUixDQUFvQixXQUFwQjtBQUNBTCwyQkFBV0YsUUFBUUksSUFBUixDQUFhLFlBQWIsQ0FBWDs7QUFFQUYseUJBQVNFLElBQVQsQ0FBYyxtQkFBZCxFQUFtQ0ssSUFBbkMsQ0FBd0NSLEVBQUUsSUFBRixFQUFRUyxPQUFSLENBQWdCLGlCQUFoQixFQUFtQ04sSUFBbkMsQ0FBd0MsMEJBQXhDLEVBQW9FSyxJQUFwRSxFQUF4Qzs7QUFFQVAseUJBQVNJLFFBQVQsQ0FBa0IsU0FBbEI7O0FBRUFILHlCQUFTRixFQUFFLElBQUYsRUFBUVUsSUFBUixDQUFhLFFBQWIsQ0FBVDs7QUFFQVgsd0JBQVFPLFdBQVIsQ0FBb0IsMkNBQXBCLEVBQWlFRCxRQUFqRSxDQUEwRSxVQUFVSCxNQUFwRjs7QUFFQUssMkJBQVcsWUFBVTtBQUNqQk4sNkJBQVNJLFFBQVQsQ0FBa0IsVUFBbEI7QUFDSCxpQkFGRCxFQUVHLEVBRkg7QUFHSCxhQWZEO0FBZ0JILFNBbkNVOztBQXFDWE0sY0FBTSxnQkFDTjtBQUNJO0FBQ0g7O0FBeENVLEtBQWY7QUE0Q0gsQ0EvQ0QsRUErQ0lDLFNBQVNDLElBL0NiIiwiZmlsZSI6Il9hcHAubG9jYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLmxvY2F0aW9uID0ge1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRtb2JpbGUgPSAkKCcjbG9jYXRpb24tbW9iaWxlJyksICRjb250ZW50ID0gbnVsbCwgbnVtYmVyID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJG1vYmlsZS5maW5kKCcuai1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJG1vYmlsZS5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAkY29udGVudCA9ICRtb2JpbGUuZmluZCgnLmotY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ19hbmltYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJG1vYmlsZS5hZGRDbGFzcygnaXMtaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLWxvYy1mbGFnJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkbW9iaWxlLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAkY29udGVudCA9ICRtb2JpbGUuZmluZCgnLmotY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuZmluZCgnLmotY29udGVudC1taWRkbGUnKS5odG1sKCQodGhpcykuY2xvc2VzdCgnLmxvY2F0aW9uX19pdGVtJykuZmluZCgnLmxvY2F0aW9uX19pdGVtX19jb250ZW50JykuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gJCh0aGlzKS5kYXRhKCdudW1iZXInKTtcblxuICAgICAgICAgICAgICAgICRtb2JpbGUucmVtb3ZlQ2xhc3MoJ19udW0tMSBfbnVtLTIgX251bS0zIF9udW0tNCBfbnVtLTUgX251bS02JykuYWRkQ2xhc3MoJ19udW0tJyArIG51bWJlcik7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LmFkZENsYXNzKCdfYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gJCgnLnpvb20nKS5mYW5jeWJveCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

var app = app || {};

(function (body) {
    "use strict";

    app.mask = {
        phone: function phone(selector) {
            if (document.querySelectorAll(selector).length) {
                $(selector).each(function () {
                    new Cleave($(this), {
                        phone: true,
                        phoneRegionCode: 'ru'
                    });
                });
            }
        },
        init: function init() {
            var _this_ = this;

            _this_.phone('.j-phone-mask');

            $('body').on('popup.after_open', function (e, popup) {
                setTimeout(function () {
                    _this_.phone('.j-phone-mask');
                }, 50);
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubWFzay5qcyJdLCJuYW1lcyI6WyJhcHAiLCJtYXNrIiwicGhvbmUiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIiQiLCJlYWNoIiwiQ2xlYXZlIiwicGhvbmVSZWdpb25Db2RlIiwiaW5pdCIsIl90aGlzXyIsIm9uIiwiZSIsInBvcHVwIiwic2V0VGltZW91dCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxJQUFKLEdBQVc7QUFDUEMsYUFETyxpQkFDREMsUUFEQyxFQUNTO0FBQ1osZ0JBQUlDLFNBQVNDLGdCQUFULENBQTBCRixRQUExQixFQUFvQ0csTUFBeEMsRUFBZ0Q7QUFDNUNDLGtCQUFFSixRQUFGLEVBQVlLLElBQVosQ0FBaUIsWUFBVTtBQUN2Qix3QkFBSUMsTUFBSixDQUFXRixFQUFFLElBQUYsQ0FBWCxFQUFvQjtBQUNoQkwsK0JBQU8sSUFEUztBQUVoQlEseUNBQWlCO0FBRkQscUJBQXBCO0FBSUgsaUJBTEQ7QUFNSDtBQUNKLFNBVk07QUFZUEMsWUFaTyxrQkFZQTtBQUNILGdCQUFNQyxTQUFTLElBQWY7O0FBRUFBLG1CQUFPVixLQUFQLENBQWEsZUFBYjs7QUFFQUssY0FBRSxNQUFGLEVBQVVNLEVBQVYsQ0FBYSxrQkFBYixFQUFpQyxVQUFTQyxDQUFULEVBQVlDLEtBQVosRUFBbUI7QUFDaERDLDJCQUFXLFlBQU07QUFDYkosMkJBQU9WLEtBQVAsQ0FBYSxlQUFiO0FBQ0gsaUJBRkQsRUFFRyxFQUZIO0FBR0gsYUFKRDtBQUtIO0FBdEJNLEtBQVg7QUF5QkgsQ0E1QkQsRUE0QklFLFNBQVNhLElBNUJiIiwiZmlsZSI6Il9hcHAubWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAubWFzayA9IHtcbiAgICAgICAgcGhvbmUoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBDbGVhdmUoJCh0aGlzKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZVJlZ2lvbkNvZGU6ICdydSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IF90aGlzXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIF90aGlzXy5waG9uZSgnLmotcGhvbmUtbWFzaycpO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ3BvcHVwLmFmdGVyX29wZW4nLCBmdW5jdGlvbihlLCBwb3B1cCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdGhpc18ucGhvbmUoJy5qLXBob25lLW1hc2snKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.plans = {

        trigger: function trigger() {
            var $popup = null;

            $('body').on('click', '.j-plans-layout', function (e) {
                e.preventDefault();

                var image = $(this).attr('href'),
                    title = $(this).attr('title');

                $popup = $(template('tmpl-popup-layout', {
                    'title': title,
                    'image': image
                }));

                $popup.addClass('temp');

                $('body').append($popup);

                $.popup.show($popup, false, true);

                return !1;
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAucGxhbnMuanMiXSwibmFtZXMiOlsiYXBwIiwicGxhbnMiLCJ0cmlnZ2VyIiwiJHBvcHVwIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2UiLCJhdHRyIiwidGl0bGUiLCJ0ZW1wbGF0ZSIsImFkZENsYXNzIiwiYXBwZW5kIiwicG9wdXAiLCJzaG93IiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLEtBQUosR0FBWTs7QUFFUkMsaUJBQVMsbUJBQ1Q7QUFDSSxnQkFBSUMsU0FBUyxJQUFiOztBQUVBQyxjQUFFLE1BQUYsRUFBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsaUJBQXRCLEVBQXlDLFVBQVNDLENBQVQsRUFBVztBQUNoREEsa0JBQUVDLGNBQUY7O0FBRUEsb0JBQUlDLFFBQVFKLEVBQUUsSUFBRixFQUFRSyxJQUFSLENBQWEsTUFBYixDQUFaO0FBQUEsb0JBQ0lDLFFBQVFOLEVBQUUsSUFBRixFQUFRSyxJQUFSLENBQWEsT0FBYixDQURaOztBQUdBTix5QkFBU0MsRUFBRU8sU0FBUyxtQkFBVCxFQUE4QjtBQUNyQyw2QkFBU0QsS0FENEI7QUFFckMsNkJBQVNGO0FBRjRCLGlCQUE5QixDQUFGLENBQVQ7O0FBS0FMLHVCQUFPUyxRQUFQLENBQWdCLE1BQWhCOztBQUVBUixrQkFBRSxNQUFGLEVBQVVTLE1BQVYsQ0FBaUJWLE1BQWpCOztBQUVBQyxrQkFBRVUsS0FBRixDQUFRQyxJQUFSLENBQWFaLE1BQWIsRUFBcUIsS0FBckIsRUFBNEIsSUFBNUI7O0FBRUEsdUJBQU8sQ0FBQyxDQUFSO0FBQ0gsYUFsQkQ7QUFtQkgsU0F6Qk87O0FBMkJSYSxjQUFNLGdCQUNOO0FBQ0ksaUJBQUtkLE9BQUw7QUFDSDs7QUE5Qk8sS0FBWjtBQWtDSCxDQXJDRCxFQXFDSWUsU0FBU0MsSUFyQ2IiLCJmaWxlIjoiX2FwcC5wbGFucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAucGxhbnMgPSB7XG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJHBvcHVwID0gbnVsbDtcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1wbGFucy1sYXlvdXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgJHBvcHVwID0gJCh0ZW1wbGF0ZSgndG1wbC1wb3B1cC1sYXlvdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2UnOiBpbWFnZVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcygndGVtcCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJHBvcHVwKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkLnBvcHVwLnNob3coJHBvcHVwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

var app = app || {};

(function (body) {
    "use strict";

    app.popup = {

        init: function init() {
            $.popup.init('.js-open-popup', {
                hashChange: false,
                cssPosition: false,
                wrapper: '.layout-wrapper'
            });
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAucG9wdXAuanMiXSwibmFtZXMiOlsiYXBwIiwicG9wdXAiLCJpbml0IiwiJCIsImhhc2hDaGFuZ2UiLCJjc3NQb3NpdGlvbiIsIndyYXBwZXIiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxLQUFKLEdBQVk7O0FBRVJDLGNBQU0sZ0JBQ047QUFDSUMsY0FBRUYsS0FBRixDQUFRQyxJQUFSLENBQWEsZ0JBQWIsRUFBK0I7QUFDM0JFLDRCQUFZLEtBRGU7QUFFM0JDLDZCQUFhLEtBRmM7QUFHM0JDLHlCQUFTO0FBSGtCLGFBQS9CO0FBS0g7O0FBVE8sS0FBWjtBQWFILENBaEJELEVBZ0JJQyxTQUFTQyxJQWhCYiIsImZpbGUiOiJfYXBwLnBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC5wb3B1cCA9IHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQucG9wdXAuaW5pdCgnLmpzLW9wZW4tcG9wdXAnLCB7XG4gICAgICAgICAgICAgICAgaGFzaENoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY3NzUG9zaXRpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyYXBwZXI6ICcubGF5b3V0LXdyYXBwZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

var app = app || {};

;(function (body) {
    "use strict";

    var _this;

    app.sandwich = {

        config: {
            keyHooks: !1,
            selector: '.js-sandwich-menu',
            wrapper: '.layout-wrapper',
            overlay: '#menu-overlay'
        },

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },

        isOpen: function isOpen() {
            return $('body').hasClass('page-visible');
        },

        hide: function hide() {
            $('body').removeClass('page-open');

            setTimeout(function () {
                $('body').removeClass('page-visible');
            }, 10);

            $(this.config.overlay).css({
                'visibility': 'hidden'
            });
        },

        toggle: function toggle() {
            if ($('body').hasClass('page-visible')) {
                $('body').removeClass('page-open');

                setTimeout(function () {
                    $('body').removeClass('page-visible');
                }, 200);
            } else {
                $('body').addClass('page-open');

                setTimeout(function () {
                    $('body').addClass('page-visible');
                }, 10);
            }

            var visibility = 'visible';

            if (!$('body').hasClass('page-open')) {
                visibility = 'hidden';
            }

            $(_this.config.overlay).css({
                'visibility': visibility
            });
        },

        sandwichTrigger: function sandwichTrigger() {
            _this = this;

            if (_this.config.keyHooks) {
                $('body').on('keydown', function (e) {
                    if (e.keyCode == 27 && _this.isOpen()) {
                        _this.toggle();
                    }
                });
            };

            $('body').on('click', _this.config.selector, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                _this.toggle();
            });
        },

        overlayTrigger: function overlayTrigger() {
            _this = this;

            $('body').on('click', _this.config.overlay, function (e) {
                _this.hide();
            });
        },

        init: function init() {
            this.extend({
                keyHooks: !0,
                selector: '.js-sandwich-menu',
                wrapper: '.layout-wrapper',
                overlay: '#menu-overlay'
            });

            this.sandwichTrigger();
            this.overlayTrigger();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2FuZHdpY2guanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsIl90aGlzIiwic2FuZHdpY2giLCJjb25maWciLCJrZXlIb29rcyIsInNlbGVjdG9yIiwid3JhcHBlciIsIm92ZXJsYXkiLCJleHRlbmQiLCJ4IiwiaXNPcGVuIiwiJCIsImhhc0NsYXNzIiwiaGlkZSIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsImNzcyIsInRvZ2dsZSIsImFkZENsYXNzIiwidmlzaWJpbGl0eSIsInNhbmR3aWNoVHJpZ2dlciIsIm9uIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwib3ZlcmxheVRyaWdnZXIiLCJpbml0IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBQyxDQUFDLFVBQVNDLElBQVQsRUFBYztBQUNaOztBQUVBLFFBQUlDLEtBQUo7O0FBRUFGLFFBQUlHLFFBQUosR0FBZTs7QUFFWEMsZ0JBQVE7QUFDSkMsc0JBQVUsQ0FBQyxDQURQO0FBRUpDLHNCQUFVLG1CQUZOO0FBR0pDLHFCQUFTLGlCQUhMO0FBSUpDLHFCQUFTO0FBSkwsU0FGRzs7QUFTWEMsZ0JBQVEsZ0JBQVNMLE1BQVQsRUFDUjtBQUNJRixvQkFBUSxJQUFSOztBQUVBLGdCQUFJLE9BQU9FLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLG9CQUFJTSxDQUFKO0FBQ0EscUJBQUtBLENBQUwsSUFBVU4sTUFBVixFQUNBO0FBQ0ksd0JBQUksT0FBT0YsTUFBTUUsTUFBTixDQUFhTSxDQUFiLENBQVAsS0FBMkIsV0FBL0IsRUFDSVIsTUFBTUUsTUFBTixDQUFhTSxDQUFiLElBQWtCTixPQUFPTSxDQUFQLENBQWxCO0FBQ1A7QUFDSjtBQUNKLFNBdEJVOztBQXdCWEMsZ0JBQVEsa0JBQ1I7QUFDSSxtQkFBT0MsRUFBRSxNQUFGLEVBQVVDLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBUDtBQUNILFNBM0JVOztBQTZCWEMsY0FBTSxnQkFDTjtBQUNJRixjQUFFLE1BQUYsRUFBVUcsV0FBVixDQUFzQixXQUF0Qjs7QUFFQUMsdUJBQVcsWUFBVTtBQUNqQkosa0JBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLGNBQXRCO0FBQ0gsYUFGRCxFQUVHLEVBRkg7O0FBSUFILGNBQUUsS0FBS1IsTUFBTCxDQUFZSSxPQUFkLEVBQXVCUyxHQUF2QixDQUEyQjtBQUN2Qiw4QkFBYztBQURTLGFBQTNCO0FBR0gsU0F4Q1U7O0FBMENYQyxnQkFBUSxrQkFDUjtBQUNJLGdCQUFJTixFQUFFLE1BQUYsRUFBVUMsUUFBVixDQUFtQixjQUFuQixDQUFKLEVBQ0E7QUFDSUQsa0JBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLFdBQXRCOztBQUVBQywyQkFBVyxZQUFVO0FBQ2pCSixzQkFBRSxNQUFGLEVBQVVHLFdBQVYsQ0FBc0IsY0FBdEI7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSCxhQVBELE1BU0E7QUFDSUgsa0JBQUUsTUFBRixFQUFVTyxRQUFWLENBQW1CLFdBQW5COztBQUVBSCwyQkFBVyxZQUFVO0FBQ2pCSixzQkFBRSxNQUFGLEVBQVVPLFFBQVYsQ0FBbUIsY0FBbkI7QUFDSCxpQkFGRCxFQUVHLEVBRkg7QUFHSDs7QUFFRCxnQkFBSUMsYUFBYSxTQUFqQjs7QUFFQSxnQkFBSSxDQUFDUixFQUFFLE1BQUYsRUFBVUMsUUFBVixDQUFtQixXQUFuQixDQUFMLEVBQ0E7QUFDSU8sNkJBQWEsUUFBYjtBQUNIOztBQUVEUixjQUFFVixNQUFNRSxNQUFOLENBQWFJLE9BQWYsRUFBd0JTLEdBQXhCLENBQTRCO0FBQ3hCLDhCQUFjRztBQURVLGFBQTVCO0FBR0gsU0F2RVU7O0FBeUVYQyx5QkFBaUIsMkJBQ2pCO0FBQ0luQixvQkFBUSxJQUFSOztBQUVBLGdCQUFJQSxNQUFNRSxNQUFOLENBQWFDLFFBQWpCLEVBQ0E7QUFDSU8sa0JBQUUsTUFBRixFQUFVVSxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxDQUFULEVBQVk7QUFDaEMsd0JBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFiLElBQW1CdEIsTUFBTVMsTUFBTixFQUF0QixFQUNBO0FBQ0lULDhCQUFNZ0IsTUFBTjtBQUNIO0FBQ0osaUJBTEQ7QUFNSDs7QUFFRE4sY0FBRSxNQUFGLEVBQVVVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCcEIsTUFBTUUsTUFBTixDQUFhRSxRQUFuQyxFQUE2QyxVQUFTaUIsQ0FBVCxFQUFXO0FBQ3BEQSxrQkFBRUUsY0FBRixHQUFtQkYsRUFBRUUsY0FBRixFQUFuQixHQUF3Q0YsRUFBRUcsV0FBRixHQUFnQixLQUF4RDtBQUNBeEIsc0JBQU1nQixNQUFOO0FBQ0gsYUFIRDtBQUlILFNBM0ZVOztBQTZGWFMsd0JBQWdCLDBCQUNoQjtBQUNJekIsb0JBQVEsSUFBUjs7QUFFQVUsY0FBRSxNQUFGLEVBQVVVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCcEIsTUFBTUUsTUFBTixDQUFhSSxPQUFuQyxFQUE0QyxVQUFTZSxDQUFULEVBQVc7QUFDbkRyQixzQkFBTVksSUFBTjtBQUNILGFBRkQ7QUFHSCxTQXBHVTs7QUFzR1hjLGNBQU0sZ0JBQ047QUFDSSxpQkFBS25CLE1BQUwsQ0FBWTtBQUNSSiwwQkFBVSxDQUFDLENBREg7QUFFUkMsMEJBQVUsbUJBRkY7QUFHUkMseUJBQVMsaUJBSEQ7QUFJUkMseUJBQVM7QUFKRCxhQUFaOztBQU9BLGlCQUFLYSxlQUFMO0FBQ0EsaUJBQUtNLGNBQUw7QUFDSDtBQWpIVSxLQUFmO0FBb0hILENBekhBLEVBeUhFRSxTQUFTNUIsSUF6SFgiLCJmaWxlIjoiX2FwcC5zYW5kd2ljaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhcHAgfHwge307XG5cbjsoZnVuY3Rpb24oYm9keSl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBhcHAuc2FuZHdpY2ggPSB7XG5cbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBrZXlIb29rczogITEsXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5qcy1zYW5kd2ljaC1tZW51JyxcbiAgICAgICAgICAgIHdyYXBwZXI6ICcubGF5b3V0LXdyYXBwZXInLFxuICAgICAgICAgICAgb3ZlcmxheTogJyNtZW51LW92ZXJsYXknXG4gICAgICAgIH0sXG5cbiAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbihjb25maWcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB4O1xuICAgICAgICAgICAgICAgIGZvciAoeCBpbiBjb25maWcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmNvbmZpZ1t4XSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25maWdbeF0gPSBjb25maWdbeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGlzT3BlbjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLXZpc2libGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoaWRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS1vcGVuJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpO1xuICAgICAgICAgICAgfSwgMTApO1xuXG4gICAgICAgICAgICAkKHRoaXMuY29uZmlnLm92ZXJsYXkpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS1vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS12aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3BhZ2Utb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLW9wZW4nKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChfdGhpcy5jb25maWcub3ZlcmxheSkuY3NzKHtcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6IHZpc2liaWxpdHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhbmR3aWNoVHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWcua2V5SG9va3MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gMjcgJiYgX3RoaXMuaXNPcGVuKCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgX3RoaXMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3ZlcmxheVRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgX3RoaXMuY29uZmlnLm92ZXJsYXksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIF90aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5leHRlbmQoe1xuICAgICAgICAgICAgICAgIGtleUhvb2tzOiAhMCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5qcy1zYW5kd2ljaC1tZW51JyxcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiAnLmxheW91dC13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICBvdmVybGF5OiAnI21lbnUtb3ZlcmxheSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNhbmR3aWNoVHJpZ2dlcigpO1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoZG9jdW1lbnQuYm9keSk7Il19

var app = app || {};

(function (body) {
    "use strict";

    app.scroll = {
        init: function init() {
            $('html').scrollWithEase({
                "stepSize": 100,
                "animationTime": 1000
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2Nyb2xsLmpzIl0sIm5hbWVzIjpbImFwcCIsInNjcm9sbCIsImluaXQiLCIkIiwic2Nyb2xsV2l0aEVhc2UiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxNQUFKLEdBQWE7QUFDVEMsWUFEUyxrQkFDRjtBQUNIQyxjQUFFLE1BQUYsRUFBVUMsY0FBVixDQUF5QjtBQUNyQiw0QkFBWSxHQURTO0FBRXJCLGlDQUFpQjtBQUZJLGFBQXpCO0FBSUg7QUFOUSxLQUFiO0FBU0gsQ0FaRCxFQVlJQyxTQUFTQyxJQVpiIiwiZmlsZSI6Il9hcHAuc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC5zY3JvbGwgPSB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICAkKCdodG1sJykuc2Nyb2xsV2l0aEVhc2Uoe1xuICAgICAgICAgICAgICAgIFwic3RlcFNpemVcIjogMTAwLFxuICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uVGltZVwiOiAxMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.show = {

        trigger: function trigger() {
            $('body').on('click', '.j-show', function (e) {
                e.preventDefault();

                var href = $(this).attr('href');

                if ($(href).length) {
                    $(href).addClass('is-show');
                }

                $(this).hide();

                return false;
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2hvdy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzaG93IiwidHJpZ2dlciIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhdHRyIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJoaWRlIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLElBQUosR0FBVzs7QUFFUEMsaUJBQVMsbUJBQ1Q7QUFDSUMsY0FBRSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFNBQXRCLEVBQWlDLFVBQVNDLENBQVQsRUFBWTtBQUN6Q0Esa0JBQUVDLGNBQUY7O0FBRUEsb0JBQUlDLE9BQU9KLEVBQUUsSUFBRixFQUFRSyxJQUFSLENBQWEsTUFBYixDQUFYOztBQUVBLG9CQUFJTCxFQUFFSSxJQUFGLEVBQVFFLE1BQVosRUFBb0I7QUFDaEJOLHNCQUFFSSxJQUFGLEVBQVFHLFFBQVIsQ0FBaUIsU0FBakI7QUFDSDs7QUFFRFAsa0JBQUUsSUFBRixFQUFRUSxJQUFSOztBQUVBLHVCQUFPLEtBQVA7QUFDSCxhQVpEO0FBYUgsU0FqQk07O0FBbUJQQyxjQUFNLGdCQUNOO0FBQ0ksaUJBQUtWLE9BQUw7QUFDSDs7QUF0Qk0sS0FBWDtBQTBCSCxDQTdCRCxFQTZCSVcsU0FBU0MsSUE3QmIiLCJmaWxlIjoiX2FwcC5zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC5zaG93ID0ge1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai1zaG93JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChocmVmKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChocmVmKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTsiXX0=

var app = app || {};

(function (body) {
    "use strict";

    app.slider = {

        trigger: function trigger() {
            $('.j-slider').slick({
                dots: false,
                infinite: true,
                draggable: true,
                fade: true,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="about__slider__navi _prev slick-prev"></button>',
                nextArrow: '<button type="button" class="about__slider__navi _next slick-next"></button>'
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2xpZGVyLmpzIl0sIm5hbWVzIjpbImFwcCIsInNsaWRlciIsInRyaWdnZXIiLCIkIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJkcmFnZ2FibGUiLCJmYWRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxNQUFKLEdBQWE7O0FBRVRDLGlCQUFTLG1CQUNUO0FBQ0lDLGNBQUUsV0FBRixFQUFlQyxLQUFmLENBQXFCO0FBQ2pCQyxzQkFBTSxLQURXO0FBRWpCQywwQkFBVSxJQUZPO0FBR2pCQywyQkFBVyxJQUhNO0FBSWpCQyxzQkFBTSxJQUpXO0FBS2pCQyx1QkFBTyxHQUxVO0FBTWpCQyw4QkFBYyxDQU5HO0FBT2pCQyxnQ0FBZ0IsQ0FQQztBQVFqQkMsMkJBQVcsOEVBUk07QUFTakJDLDJCQUFXO0FBVE0sYUFBckI7QUFXSCxTQWZROztBQWlCVEMsY0FBTSxnQkFDTjtBQUNJLGlCQUFLWixPQUFMO0FBQ0g7O0FBcEJRLEtBQWI7QUF3QkgsQ0EzQkQsRUEyQklhLFNBQVNDLElBM0JiIiwiZmlsZSI6Il9hcHAuc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC5zbGlkZXIgPSB7XG5cbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuai1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhYm91dF9fc2xpZGVyX19uYXZpIF9wcmV2IHNsaWNrLXByZXZcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWJvdXRfX3NsaWRlcl9fbmF2aSBfbmV4dCBzbGljay1uZXh0XCI+PC9idXR0b24+J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.switcher = {

        trigger: function trigger() {
            var $slider = $('#slider'),
                timeout = 6000,
                intervalID = null;

            $('body').on('change', '.j-switcher', function () {
                var daytime = $(this).val();
                $slider.find('.j-slider-item._active').addClass('_last-active');

                $slider.find('.j-slider-item._active').removeClass('_active');

                $slider.find('.j-slider-item').filter('[data-daytime="' + daytime + '"]').addClass('_active');

                setTimeout(function () {
                    $slider.find('.j-slider-item._last-active').removeClass('_last-active');
                }, 1000);
            });

            function startInterval() {
                clearInterval(intervalID);

                return setInterval(function () {
                    $('#slider-next').trigger('click');
                }, timeout);
            }

            function stopInterval(interval) {
                clearInterval(interval);
            }

            intervalID = startInterval();

            $('body').on('click', '.j-slider-navigation', function () {
                var direction = $(this).data('direction');

                stopInterval(intervalID);

                var $group = $slider.find('.j-slider-item._active'),
                    _count = $group.find('.j-slider-image').length - 1,
                    _index = $group.find('.j-slider-image._active').index(),
                    _next = 0;

                if (direction == 'prev') {
                    _next = _index - 1;
                } else if (direction == 'next') {
                    _next = _index + 1;
                }

                if (_next > _count) {
                    _next = 0;
                }

                if (_next < 0) {
                    _next = _count;
                }

                $group.find('.j-slider-image._active').addClass('_last-active');
                $group.find('.j-slider-image._active').removeClass('_active');
                $group.find('.j-slider-image').eq(_next).addClass('_active');

                setTimeout(function () {
                    $group.find('.j-slider-image._last-active').removeClass('_last-active');
                    intervalID = startInterval();
                }, 1000);
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc3dpdGNoZXIuanMiXSwibmFtZXMiOlsiYXBwIiwic3dpdGNoZXIiLCJ0cmlnZ2VyIiwiJHNsaWRlciIsIiQiLCJ0aW1lb3V0IiwiaW50ZXJ2YWxJRCIsIm9uIiwiZGF5dGltZSIsInZhbCIsImZpbmQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmlsdGVyIiwic2V0VGltZW91dCIsInN0YXJ0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzdG9wSW50ZXJ2YWwiLCJpbnRlcnZhbCIsImRpcmVjdGlvbiIsImRhdGEiLCIkZ3JvdXAiLCJfY291bnQiLCJsZW5ndGgiLCJfaW5kZXgiLCJpbmRleCIsIl9uZXh0IiwiZXEiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNQSxPQUFPLEVBQWpCOztBQUVBLENBQUUsZ0JBQVE7QUFDTjs7QUFFQUEsUUFBSUMsUUFBSixHQUFlOztBQUVYQyxpQkFBUyxtQkFDVDtBQUNJLGdCQUFJQyxVQUFVQyxFQUFFLFNBQUYsQ0FBZDtBQUFBLGdCQUE0QkMsVUFBVSxJQUF0QztBQUFBLGdCQUE0Q0MsYUFBYSxJQUF6RDs7QUFFQUYsY0FBRSxNQUFGLEVBQVVHLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLGFBQXZCLEVBQXNDLFlBQVU7QUFDNUMsb0JBQUlDLFVBQVVKLEVBQUUsSUFBRixFQUFRSyxHQUFSLEVBQWQ7QUFDQU4sd0JBQVFPLElBQVIsQ0FBYSx3QkFBYixFQUF1Q0MsUUFBdkMsQ0FBZ0QsY0FBaEQ7O0FBRUFSLHdCQUFRTyxJQUFSLENBQWEsd0JBQWIsRUFBdUNFLFdBQXZDLENBQW1ELFNBQW5EOztBQUVBVCx3QkFBUU8sSUFBUixDQUFhLGdCQUFiLEVBQStCRyxNQUEvQixDQUFzQyxvQkFBb0JMLE9BQXBCLEdBQThCLElBQXBFLEVBQTBFRyxRQUExRSxDQUFtRixTQUFuRjs7QUFFQUcsMkJBQVcsWUFBVTtBQUNqQlgsNEJBQVFPLElBQVIsQ0FBYSw2QkFBYixFQUE0Q0UsV0FBNUMsQ0FBd0QsY0FBeEQ7QUFDSCxpQkFGRCxFQUVHLElBRkg7QUFJSCxhQVpEOztBQWNBLHFCQUFTRyxhQUFULEdBQXlCO0FBQ3JCQyw4QkFBY1YsVUFBZDs7QUFFQSx1QkFBT1csWUFBWSxZQUFVO0FBQ3pCYixzQkFBRSxjQUFGLEVBQWtCRixPQUFsQixDQUEwQixPQUExQjtBQUNILGlCQUZNLEVBRUpHLE9BRkksQ0FBUDtBQUdIOztBQUVELHFCQUFTYSxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM1QkgsOEJBQWNHLFFBQWQ7QUFDSDs7QUFFRGIseUJBQWFTLGVBQWI7O0FBRUFYLGNBQUUsTUFBRixFQUFVRyxFQUFWLENBQWEsT0FBYixFQUFzQixzQkFBdEIsRUFBOEMsWUFBVTtBQUNwRCxvQkFBSWEsWUFBWWhCLEVBQUUsSUFBRixFQUFRaUIsSUFBUixDQUFhLFdBQWIsQ0FBaEI7O0FBRUFILDZCQUFhWixVQUFiOztBQUVBLG9CQUFJZ0IsU0FBU25CLFFBQVFPLElBQVIsQ0FBYSx3QkFBYixDQUFiO0FBQUEsb0JBQ0lhLFNBQVNELE9BQU9aLElBQVAsQ0FBWSxpQkFBWixFQUErQmMsTUFBL0IsR0FBd0MsQ0FEckQ7QUFBQSxvQkFFSUMsU0FBU0gsT0FBT1osSUFBUCxDQUFZLHlCQUFaLEVBQXVDZ0IsS0FBdkMsRUFGYjtBQUFBLG9CQUdJQyxRQUFRLENBSFo7O0FBS0Esb0JBQUlQLGFBQWEsTUFBakIsRUFBeUI7QUFDckJPLDRCQUFRRixTQUFTLENBQWpCO0FBQ0gsaUJBRkQsTUFHSyxJQUFJTCxhQUFhLE1BQWpCLEVBQXlCO0FBQzFCTyw0QkFBUUYsU0FBUyxDQUFqQjtBQUNIOztBQUVELG9CQUFJRSxRQUFRSixNQUFaLEVBQW9CO0FBQ2hCSSw0QkFBUSxDQUFSO0FBQ0g7O0FBRUQsb0JBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ1hBLDRCQUFRSixNQUFSO0FBQ0g7O0FBRURELHVCQUFPWixJQUFQLENBQVkseUJBQVosRUFBdUNDLFFBQXZDLENBQWdELGNBQWhEO0FBQ0FXLHVCQUFPWixJQUFQLENBQVkseUJBQVosRUFBdUNFLFdBQXZDLENBQW1ELFNBQW5EO0FBQ0FVLHVCQUFPWixJQUFQLENBQVksaUJBQVosRUFBK0JrQixFQUEvQixDQUFrQ0QsS0FBbEMsRUFBeUNoQixRQUF6QyxDQUFrRCxTQUFsRDs7QUFFQUcsMkJBQVcsWUFBVTtBQUNqQlEsMkJBQU9aLElBQVAsQ0FBWSw4QkFBWixFQUE0Q0UsV0FBNUMsQ0FBd0QsY0FBeEQ7QUFDQU4saUNBQWFTLGVBQWI7QUFDSCxpQkFIRCxFQUdHLElBSEg7QUFJSCxhQWpDRDtBQWtDSCxTQXBFVTs7QUFzRVhjLGNBQU0sZ0JBQ047QUFDSSxpQkFBSzNCLE9BQUw7QUFDSDs7QUF6RVUsS0FBZjtBQTZFSCxDQWhGRCxFQWdGSTRCLFNBQVNDLElBaEZiIiwiZmlsZSI6Il9hcHAuc3dpdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLnN3aXRjaGVyID0ge1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRzbGlkZXIgPSAkKCcjc2xpZGVyJyksIHRpbWVvdXQgPSA2MDAwLCBpbnRlcnZhbElEID0gbnVsbDtcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnLmotc3dpdGNoZXInLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciBkYXl0aW1lID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlci1pdGVtLl9hY3RpdmUnKS5hZGRDbGFzcygnX2xhc3QtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlci1pdGVtLl9hY3RpdmUnKS5yZW1vdmVDbGFzcygnX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHNsaWRlci5maW5kKCcuai1zbGlkZXItaXRlbScpLmZpbHRlcignW2RhdGEtZGF5dGltZT1cIicgKyBkYXl0aW1lICsgJ1wiXScpLmFkZENsYXNzKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRzbGlkZXIuZmluZCgnLmotc2xpZGVyLWl0ZW0uX2xhc3QtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ19sYXN0LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRJbnRlcnZhbCgpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzbGlkZXItbmV4dCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnRlcnZhbElEID0gc3RhcnRJbnRlcnZhbCgpO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXNsaWRlci1uYXZpZ2F0aW9uJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gJCh0aGlzKS5kYXRhKCdkaXJlY3Rpb24nKTtcblxuICAgICAgICAgICAgICAgIHN0b3BJbnRlcnZhbChpbnRlcnZhbElEKTtcblxuICAgICAgICAgICAgICAgIHZhciAkZ3JvdXAgPSAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlci1pdGVtLl9hY3RpdmUnKSxcbiAgICAgICAgICAgICAgICAgICAgX2NvdW50ID0gJGdyb3VwLmZpbmQoJy5qLXNsaWRlci1pbWFnZScpLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgICAgIF9pbmRleCA9ICRncm91cC5maW5kKCcuai1zbGlkZXItaW1hZ2UuX2FjdGl2ZScpLmluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgIF9uZXh0ID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0ID0gX2luZGV4IC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dCA9IF9pbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9uZXh0ID4gX2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKF9uZXh0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBfbmV4dCA9IF9jb3VudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkZ3JvdXAuZmluZCgnLmotc2xpZGVyLWltYWdlLl9hY3RpdmUnKS5hZGRDbGFzcygnX2xhc3QtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGdyb3VwLmZpbmQoJy5qLXNsaWRlci1pbWFnZS5fYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkZ3JvdXAuZmluZCgnLmotc2xpZGVyLWltYWdlJykuZXEoX25leHQpLmFkZENsYXNzKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRncm91cC5maW5kKCcuai1zbGlkZXItaW1hZ2UuX2xhc3QtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ19sYXN0LWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbElEID0gc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.tabs = {

        trigger: function trigger() {
            $('body').on('click', '.j-tab', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('current')) {
                    var tab = $(this).attr('href').substr(2),
                        wrapper = $(this).data('wrapper');

                    $(this).closest('.j-tab-closest').find('.current').removeClass('current');

                    if ($('#tab-' + wrapper).length) {
                        var $items = $('#tab-' + wrapper).find('.is-item');

                        $items.removeClass('is-show');
                        $items.filter('.' + tab).addClass('is-show');
                    }

                    $(this).addClass('current');

                    var $cover = $(this).closest('.j-tabs-cover');
                    var $content = $cover.find('.j-tabs-content');

                    if ($content.hasClass('active')) {
                        $content.removeClass('animate');

                        setTimeout(function () {
                            $content.removeClass('active');
                        }, 300);
                    }
                }

                return !1;
            });

            $('body').on('click', '.j-tabs-trigger', function () {
                var $cover = $(this).closest('.j-tabs-cover');
                if ($cover.length) {
                    var $content = $cover.find('.j-tabs-content');

                    if ($content.hasClass('active')) {
                        $content.removeClass('animate');

                        setTimeout(function () {
                            $content.removeClass('active');
                        }, 300);
                    } else {
                        $content.addClass('active');

                        setTimeout(function () {
                            $content.addClass('animate');
                        }, 10);
                    }
                }
            });
        },

        init: function init() {
            this.trigger();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAudGFicy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ0YWJzIiwidHJpZ2dlciIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwidGFiIiwiYXR0ciIsInN1YnN0ciIsIndyYXBwZXIiLCJkYXRhIiwiY2xvc2VzdCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImxlbmd0aCIsIiRpdGVtcyIsImZpbHRlciIsImFkZENsYXNzIiwiJGNvdmVyIiwiJGNvbnRlbnQiLCJzZXRUaW1lb3V0IiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLElBQUosR0FBVzs7QUFFUEMsaUJBQVMsbUJBQ1Q7QUFDSUMsY0FBRSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFFBQXRCLEVBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0Esa0JBQUVDLGNBQUY7O0FBRUEsb0JBQUksQ0FBQ0gsRUFBRSxJQUFGLEVBQVFJLFFBQVIsQ0FBaUIsU0FBakIsQ0FBTCxFQUFrQztBQUM5Qix3QkFBSUMsTUFBTUwsRUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSxNQUFiLEVBQXFCQyxNQUFyQixDQUE0QixDQUE1QixDQUFWO0FBQUEsd0JBQ0lDLFVBQVVSLEVBQUUsSUFBRixFQUFRUyxJQUFSLENBQWEsU0FBYixDQURkOztBQUdBVCxzQkFBRSxJQUFGLEVBQVFVLE9BQVIsQ0FBZ0IsZ0JBQWhCLEVBQWtDQyxJQUFsQyxDQUF1QyxVQUF2QyxFQUFtREMsV0FBbkQsQ0FBK0QsU0FBL0Q7O0FBRUEsd0JBQUlaLEVBQUUsVUFBVVEsT0FBWixFQUFxQkssTUFBekIsRUFBaUM7QUFDN0IsNEJBQUlDLFNBQVNkLEVBQUUsVUFBVVEsT0FBWixFQUFxQkcsSUFBckIsQ0FBMEIsVUFBMUIsQ0FBYjs7QUFFQUcsK0JBQU9GLFdBQVAsQ0FBbUIsU0FBbkI7QUFDQUUsK0JBQU9DLE1BQVAsQ0FBYyxNQUFNVixHQUFwQixFQUF5QlcsUUFBekIsQ0FBa0MsU0FBbEM7QUFDSDs7QUFFRGhCLHNCQUFFLElBQUYsRUFBUWdCLFFBQVIsQ0FBaUIsU0FBakI7O0FBRUEsd0JBQUlDLFNBQVNqQixFQUFFLElBQUYsRUFBUVUsT0FBUixDQUFnQixlQUFoQixDQUFiO0FBQ0Esd0JBQUlRLFdBQVdELE9BQU9OLElBQVAsQ0FBWSxpQkFBWixDQUFmOztBQUVBLHdCQUFJTyxTQUFTZCxRQUFULENBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDN0JjLGlDQUFTTixXQUFULENBQXFCLFNBQXJCOztBQUVBTyxtQ0FBVyxZQUFVO0FBQ2pCRCxxQ0FBU04sV0FBVCxDQUFxQixRQUFyQjtBQUNILHlCQUZELEVBRUcsR0FGSDtBQUdIO0FBQ0o7O0FBRUQsdUJBQU8sQ0FBQyxDQUFSO0FBQ0gsYUEvQkQ7O0FBaUNBWixjQUFFLE1BQUYsRUFBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsaUJBQXRCLEVBQXlDLFlBQVU7QUFDL0Msb0JBQUlnQixTQUFTakIsRUFBRSxJQUFGLEVBQVFVLE9BQVIsQ0FBZ0IsZUFBaEIsQ0FBYjtBQUNBLG9CQUFJTyxPQUFPSixNQUFYLEVBQW1CO0FBQ2Ysd0JBQUlLLFdBQVdELE9BQU9OLElBQVAsQ0FBWSxpQkFBWixDQUFmOztBQUVBLHdCQUFJTyxTQUFTZCxRQUFULENBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDN0JjLGlDQUFTTixXQUFULENBQXFCLFNBQXJCOztBQUVBTyxtQ0FBVyxZQUFVO0FBQ2pCRCxxQ0FBU04sV0FBVCxDQUFxQixRQUFyQjtBQUNILHlCQUZELEVBRUcsR0FGSDtBQUdILHFCQU5ELE1BT0s7QUFDRE0saUNBQVNGLFFBQVQsQ0FBa0IsUUFBbEI7O0FBRUFHLG1DQUFXLFlBQVU7QUFDakJELHFDQUFTRixRQUFULENBQWtCLFNBQWxCO0FBQ0gseUJBRkQsRUFFRyxFQUZIO0FBR0g7QUFDSjtBQUNKLGFBcEJEO0FBcUJILFNBMURNOztBQTREUEksY0FBTSxnQkFDTjtBQUNJLGlCQUFLckIsT0FBTDtBQUNIOztBQS9ETSxLQUFYO0FBbUVILENBdEVELEVBc0VJc0IsU0FBU0MsSUF0RWIiLCJmaWxlIjoiX2FwcC50YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC50YWJzID0ge1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuai10YWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdjdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYiA9ICQodGhpcykuYXR0cignaHJlZicpLnN1YnN0cigyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSAkKHRoaXMpLmRhdGEoJ3dyYXBwZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5qLXRhYi1jbG9zZXN0JykuZmluZCgnLmN1cnJlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjdGFiLScgKyB3cmFwcGVyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaXRlbXMgPSAkKCcjdGFiLScgKyB3cmFwcGVyKS5maW5kKCcuaXMtaXRlbScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkaXRlbXMucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtcy5maWx0ZXIoJy4nICsgdGFiKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciAkY292ZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5qLXRhYnMtY292ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjb250ZW50ID0gJGNvdmVyLmZpbmQoJy5qLXRhYnMtY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY29udGVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXRhYnMtdHJpZ2dlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyICRjb3ZlciA9ICQodGhpcykuY2xvc2VzdCgnLmotdGFicy1jb3ZlcicpO1xuICAgICAgICAgICAgICAgIGlmICgkY292ZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY29udGVudCA9ICRjb3Zlci5maW5kKCcuai10YWJzLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY29udGVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.timeline = {
        data: {},

        filter: null,

        years: null,

        months: null,

        _initCarousel: function _initCarousel() {
            var width = $(window).width(),
                slides = $('#timeline-carousel').find('.slick-slide').length;

            if (width > 768 && slides >= 4 || width > 568 && slides >= 3 || width > 375 && slides >= 2 || width < 375 && slides >= 1) {

                $('#timeline-carousel').slick({
                    lazyLoad: 'ondemand',
                    dots: false,
                    infinite: false,
                    draggable: true,
                    speed: 259,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="carousel__navigation _prev slick-prev"></button>',
                    nextArrow: '<button type="button" class="carousel__navigation _next slick-next"></button>',
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 375,
                        settings: {
                            fade: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            }
        },

        _currentYear: function _currentYear() {
            return parseInt(this.years.find('.is-current').data('value'));
        },

        _currentMonth: function _currentMonth() {
            return parseInt(this.months.find('.is-current').data('value'));
        },

        _handle: function _handle() {
            var _this = this;

            this.data.current = this._currentYear();
            this.data.months = [];

            this.months.find('.j-timeline-months-item').each(function (key, item) {
                var years = [],
                    strings = $(item).data('if') + '';

                if (typeof strings !== 'undefined' && strings !== '') {
                    years = strings.split(',');

                    for (var x in years) {
                        years[x] = parseInt(years[x]);
                    }
                }

                _this.data.months.push({
                    item: item,
                    year: years
                });
            });
        },

        _reinitCarousel: function _reinitCarousel() {
            var _self_ = this,
                year = this._currentYear(),
                month = this._currentMonth();

            if ($('#timeline-carousel').hasClass('slick-initialized')) {
                $('#timeline-carousel').slick('unslick');
            }

            $('#timeline-carousel').html('');

            var count = $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).length;

            $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).each(function (k, item) {

                var $item = $(this).clone();

                $('#timeline-carousel').append($item);

                if (k + 1 == count) {
                    setTimeout(function () {
                        _self_._initCarousel();
                    }, 50);
                }
            });

            setTimeout(function () {
                // $.app.initBlock('.j-timeline-slider');
                app.gallery.fancybox('.j-timeline-slider');
            }, 300);
        },

        _changeFirstMonth: function _changeFirstMonth() {
            this.months.find('.j-timeline-months-item.is-active:first').trigger('click');
        },

        _match: function _match() {
            var _this2 = this;

            var _self_ = this;

            this._handle();

            this.months.find('.j-timeline-months-item').removeClass('is-active');

            $.each(this.data.months, function (k, item) {
                if (item.year.indexOf(_this2.data.current) >= 0) {
                    $(item.item).addClass('is-active');
                }
            });

            this.filter.addClass('is-active');
        },

        _events: function _events() {
            var _self_ = this;

            this.years.find('.j-timeline-years-item').on('click', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-years').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._changeFirstMonth();
                    _self_._reinitCarousel();
                }
            });

            this.months.find('.j-timeline-months-item').on('click', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-months').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._reinitCarousel();
                }
            });
        },

        init: function init() {
            var _self_ = this;

            this.filter = $('#timeline-filter');
            this.years = this.filter.find('.j-timeline-years');
            this.months = this.filter.find('.j-timeline-months');

            this._match();
            this._events();

            this._reinitCarousel();
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAudGltZWxpbmUuanMiXSwibmFtZXMiOlsiYXBwIiwidGltZWxpbmUiLCJkYXRhIiwiZmlsdGVyIiwieWVhcnMiLCJtb250aHMiLCJfaW5pdENhcm91c2VsIiwid2lkdGgiLCIkIiwid2luZG93Iiwic2xpZGVzIiwiZmluZCIsImxlbmd0aCIsInNsaWNrIiwibGF6eUxvYWQiLCJkb3RzIiwiaW5maW5pdGUiLCJkcmFnZ2FibGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImZhZGUiLCJfY3VycmVudFllYXIiLCJwYXJzZUludCIsIl9jdXJyZW50TW9udGgiLCJfaGFuZGxlIiwiY3VycmVudCIsImVhY2giLCJrZXkiLCJpdGVtIiwic3RyaW5ncyIsInNwbGl0IiwieCIsInB1c2giLCJ5ZWFyIiwiX3JlaW5pdENhcm91c2VsIiwiX3NlbGZfIiwibW9udGgiLCJoYXNDbGFzcyIsImh0bWwiLCJjb3VudCIsImsiLCIkaXRlbSIsImNsb25lIiwiYXBwZW5kIiwic2V0VGltZW91dCIsImdhbGxlcnkiLCJmYW5jeWJveCIsIl9jaGFuZ2VGaXJzdE1vbnRoIiwidHJpZ2dlciIsIl9tYXRjaCIsInJlbW92ZUNsYXNzIiwiaW5kZXhPZiIsImFkZENsYXNzIiwiX2V2ZW50cyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLFFBQUosR0FBZTtBQUNYQyxjQUFNLEVBREs7O0FBR1hDLGdCQUFRLElBSEc7O0FBS1hDLGVBQU8sSUFMSTs7QUFPWEMsZ0JBQVEsSUFQRzs7QUFTWEMsdUJBQWUseUJBQVc7QUFDdEIsZ0JBQUlDLFFBQVFDLEVBQUVDLE1B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YUFBdEQsRUFBcUU2QyxXQUFyRSxDQUFpRixZQUFqRjs7QUFFQWhELHNCQUFFLElBQUYsRUFBUWtELFFBQVIsQ0FBaUIsWUFBakI7O0FBRUFqQiwyQkFBT2MsTUFBUDtBQUNBZCwyQkFBT0QsZUFBUDtBQUNIO0FBQ0osYUFYRDtBQVlILFNBaExVOztBQWtMWHVCLGNBQU0sZ0JBQ047QUFDSSxnQkFBSXRCLFNBQVMsSUFBYjs7QUFFQSxpQkFBS3RDLE1BQUwsR0FBY0ssRUFBRSxrQkFBRixDQUFkO0FBQ0EsaUJBQUtKLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlRLElBQVosQ0FBaUIsbUJBQWpCLENBQWI7QUFDQSxpQkFBS04sTUFBTCxHQUFjLEtBQUtGLE1BQUwsQ0FBWVEsSUFBWixDQUFpQixvQkFBakIsQ0FBZDs7QUFFQSxpQkFBSzRDLE1BQUw7QUFDQSxpQkFBS0ksT0FBTDs7QUFFQSxpQkFBS25CLGVBQUw7QUFDSDs7QUE5TFUsS0FBZjtBQWtNSCxDQXJNRCxFQXFNSXdCLFNBQVNDLElBck1iIiwiZmlsZSI6Il9hcHAudGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLnRpbWVsaW5lID0ge1xuICAgICAgICBkYXRhOiB7fSxcblxuICAgICAgICBmaWx0ZXI6IG51bGwsXG5cbiAgICAgICAgeWVhcnM6IG51bGwsXG5cbiAgICAgICAgbW9udGhzOiBudWxsLFxuXG4gICAgICAgIF9pbml0Q2Fyb3VzZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCksXG4gICAgICAgICAgICAgICAgc2xpZGVzID0gJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuZmluZCgnLnNsaWNrLXNsaWRlJykubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHdpZHRoID4gNzY4ICYmIHNsaWRlcyA+PSA0KSB8fFxuICAgICAgICAgICAgICAgICh3aWR0aCA+IDU2OCAmJiBzbGlkZXMgPj0gMykgfHxcbiAgICAgICAgICAgICAgICAod2lkdGggPiAzNzUgJiYgc2xpZGVzID49IDIpIHx8XG4gICAgICAgICAgICAgICAgKHdpZHRoIDwgMzc1ICYmIHNsaWRlcyA+PSAxKVxuICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyNTksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fyb3VzZWxfX25hdmlnYXRpb24gX3ByZXYgc2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fyb3VzZWxfX25hdmlnYXRpb24gX25leHQgc2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9jdXJyZW50WWVhcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy55ZWFycy5maW5kKCcuaXMtY3VycmVudCcpLmRhdGEoJ3ZhbHVlJykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9jdXJyZW50TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMubW9udGhzLmZpbmQoJy5pcy1jdXJyZW50JykuZGF0YSgndmFsdWUnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2hhbmRsZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuY3VycmVudCA9IHRoaXMuX2N1cnJlbnRZZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubW9udGhzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtJykuZWFjaCgoa2V5LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gW10sIHN0cmluZ3MgPSAkKGl0ZW0pLmRhdGEoJ2lmJykgKyAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyaW5ncyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3RyaW5ncyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMgPSBzdHJpbmdzLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCBpbiB5ZWFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnNbeF0gPSBwYXJzZUludCh5ZWFyc1t4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubW9udGhzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3JlaW5pdENhcm91c2VsOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIgPSB0aGlzLl9jdXJyZW50WWVhcigpLFxuICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5fY3VycmVudE1vbnRoKCk7XG5cbiAgICAgICAgICAgIGlmICgkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmh0bWwoJycpO1xuXG4gICAgICAgICAgICB2YXIgY291bnQgPSAkKCcjdGltZWxpbmUtY2FjaGUnKS5maW5kKCcuY2Fyb3VzZWxfX2l0ZW0uaXMteWVhci0nKyB5ZWFyICsnLmlzLW1vbnRoLScrbW9udGgpLmxlbmd0aDtcblxuICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhY2hlJykuZmluZCgnLmNhcm91c2VsX19pdGVtLmlzLXllYXItJysgeWVhciArJy5pcy1tb250aC0nK21vbnRoKS5lYWNoKGZ1bmN0aW9uKGssIGl0ZW0pIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gJCh0aGlzKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuYXBwZW5kKCRpdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmICgoaysxKSA9PSBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9pbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vICQuYXBwLmluaXRCbG9jaygnLmotdGltZWxpbmUtc2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgYXBwLmdhbGxlcnkuZmFuY3lib3goJy5qLXRpbWVsaW5lLXNsaWRlcicpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfY2hhbmdlRmlyc3RNb250aDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbS5pcy1hY3RpdmU6Zmlyc3QnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9tYXRjaDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5faGFuZGxlKCk7XG5cbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAkLmVhY2godGhpcy5kYXRhLm1vbnRocywgKGssIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS55ZWFyLmluZGV4T2YodGhpcy5kYXRhLmN1cnJlbnQpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtLml0ZW0pLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9ldmVudHM6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMueWVhcnMuZmluZCgnLmotdGltZWxpbmUteWVhcnMtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2lzLWN1cnJlbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtZmlsdGVyJykuZmluZCgnLmotdGltZWxpbmUteWVhcnMnKS5maW5kKCcuaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fbWF0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9jaGFuZ2VGaXJzdE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fcmVpbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1jdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWZpbHRlcicpLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocycpLmZpbmQoJy5pcy1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9tYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSAkKCcjdGltZWxpbmUtZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLnllYXJzID0gdGhpcy5maWx0ZXIuZmluZCgnLmotdGltZWxpbmUteWVhcnMnKTtcbiAgICAgICAgICAgIHRoaXMubW9udGhzID0gdGhpcy5maWx0ZXIuZmluZCgnLmotdGltZWxpbmUtbW9udGhzJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21hdGNoKCk7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5fcmVpbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

var app = app || {};

(function (body) {
    "use strict";

    app.yandex = {

        drow: function drow() {
            ymaps.ready(function () {
                var YMap,
                    myPlacemark,
                    is_mobile = $(window).width() <= 667;

                YMap = new ymaps.Map('location-map', {
                    center: [45.021188, 38.926667],
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
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAueWFuZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsInlhbmRleCIsImRyb3ciLCJ5bWFwcyIsInJlYWR5IiwiWU1hcCIsIm15UGxhY2VtYXJrIiwiaXNfbW9iaWxlIiwiJCIsIndpbmRvdyIsIndpZHRoIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsImdldCIsIm9wdGlvbnMiLCJzZXQiLCJyaWdodCIsInRvcCIsIlBsYWNlbWFyayIsImdldENlbnRlciIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJhZGQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxNQUFKLEdBQWE7O0FBRVRDLGNBQU0sZ0JBQ047QUFDSUMsa0JBQU1DLEtBQU4sQ0FBWSxZQUFZO0FBQ3BCLG9CQUFJQyxJQUFKO0FBQUEsb0JBQVVDLFdBQVY7QUFBQSxvQkFBdUJDLFlBQVlDLEVBQUVDLE1BQUYsRUFBVUMsS0FBVixNQUFxQixHQUF4RDs7QUFFQUwsdUJBQU8sSUFBSUYsTUFBTVEsR0FBVixDQUFjLGNBQWQsRUFBOEI7QUFDakNDLDRCQUFRLENBQUMsU0FBRCxFQUFXLFNBQVgsQ0FEeUI7QUFFakNDLDBCQUFNLEVBRjJCO0FBR2pDQyw4QkFBVSxDQUFDLGFBQUQsRUFBZ0IsbUJBQWhCO0FBSHVCLGlCQUE5QixDQUFQOztBQU1BVCxxQkFBS1UsU0FBTCxDQUFlQyxPQUFmLENBQXVCLFlBQXZCO0FBQ0FYLHFCQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsWUFBdkI7QUFDQVgscUJBQUtTLFFBQUwsQ0FBY0csR0FBZCxDQUFrQixhQUFsQixFQUFpQ0MsT0FBakMsQ0FBeUNDLEdBQXpDLENBQTZDLE1BQTdDLEVBQXFELE9BQXJEO0FBQ0FkLHFCQUFLUyxRQUFMLENBQWNHLEdBQWQsQ0FBa0IsYUFBbEIsRUFBaUNDLE9BQWpDLENBQXlDQyxHQUF6QyxDQUE2QyxVQUE3QyxFQUF5RCxFQUFFQyxPQUFPLEVBQVQsRUFBYUMsS0FBSyxFQUFsQixFQUF6RDs7QUFFQSxvQkFBSWQsU0FBSixFQUFlO0FBQ1hGLHlCQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkI7QUFDSDs7QUFFRFYsOEJBQWMsSUFBSUgsTUFBTW1CLFNBQVYsQ0FBb0JqQixLQUFLa0IsU0FBTCxFQUFwQixFQUFzQyxFQUF0QyxFQUEwQztBQUNwREMsZ0NBQVksZUFEd0M7QUFFcERDLG1DQUFlLDJCQUZxQztBQUdwREMsbUNBQWUsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUhxQztBQUlwREMscUNBQWlCLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQO0FBSm1DLGlCQUExQyxDQUFkOztBQU9BdEIscUJBQUt1QixVQUFMLENBQWdCQyxHQUFoQixDQUFvQnZCLFdBQXBCO0FBQ0gsYUExQkQ7QUEyQkg7O0FBL0JRLEtBQWI7QUFtQ0gsQ0F0Q0QsRUFzQ0l3QixTQUFTQyxJQXRDYiIsImZpbGUiOiJfYXBwLnlhbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAueWFuZGV4ID0ge1xuXG4gICAgICAgIGRyb3c6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBZTWFwLCBteVBsYWNlbWFyaywgaXNfbW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gNjY3O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFlNYXAgPSBuZXcgeW1hcHMuTWFwKCdsb2NhdGlvbi1tYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzQ1LjAyMTE4OCwzOC45MjY2NjddLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxNixcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IFsnem9vbUNvbnRyb2wnLCAnZnVsbHNjcmVlbkNvbnRyb2wnXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgWU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnbXVsdGlUb3VjaCcpO1xuICAgICAgICAgICAgICAgIFlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgICAgICAgICAgICBZTWFwLmNvbnRyb2xzLmdldCgnem9vbUNvbnRyb2wnKS5vcHRpb25zLnNldCgnc2l6ZScsICdzbWFsbCcpO1xuICAgICAgICAgICAgICAgIFlNYXAuY29udHJvbHMuZ2V0KCd6b29tQ29udHJvbCcpLm9wdGlvbnMuc2V0KCdwb3NpdGlvbicsIHsgcmlnaHQ6IDEwLCB0b3A6IDUwIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzX21vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBZTWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdkcmFnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFlNYXAuZ2V0Q2VudGVyKCksIHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy9pbWFnZXMvdmlub2dyYWQtbG9nby5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTQxLCAxNDFdLFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstNzEsIC03MV1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

$(document).ready(function () {
    app.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekJDLFFBQUlDLElBQUo7QUFDSCxDQUZEIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBhcHAuaW5pdCgpO1xufSk7Il19
