(function($) {
    $.fn.menumaker = function(options) {      
      var mobile_menu = $(this), settings = $.extend({
        format: "dropdown",
        sticky: false
      }, options);
         return this.each(function() {
         mobile_menu.find('li ul').parent().addClass('has-sub');
         var multiTg = function() {
            mobile_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            mobile_menu.find(".hash").parent().addClass('hash-has-sub');
            mobile_menu.find('.submenu-button').on('click', function() {
                $(this).toggleClass('submenu-opened');
                if ($(this).siblings('ul').hasClass('open-sub')) {
                    $(this).siblings('ul').removeClass('open-sub').hide('fadeToggle');
                    $(this).siblings('ul').hide('fadeToggle');                                     
                }
                else {
                    $(this).siblings('ul').addClass('open-sub').hide('fadeToggle');
                    $(this).siblings('ul').slideToggle().show('fadeToggle');
                }
            });
         };
        if (settings.format === 'multitoggle') multiTg();
        else mobile_menu.addClass('dropdown');
        if (settings.sticky === true) mobile_menu.css('position', 'fixed');
        var resizeFix = function() {
             if ($( window ).width() > 991) {
                 mobile_menu.find('ul').show('fadeToggle');
                 mobile_menu.find('ul.sub-menu').hide('fadeToggle');
             }          
         };
        resizeFix();
        return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($){
$(document).ready(function(){

$("#mobile_menu").menumaker({
   format: "multitoggle"
});

});
})(jQuery);
