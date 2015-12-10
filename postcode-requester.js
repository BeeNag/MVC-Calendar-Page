var PostcodeRequest = (function initPostcodeRequest() {

	var myLatLng = {lat: 51.5409673157405, lng: -0.177987762377016};
	var userInput; 

	function getPostcode(postcode, finished) {
		var xhr = new XMLHttpRequest();
	        xhr.open('GET', encodeURI('http://api.postcodes.io/postcodes/' + postcode + ''));
	        xhr.onload = function isLoading() {
			  if (xhr.status !== 200) {
			    console.log('Not OK: ' + xhr.status);
			    return;
	}

	    var data = JSON.parse(xhr.responseText);
	    finished(null, data);
        };
        xhr.send();
        }

    function getUserInput() {
    	userInput = $('[id="postcode"]').val();
    	return userInput;
    }

	return {
		getPostcode: getPostcode,
		getUserInput: getUserInput
	};

})();