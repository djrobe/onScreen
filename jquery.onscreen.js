// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.com/onScreen
//
// Released under MIT license.
;(function($) {
	var w = $(window);
	
	var onscreen = function(elem) {
		var viewport_top = w.scrollTop(),
			viewport_height = w.height(),
			viewport_bottom = viewport_top + viewport_height,
			el = $(elem),
			top = el.offset().top,
			height = el.height(),
			bottom = top + height;

		return (top >= viewport_top && top < viewport_bottom)
		    || (bottom > viewport_top && bottom <= viewport_bottom)
		    || (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
	};
	
	$.expr[":"].onscreen = onscreen;
	
	$.expr[":"].offscreen = function(elem) {
		return !onscreen(elem);
	};
	
	$.expr[":"].belowscreen = function(elem) {
		var viewport_bottom = w.scrollTop() + w.height(),
			el = $(elem),
			top = el.offset().top;

		return top > viewport_bottom;
	};
	
	$.expr[":"].abovescreen = function(elem) {
		var viewport_top = w.scrollTop(),
			el = $(elem),
			bottom = el.offset().top + el.height();

		return bottom < viewport_top;
	}
})(jQuery);

