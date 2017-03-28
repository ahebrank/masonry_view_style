(function($) {
    'use strict';

    Drupal.behaviors.masonry_view_style = {
        attach: function (context, settings) {
            $('.mvs-grid').masonry({
                itemSelector: '.mvs-grid-item',
            });

            // reload on ajax update
            if (context !== document) {
                $('.mvs-grid').masonry('reloadItems');
                $('.mvs-grid').masonry('layout');
            }
        }
    }

})(jQuery);
