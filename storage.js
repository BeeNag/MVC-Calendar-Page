var Storage = (function initStorage() {

	var days = getDateArray();
	var key;
	var newObject = {};
    var prevId = 0;
    var prevTargetElement = 0;
    var targetObject = {};

	for (i = 0; i < days.length; i++) {
        key = dateArray[i];
        newObject[key] = "";
        targetObject[key] = "key";
    }

})();