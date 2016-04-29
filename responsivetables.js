(function ($) {
	$.fn.responsiveTables = function() {
		this.html(this.html().replace(/<table.*?(?=>).+/g, "").replace(/<\/table>/g, "").replace(/<tr>/g, "").replace(/<\/tr>/g, "<div style='clear: left'></div>").replace(/<tbody>/g, "").replace(/<\/tbody>/g, "").replace(/<\/td>/g, "</div>").replace(/<td.*?(?=>)/g, "<div style='float: left;'"));
		return this;
	}
}(jQuery));