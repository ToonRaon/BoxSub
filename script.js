// 글자색, 배경색 select option에 색깔 추가
function addColorToSelect(select) {
	var colors = ["133046", "15959F", "F1E4B3", "EC9770", "C7402D", "8C2131", "053138", "0C2733", "1C1A21", "FFFCF0", "DB067A", "020241", "01C09C", "F1F1F1", "F84904", "00261C", "044C29", "167F39", "45BF55", "97ED8A", "323642", "091324", "F4F5F2", "D7D8DB", "8C8B8F", "F6DDDF", "EEC9C8", "DF9C9D", "687A80", "B9C6CA", "284854", "32CCB0", "FFEDA7", "FF5C58", "512C54", "BF112E", "02173E", "13A399", "F5941C", "F16541", "450003", "5C0002", "94090D", "D40D12", "FF1D23", "3B0030", "F53A33", "FF9130", "FEDD55", "128C87"];

	for(var i in colors) {
	$(select).append($("<option value='#" + colors[i] + "'></option>"));
	}
}

addColorToSelect($("#text-color-select"));
addColorToSelect($("#box-color-select"));



function setCssVar(key, value) {
	document.documentElement.style.setProperty(key, value);
}

function getCssVar(key) {
	return window.getComputedStyle(document.documentElement).getPropertyValue(key);
}

// .input-auto-width의 가로 길이를 글자에 맞게 자동 조정
$(".input-auto-width").each(function() {
	setInputAutoWidth(this);

	$(this).keypress(function(e) {
		setInputAutoWidth(this, true);
	});

	$(this).keyup(function(e) {
		setInputAutoWidth(this, true);
	});
});

