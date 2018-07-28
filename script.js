// .input-auto-width의 가로 길이를 글자에 맞게 자동 조정
$(".input-auto-width").each(function() {
	setInputAutoWidth(this);
	console.log(this);
	$(this).keydown(function(e) {
		setInputAutoWidth(this);
	});
});

function setInputAutoWidth(input) {
	var value = $(input).val();
	$("body").append("<div id='virtual-input' style='display: inline-block;'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 10; // 여백 10px

	$(input).css("width", inputWidth);
	$("#virtual-input").remove();
}



// 폰트 옵션 select에 해당 폰트 적용하기
var fontSelect = $("#font-select");
var fontSelectChildren = $(fontSelect).children();

$(fontSelect).css("font-family", $(fontSelect).val() + ", sans-serif");
$(":root")[0].style.setProperty("--main-font-family", $(fontSelect).val() + ", sans-serif");
for(var i = 0; i < fontSelectChildren.length; i++) {
	$(fontSelectChildren[i]).css("font-family", $(fontSelectChildren[i]).val() + ", sans-serif");
}

$(fontSelect).change(function() {
	$(fontSelect).css("font-family", $(this).val() + ", sans-serif");
	$(":root")[0].style.setProperty("--main-font-family", $(this).val() + ", sans-serif");
});



// 폰트 스타일 select에 해당 폰트 적용하기
var fontStyleSelect = $("#font-style-select");
var fontStyleSelectChildren = $(fontStyleSelect).children();

$(fontStyleSelect).css("font-style", $(fontStyleSelect).val());
for(var i = 0; i < fontStyleSelectChildren.length; i++) {
	$(fontStyleSelectChildren[i]).css("font-style", $(fontStyleSelectChildren[i]).val());
}

$(fontStyleSelect).change(function() {
	$(fontStyleSelect).css("font-style", $(this).val());
});



// 폰트 굵기 select에 해당 폰트 적용하기
var fontWeightSelect = $("#font-weight-select");
var fontWeightSelectChildren = $(fontWeightSelect).children();

$(fontWeightSelect).css("font-weight", $(fontWeightSelect).val());
for(var i = 0; i < fontWeightSelectChildren.length; i++) {
	$(fontWeightSelectChildren[i]).css("font-weight", $(fontWeightSelectChildren[i]).val());
}

$(fontWeightSelect).change(function() {
	$(fontWeightSelect).css("font-weight", $(this).val());
});




// 폰트 색깔 옵션 select에 해당 색깔 적용하기
var colorSelect = $("#text-color-select");
var colorSelectChildren = $(colorSelect).children();

$(colorSelect).css("background-color", $(colorSelect).val());

for(var i = 0; i < colorSelectChildren.length; i++) {
	$(colorSelectChildren[i]).css("background-color", $(colorSelectChildren[i]).val());
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


// $(.my-select) 속성
$(".my-select").each(function() {
	changeInputArrowColor(this);
});
$(".my-select").each(function() {
	this.onchange = function() {
		changeInputArrowColor(this);
	}
});

function changeInputArrowColor(select) {
	var rgb = rgbString2array($(select).css("background-color"));
	if(rgbToHsl(rgb[0], rgb[1], rgb[2])[2] < 0.5) {
		$(select).css("color", "white");
	} else {
		$(select).css("color", "black");
	}
}