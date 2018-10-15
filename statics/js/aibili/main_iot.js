(function() {
    $(document).ready(function() {

        $('.carousel').carousel();

        $(window).on('scroll', function() {
            if($(this).scrollTop() > 0){
                $('.main-menu').addClass('scrolling');
            } else {
                $('.main-menu').removeClass('scrolling');
			}
        })
    })
})(jQuery);
