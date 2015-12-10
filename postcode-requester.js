var PostcodeRequest = (function initPostcodeRequest() {

	var myLatLng = {lat: 51.5409673157405, lng: -0.177987762377016}; 

	function getPostcode(postcode) {
		var xhr = new XMLHttpRequest();
	        xhr.open('GET', encodeURI('http://api.postcodes.io/postcodes/' + postcode + ''));
	        xhr.onload = function() {
			  if (xhr.status !== 200) {
			    console.log('Not OK: ' + xhr.status);
			    return;
	}

	    var data = JSON.parse(xhr.responseText);

        myLatLng.lng = data.result.longitude;
        myLatLng.lat = data.result.latitude; 
        initMap(); 
        };
        xhr.send();
        }

	return {
		getPostcode:getPostcode
	}

})();