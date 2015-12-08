var EventForm = (function initEventForm() {

	function renderEventForm() {
		var formContainer = $('<div id="blankform" class="formDiv hide"></div>');
		var eventForm = $('<form class="eventForm"></form>');
		var dayHeader = createDayHeader();
		var subHeader = createSubHeader();
		var eventEntry = createTextEntryArea();
		var saveButton = createSaveButton();
		var cancelButton = createCancelButton();
		$('body').append(formContainer);
		$('[class="formDiv"]').append(eventForm);
		$('[class="eventForm"]').append(dayHeader);
		$('[class="eventForm"]').append(subHeader);
		$('[class="eventForm"]').append(eventEntry);
		$('[class="eventForm"]').append(saveButton);
		$('[class="eventForm"]').append(cancelButton);
	}

	function createDayHeader() {
		var header = ('<h1 class="header">' + Model.convertMonthNumberToString(Model.getMonth()) + ' ' + Model.getYear() + '</h1>');
		return header;
	}

	function createSubHeader() {
		var subTitle = ('<h3 class="sub-header">ENTER YOUR FULL DAY EVENT</h3>');
		return subTitle;
	}

	function createTextEntryArea() {
		var textEntry = ('<textarea rows="15" cols="40" name="comments" id="comments"></textarea>');
		return textEntry;
	}

	function createSaveButton() {
		var firstButton = ('<button value="save" class="saveButton">Save</button>');
		return firstButton;
	}

	function createCancelButton() {
		var secondButton = ('<button value="cancel" class="cancelButton">Cancel</button');
		return secondButton;
	}

	return {
		renderEventForm: renderEventForm,
		createDayHeader: createDayHeader,
		createSubHeader: createSubHeader,
		createTextEntryArea: createTextEntryArea,
		createSaveButton: createSaveButton,
		createCancelButton: createCancelButton
	};
})();
