var Map = (function initCreateMap() { 

	var map;
	var marker;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
		   zoom: 17,
		   center: Storage.getLongLatFromMegaStorageObject()
		});
	}

	function initMapMarker() {

		marker = new google.maps.Marker({
		    position: Storage.getLongLatFromMegaStorageObject(),
		    map: map,
		    title: 'Your Position'
		});
	}

	return {
		initMap: initMap,
		initMapMarker: initMapMarker
	};


})();