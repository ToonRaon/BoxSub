// .input-auto-width의 가로 길이를 글자에 맞게 자동 조정
$(".input-auto-width").on('keydown', function(e) {
	var value = $(".input-auto-width").val();
	$("body").append("<div id='virtual-input' style='display: inline-block;'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 10; // 여백 10px

	$(".input-auto-width").css("width", inputWidth);
	$("#virtual-input").remove();
});

// 폰트 옵션에 해당 폰트 적용하기
$("#font-select").each(function() {
	$(this).css("font-family", $(this).val() + " sans-serif") ;
});