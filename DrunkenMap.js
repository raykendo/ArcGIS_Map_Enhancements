(function () {
	var head = document.head || document.getElementsByTagName("head")[0],
		css = [
			" .leaflet-zoom-anim .leaflet-zoom-animated, .leaflet-container, .leaflet-tile-container, .leaflet-map-pane, .leaflet-tile-pane, .map .container .layersDiv>div>div, .map .container .layersDiv .layerTile, .map .container .layersDiv>div { -webkit-transition: -webkit-transform",
			", transform",
			", width",
			", height",
			"; transition: -webkit-transform",
			", transform",
			", opacity",
			", width",
			", height",
			" !important;}"
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