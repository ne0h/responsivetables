(function($) {
	$.fn.responsiveTables = function() {
		var result = "", tds = $("td"), trs = $("tr").length;
		$.each(tds, function(i, v) {
			result += "<div class='" + $(this).attr("class") + "' style='" + $(this).attr("style") + "; float: left;'>" + $(this).html().replace(/<td.*?(?=>)/g, "") + "</div>";
			if ((i + 1) % (tds.length / trs) == 0) {
			result += "<div style='clear: left'></div>";
			}
		});
		this.html(result); return this;
	}
}(jQuery));