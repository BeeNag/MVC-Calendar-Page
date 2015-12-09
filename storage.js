var Storage = (function initStorage() {

	var eventStorage = {};

    function getEventStorage() {
        return eventStorage;
    }

    function createMegaStorageObject(element) {
        dateArray.forEach(element) {
            eventStorage[element] = {dayEvent: '', longitude: 51.50722, latitude: -0.12750};
        }
    }

    return {
        getEventStorage: getEventStorage,
        createMegaStorageObject: createMegaStorageObject
    }

})();