function setInputAutoWidth(input, test) {
	var value = $(input).val();

	$("body").append("<div id='virtual-input'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 20; // 여백 10px

	$(input).css("width", inputWidth);
	$("#virtual-input").remove();
}

function setSubInputAutoWidth(input) { // setInputAutoWidth와 차이점은 가상 input에도 폰트 등을 적용하는지 여부에 대한 차이
	var value = $(input).val();

	$("body").append("<div id='virtual-sub-input'>" + value + "</div>");
	
	var inputWidth = $("#virtual-sub-input").width() + 20; // 여백 10px

	$(input).css("width", inputWidth);
	$("#virtual-sub-input").remove();
}

function setSubInputAutoHeight(input) {
	var value = $(input).val();
	$("body").append("<div id='virtual-sub-input'>" + value + "</div>");
	
	var inputHeight = $("#virtual-sub-input").height() + 20; // 여백 10px

	$(input).css("height", inputHeight);
	$("#virtual-sub-input").remove();
}

setSubInputAutoWidth($(".sub-box"));
setSubInputAutoHeight($(".sub-box"));



// 폰트 옵션 select에 해당 폰트 적용하기
var fontSelect = $("#font-select");
var fontSelectChildren = $(fontSelect).children();

setCssVar("--sub-font-family", $(fontSelect).val() + ", sans-serif");
for(var i = 0; i < fontSelectChildren.length; i++) {
	$(fontSelectChildren[i]).css("font-family", $(fontSelectChildren[i]).val() + ", sans-serif");
}

$(fontSelect).change(function() {
	setCssVar("--sub-font-family", $(this).val() + ", sans-serif");
});



// 폰트 스타일 select에 해당 폰트 적용하기
var fontStyleSelect = $("#font-style-select");
var fontStyleSelectChildren = $(fontStyleSelect).children();

setCssVar("--sub-font-style", $(fontStyleSelect).val());
for(var i = 0; i < fontStyleSelectChildren.length; i++) {
	$(fontStyleSelectChildren[i]).css("font-style", $(fontStyleSelectChildren[i]).val());
}

$(fontStyleSelect).change(function() {
	setCssVar("--sub-font-style", $(this).val());
});



// 폰트 굵기 select에 해당 폰트 적용하기
var fontWeightSelect = $("#font-weight-select");
var fontWeightSelectChildren = $(fontWeightSelect).children();

setCssVar("--sub-font-weight", $(fontWeightSelect).val());
for(var i = 0; i < fontWeightSelectChildren.length; i++) {
	$(fontWeightSelectChildren[i]).css("font-weight", $(fontWeightSelectChildren[i]).val());
}

$(fontWeightSelect).change(function() {
	setCssVar("--sub-font-weight", $(this).val());
});




// 폰트 색깔 옵션 select에 해당 색깔 적용하기
var colorSelect = $("#text-color-select");
var colorSelectChildren = $(colorSelect).children();

setCssVar("--sub-text-color", $(colorSelect).val());
for(var i = 0; i < colorSelectChildren.length; i++) {
	$(colorSelectChildren[i]).css("background-color", $(colorSelectChildren[i]).val());
}

$(colorSelect).change(function() {
	setCssVar("--sub-text-color", $(this).val());
});



// 배경 색깔 옵션 select에 해당 색깔 적용하기
var boxSelect = $("#box-color-select");
var boxSelectChildren = $(boxSelect).children();

setCssVar("--sub-background-color", $(boxSelect).val());
for(var i = 0; i < boxSelectChildren.length; i++) {
	$(boxSelectChildren[i]).css("background-color", $(boxSelectChildren[i]).val()) ;
}

$(boxSelect).change(function() {
	setCssVar("--sub-background-color", $(this).val());
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

// css 초기값 설정
setCssVar("--sub-font-size", setPx($("#font-size-input").val()));
setCssVar("--sub-padding-top", setPx($("#padding-top-input").val()));
setCssVar("--sub-padding-right", setPx($("#padding-right-input").val()));
setCssVar("--sub-padding-bottom", setPx($("#padding-bottom-input").val()));
setCssVar("--sub-padding-left", setPx($("#padding-left-input").val()));
setCssVar("--sub-box-width", setPx($("#box-width-input").val()));
setCssVar("--sub-box-height", setPx($("#box-height-input").val()));
// setCssVar("--sub-canvas-width", setPx($("#canvas-width-input").val()));
// setCssVar("--sub-canvas-height", setPx($("#canvas-height-input").val()));
// css 변경값 설정
$("#font-size-input").keyup(function(e) { setCssVar("--sub-font-size", setPx($(this).val())); setSubBoxWidthAndHeight($(".sub-box")); });
$("#padding-top-input").keyup(function(e) { setCssVar("--sub-padding-top", setPx($(this).val())); });
$("#padding-right-input").keyup(function(e) { setCssVar("--sub-padding-right", setPx($(this).val())); });
$("#padding-bottom-input").keyup(function(e) { setCssVar("--sub-padding-bottom", setPx($(this).val())); });
$("#padding-left-input").keyup(function(e) { setCssVar("--sub-padding-left", setPx($(this).val())); });
$("#box-width-input").keyup(function(e) { setCssVar("--sub-box-width", setPx($(this).val())); });
$("#box-height-input").keyup(function(e) { setCssVar("--sub-box-height", setPx($(this).val())); });
$("#canvas-length-select").change(function() {
	var value = $(this).val();
	var width = value.split("X")[0];
	var height = value.split("X")[1];

	setCssVar("--sub-canvas-width", setPx(width));
	setCssVar("--sub-canvas-height", setPx(height));

	refreshSubBox();
});
// $("#canvas-width-input").keyup(function(e) { setCssVar("--sub-canvas-width", setPx($(this).val())); });
// $("#canvas-height-input").keyup(function(e) {
// 	setCssVar("--sub-canvas-height", setPx($(this).val()));
// 	refreshSubBox();
// });

// 그냥 px값은 px를 붙여서 반환, auto는 px 붙이지 않고 auto만 반환
function setPx(value) {
	return (value === "auto" ? "auto" : value + "px");
}

function refreshSubBox() {
	if(getCssVar("--sub-canvas-height") === "auto") {
		$("#canvas").css("position", "initial");
		return;
	}

	// 자막을 아래에 놓기
	$(".canvas-container").css("height", $("#canvas-height-input").val() + "px");
	$("#canvas").css("position", "absolute")
				.css("bottom", "10%")
				.css("left", "calc(" + ($(".canvas-container").width() / 2) + "px - "  + ($("#canvas").width() / 2) + "px)");
}



$(".sub-box").each(function() {
	$(this).keydown(function() { setSubBoxWidthAndHeight(this); });
});
$(".sub-box").each(function() {
	$(this).keyup(function() { setSubBoxWidthAndHeight(this); });
});
function setSubBoxWidthAndHeight(subBox) {
	if($("#box-width-input").val() === "auto") {
		setSubInputAutoWidth($(subBox));
	} else {
		$($(".sub-box")).css("width", getCssVar("--sub-box-width"));
	}
	if($("#box-height-input").val() === "auto") {
		setSubInputAutoHeight($(subBox));
	} else {
		$($(subBox)).css("height", getCssVar("--sub-box-height"));
	}

	refreshSubBox();
}


$("#save").click(function() {
	html2canvas($(".canvas-container"), {
	    onrendered: function(canvas) {
	      $("body").append($("<a id='temp'></a>"));
	      $("#temp").attr("href", canvas.toDataURL());
	      $("#temp").attr("download", "sub.png");
	      $("#temp")[0].click();
	      $("#temp").remove();
	    }
  	});
});

$(".single-duo-sub-radio").change(function() {
	if($(this).val() === "1줄 자막") {
		$("#sub-box2").css("display", "none");
	} else if($(this).val() === "2줄 자막") {
		$("#sub-box2").css("display", "block");
	}
});