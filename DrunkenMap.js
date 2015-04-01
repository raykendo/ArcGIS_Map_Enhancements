(function () {
	var head = document.head || document.getElementsByTagName("head")[0],
		css = [
			".map .container .layersDiv .layerTile, .map .container .layersDiv>div { -webkit-transition: -webkit-transform",
			", transform",
			", width",
			", height",
			"; transition: -webkit-transform",
			", transform",
			", width",
			", height",
			";} .map .container .layersDiv>div>div {-webkit-transition: opacity",
			", transform",
			", -webkit-transform",
			" !important; transition: opacity",
			", transform",
			", -webkit-transform",
			" !important; }"
		].join(" 3s ease 500ms"),
		style = document.createElement("style");
	style.type = "text/css";
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
}());