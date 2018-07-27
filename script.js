// .input-auto-width의 가로 길이를 글자에 맞게 자동 조정
$(".input-auto-width").on('keydown', function(e) {
	var value = $(".input-auto-width:focus").val();
	$("body").append("<div id='virtual-input' style='display: inline-block;'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 10; // 여백 10px

	$(".input-auto-width:focus").css("width", inputWidth);
	$("#virtual-input").remove();
});



// 폰트 옵션 select에 해당 폰트 적용하기
var fontSelect = $("#font-select");
var fontSelectChildren = $(fontSelect).children();

$(fontSelect).css("font-family", $(fontSelect).val() + ", sans-serif");
for(var i = 0; i < fontSelectChildren.length; i++) {
	$(fontSelectChildren[i]).css("font-family", $(fontSelectChildren[i]).val() + ", sans-serif") ;
}

$(fontSelect).change(function() {
	$(fontSelect).css("font-family", $(this).val() + ", sans-serif");
});



// 폰트 색깔 옵션 select에 해당 색깔 적용하기
var colorSelect = $("#text-color-select");
var colorSelectChildren = $(colorSelect).children();

$(colorSelect).css("background-color", $(colorSelect).val());

for(var i = 0; i < colorSelectChildren.length; i++) {
	$(colorSelectChildren[i]).css("background-color", $(colorSelectChildren[i]).val()) ;
}

$(colorSelect).change(function() {
	$(colorSelect).css("background-color", $(this).val());
});



// 배경 색깔 옵션 select에 해당 색깔 적용하기
var boxSelect = $("#box-color-select");
var boxSelectChildren = $(boxSelect).children();

$(boxSelect).css("background-color", $(boxSelect).val());

for(var i = 0; i < boxSelectChildren.length; i++) {
	$(boxSelectChildren[i]).css("background-color", $(boxSelectChildren[i]).val()) ;
}

$(boxSelect).change(function() {
	$(boxSelect).css("background-color", $(this).val());
});

