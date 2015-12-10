var Storage = (function initStorage() {

	var eventStorage = {};

    function getEventStorage() {
        return eventStorage;
    }

    function createMegaStorageObject(element) {
        dateArray.forEach(element) {
            eventStorage[element] = {text: '', longitude: null, latitude: null};
        }
    }

    return {
        getEventStorage: getEventStorage,
        createMegaStorageObject: createMegaStorageObject
    }

})();