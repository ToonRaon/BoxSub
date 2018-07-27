$(".input-auto-width").on('keydown', function(e) {
	var value = $(".input-auto-width").val();
	$("body").append("<div id='virtual-input' style='display: inline-block;'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 10; // 여백 10px

	$(".input-auto-width").css("width", inputWidth);
	$("#virtual-input").remove();
});