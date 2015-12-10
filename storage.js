var Storage = (function initStorage() {

	var megaStorageObject = {};


    function getMegaStorageObject() {
        return megaStorageObject;
    }

    function createMegaStorageObject() {
        getDateArray(12, 2015).forEach(function (element) {
            megaStorageObject[element] = {text: '', longitude: null, latitude: null};
        });
    }

    function setDayEventOfMegaStorageObject(textValue, day) {
        getMegaStorageObject()[Buttons.getCalendarDay()].text = textValue;
    }

    function getDayEventFromMegaStorageObject() {
        return {
            'text': getMegaStorageObject()[Buttons.getCalendarDay()].text
        };
    }

    function setLongLatOfMegaStorageObject(data, day) {
       getMegaStorageObject()[Buttons.getCalendarDay()].longitude = data.result.longitude;
       getMegaStorageObject()[Buttons.getCalendarDay()].latitude = data.result.latitude;
    }

    function getLongLatFromMegaStorageObject() {
        return {
            'lng': getMegaStorageObject()[Buttons.getCalendarDay()].longitude,
            'lat': getMegaStorageObject()[Buttons.getCalendarDay()].latitude
        };
    }

    return {
        getMegaStorageObject: getMegaStorageObject,
        createMegaStorageObject: createMegaStorageObject,
        setDayEventOfMegaStorageObject: setDayEventOfMegaStorageObject,
        getDayEventFromMegaStorageObject: getDayEventFromMegaStorageObject,
        setLongLatOfMegaStorageObject: setLongLatOfMegaStorageObject,
        getLongLatFromMegaStorageObject: getLongLatFromMegaStorageObject
    }

})();