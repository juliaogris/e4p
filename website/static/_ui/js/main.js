/*******************************************************************************

    CSS on Sails Framework
    Title: Education 4 Progress
    Author: XHTMLized.com
    Date: January 2013

*******************************************************************************/

var App = App || (function($) {

    var Utils   = {},
        Public  = {};

    Utils = {
        settings: {
            debug: true,
            init: function() {
                $("body").removeClass("no-js");
            }
        },

        log: function(what) {
            if (Utils.settings.debug) {
                console.log(what);
            }
        }
    };
    var _log = Utils.log;

    Public = {
        /**
         * Initialize script
         */
        init: function() {
            Utils.settings.init();
            Public.softScroll('a[href^="#"]');
        },

        /**
         * Add soft scroll for specified element
         * @param  {selector} el Element that triggers scroll
         */
        softScroll: function(el) {
            _log("a");
            $(el).on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop:$(this.hash).offset().top
                }, 500);
            });
        }
    };

    return Public;

})(window.jQuery);

jQuery(document).ready(App.init);