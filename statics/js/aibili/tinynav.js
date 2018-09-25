/*! http://tinynav.viljamis.com v1.03 by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {

    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : true // Boolean: Show header instead of the active item
    }, options);

    return this.each(function () {

      // Used for namespacing
      i++;

      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace + ' ' + namespace_i);

      if ($nav.is('ul,ol')) {

        if (settings.header) {
          $select.append(
            $('<option/>').text('菜单...')
          );
        }

        // Build options
        var options = '';

        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            var disabled = '';
            var sign_left = '';
            var sign_right = '';
            if($(this).attr('href') == 'javascript://') {
              var disabled = 'disabled';
              var sign_left = '| ';
              var sign_right = ' |'
            }
            options +=
              '<option value="' + $(this).attr('href') + '" '+ disabled +'>' +
              sign_left + $(this).text() + sign_right +
              '</option>';
          });

        // Append options into a select
        $select.append(options);

        // Select the active item
        if (!settings.header) {
          $select
            .find(':eq(' + $(l_namespace_i + ' li')
            .index($(l_namespace_i + ' li.' + settings.active)) + ')')
            .attr('selected', true);
        }

        // Change window location
        $select.change(function () {
          window.location.href = $(this).val();
        });

        // Inject select
        $(l_namespace_i).after($select);

      }

    });

  };
})(jQuery, this, 0);