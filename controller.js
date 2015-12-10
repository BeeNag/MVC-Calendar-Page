var Controller = (function initController() {

	Model.createDateArray();
	Storage.createMegaStorageObject();
    CalendarView.renderTable();
    EventForm.renderEventForm();
	EditForm.renderEditForm();

	Buttons.addClickListenerToDayCells('data-calendar-day', function addClickHandlerToDayCells(day) {

		if (Buttons.getTextFromTextArea() === ''){
			EventForm.setDayHeaderText(day);
		    Buttons.showEventForm();
		} else {
			EditForm.setDayHeaderText(day);
			Buttons.showEditForm();
			EditForm.getEvent(Storage.getDayEventFromMegaStorageObject().text);
		}
	});

	Buttons.addClickListenerToSaveButton('data-save-button', function addClickHandlerToSaveButton() {
		Storage.setDayEventOfMegaStorageObject(Buttons.getTextFromTextArea(), Buttons.getCalendarDay());
		Buttons.hideEventForm();
		Buttons.highlightDayCell(Buttons.getCalendarDay());
	});

	Buttons.addClickListenerToCancelButton('data-cancel-button', function addClickHandlerToCancelButton() {
		Buttons.hideEventForm();
	});

	Buttons.addClickListenerToFindButton('data-find-button', function addClickHandlerToFindButton() {
		PostcodeRequest.getPostcode(PostcodeRequest.getUserInput(), function callWhenFinished(error, data) {

		if (error) {
			return;
		}
			Storage.setLongLatOfMegaStorageObject(data, Buttons.getCalendarDay())
			Map.initMap();
			Map.initMapMarker(Storage.getLongLatFromMegaStorageObject(Buttons.getCalendarDay()));
		});
	});

	Buttons.addClickListenerToCloseButton('data-close-button', function addClickHandlerToCloseButton() {
		Buttons.hideEditForm();
	});

	Buttons.addClickListenerToEditButton('data-edit-button', function addClickHandlerToEditButton() {
		Buttons.hideEditForm();
		Buttons.showEventForm();
	});

	Buttons.addClickListenerToRemoveButton('data-remove-button', function addClickHandlerToRemoveButton() {
		Buttons.hideEditForm();
		Buttons.removeHighlightFromDayCell();
	});
	
})();
