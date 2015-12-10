var EventForm = (function initEventForm() {

	function renderEventForm() {
		var formContainer = $('<div id="blankform" class="formDiv hide"></div>');
		var eventForm = $('<form class="eventForm"></form>');
		var dayHeader = createDayHeader();
		var subHeader = createSubHeader();
		var eventEntry = createTextEntryArea();
		var placeMap = insertMap();
		var saveButton = createSaveButton();
		var cancelButton = createCancelButton();
		var findButton = createFindButton();
		$('body').append(formContainer);
		$('[id="blankform"]').append(eventForm);
		$('[class="eventForm"]').append(dayHeader);
		$('[class="eventForm"]').append(subHeader);
		$('[class="eventForm"]').append(eventEntry);
		$('[class="eventForm"]').append(saveButton);
		$('[class="eventForm"]').append(cancelButton);
		$('[class="eventForm"]').append(insertMap);
		$('[class="eventForm"]').append(findButton);
	}

	function createDayHeader() {
		var header = ('<h1 class="header"></h1>');
		return header;
	}

	function setDayHeaderText(day, month, year) {
		$('[class="header"]').text(day + ' of ' + ' ' + Model.convertMonthNumberToString(Model.getMonth()) + ' ' + Model.getYear());
	}

	function createSubHeader() {
		var subTitle = ('<h3 class="sub-header">ENTER YOUR FULL DAY EVENT</h3>');
		return subTitle;
	}

	function createTextEntryArea() {
		var textEntry = ('<textarea rows="15" cols="40" name="comments" id="comments"></textarea>');
		return textEntry;
	}

	function insertMap() {
		var insertMap = ('<div class="map-container"><div id="map"></div></div>')
		return insertMap;
	}

	function createSaveButton() {
		var firstButton = ('<button data-save-button value="save" class="saveButton">Save</button>');
		return firstButton;
	}

	function createCancelButton() {
		var secondButton = ('<button data-cancel-button value="cancel" class="cancelButton">Cancel</button');
		return secondButton;
	}

	function createFindButton() {
		var thirdButton = ('<input type="text" name="postcode" placeholder="Please enter postcode" id="postcode"></input><button data-find-button type="submit" value="find" class="findButton">Find</button>');
		return thirdButton;
	}

	return {
		renderEventForm: renderEventForm,
		createDayHeader: createDayHeader,
		setDayHeaderText: setDayHeaderText,
		createSubHeader: createSubHeader,
		createTextEntryArea: createTextEntryArea,
		insertMap: insertMap,
		createSaveButton: createSaveButton,
		createCancelButton: createCancelButton
	};
})();
