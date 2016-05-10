(function($) {
	$.fn.responsiveTables = function() {
		var result = "", tds = $("#" + $(this).attr("id") + " td"), trs = $("#" + $(this).attr("id") + " tr").length;
		$.each(tds, function(i, v) {
			result += "<div"
			if ($(this).attr("class")) result += " class='" + $(this).attr("class") + "'";
			result += " style='";
			if ($(this).attr("style")) result += $(this).attr("style");
			result += "; float: left;'>" + $(this).html().replace(/<td.*?(?=>)/g, "") + "</div>";
			if ((i + 1) % (tds.length / trs) == 0) {
				result += "<div style='clear: left'></div>";
			}
		});
		this.html(result); return this;
	}
}(jQuery));
