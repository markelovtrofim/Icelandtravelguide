$(function() {

    var header = $("#header");
  	var	header_text = $("#header_text");
  	var nav_item = $(".nav_item");
    var header_logo_icon = $(".header_logo_icon");
    var header_logo_text = $(".header_logo_text");
    var	scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if( scrollOffset >= 50 ) {
            header.addClass("header_fixed");
            header_text.addClass("header_text_fixed");
            nav_item.removeClass("nav_item");
            nav_item.addClass("nav_item_fixed");
            header_logo_icon.removeClass("header_logo_icon");
            header_logo_icon.addClass("header_logo_icon_fixed");
            header_logo_text.removeClass("header_logo_text");
            header_logo_text.addClass("header_logo_text_fixed");
        } else {
            header.removeClass("header_fixed");
            header_text.removeClass("header_text_fixed");
            nav_item.addClass("nav_item");
            nav_item.removeClass("nav_item_fixed");
            header_logo_icon.addClass("header_logo_icon");
            header_logo_icon.removeClass("header_logo_icon_fixed");
            header_logo_text.addClass("header_logo_text");
            header_logo_text.removeClass("header_logo_text_fixed");
		}
	}
});
