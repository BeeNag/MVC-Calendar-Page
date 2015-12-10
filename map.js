var Map = (function initCreateMap() { 

	var map;
	function initMap() {

		  map = new google.maps.Map($('[id="map"]'), {
		    zoom: 17,
		    center: PostcodeRequest.getPostcode()
		  });

		  var marker = new google.maps.Marker({
		    position: PostcodeRequest.getPostcode(),
		    map: map,
		    title: 'Your Position'
		  });
		}

	return {
		initMap: initMap
	}


})();