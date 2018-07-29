function setCssVar(key, value) {
	document.documentElement.style.setProperty(key, value);
}

function getCssVar(key) {
	document.documentElement.style.getPropertyValue(key);
}

// .input-auto-width의 가로 길이를 글자에 맞게 자동 조정
$(".input-auto-width").each(function() {
	setInputAutoWidth(this);

	$(this).keydown(function(e) {
		setInputAutoWidth(this);
	});
});

function setInputAutoWidth(input) {
	var value = $(input).val();
	$("body").append("<div id='virtual-input'>" + value + "</div>");
	
	var inputWidth = $("#virtual-input").width() + 20; // 여백 10px

	$(input).css("width", inputWidth);
	$("#virtual-input").remove();
}

function setInputAutoHeight(input) {
	var value = $(input).val();
	$("body").append("<div id='virtual-input'>" + value + "</div>");
	
	var inputHeight = $("#virtual-input").height() + 20; // 여백 10px

	$(input).css("height", inputHeight);
	$("#virtual-input").remove();
}

setInputAutoWidth($(".sub-box"));
setInputAutoHeight($(".sub-box"));



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
setCssVar("--sub-font-size", $("#font-size-input").val() + "px");
setCssVar("--sub-padding-top", $("#padding-top-input").val() + "px");
setCssVar("--sub-padding-right", $("#padding-right-input").val() + "px");
setCssVar("--sub-padding-bottom", $("#padding-bottom-input").val() + "px");
setCssVar("--sub-padding-left", $("#padding-left-input").val() + "px");
setCssVar("--sub-box-width", $("#box-width-input").val() + "px");
setCssVar("--sub-box-height", $("#box-height-input").val() + "px");
setCssVar("--sub-canvas-width", $("#canvas-width-input").val() + "px");
setCssVar("--sub-canvas-height", $("#canvas-height-input").val() + "px");
// css 변경값 설정
$("#font-size-input").change(function(e) { setCssVar("--sub-font-size", $(this).val() + "px"); });
$("#padding-top-input").change(function(e) { setCssVar("--sub-padding-top", $(this).val() + "px");  });
$("#padding-right-input").change(function(e) { setCssVar("--sub-padding-right", $(this).val() + "px"); });
$("#padding-bottom-input").change(function(e) { setCssVar("--sub-padding-bottom", $(this).val() + "px"); });
$("#padding-left-input").change(function(e) { setCssVar("--sub-padding-left", $(this).val() + "px"); });
$("#box-width-input").change(function(e) { setCssVar("--sub-box-width", $(this).val() + "px"); });
$("#box-height-input").change(function(e) { setCssVar("--sub-box-height", $(this).val() + "px"); });
$("#canvas-width-input").change(function(e) { setCssVar("--sub-canvas-width", $(this).val() + "px"); });
$("#canvas-height-input").change(function(e) {
	setCssVar("--sub-canvas-height", $(this).val() + "px");
	refreshSubBox();
});

function refreshSubBox() {
	if($("#canvas-height-input").val() === "auto") return;
	
	// 자막을 아래에 놓기
	$(".canvas-container").css("height", $("#canvas-height-input").val() + "px");
	$("#canvas").css("position", "absolute")
				.css("bottom", "10%")
				.css("left", "calc(" + ($(".canvas-container").width() / 2) + "px - "  + ($("#canvas").width() / 2) + "px)");
}



$(".sub-box").keydown(function(e) {
	if($("#box-width-input").val() === "auto") {
		setInputAutoWidth(this);
	} else {
		$(this).css("width", getCssVar("--sub-box-width"));
	}
	if($("#box-height-input").val() === "auto") {
		setInputAutoHeight(this);
	} else {
		$(this).css("height", getCssVar("--sub-box-height"));
	}

	refreshSubBox();
});


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