var Controller = (function initController() {

	Model.createDateArray();
    CalendarView.renderTable();
    EventForm.renderEventForm();
	EditForm.renderEditForm();

	Buttons.addClickListenerToDayCells('data-calendar-day', function addClickHandlerToDayCells(day) {
		EventForm.setDayHeaderText(day);
		Buttons.showEventForm();
	});

	Buttons.addClickListenerToSaveButton('data-save-button', function addClickHandlerToSaveButton() {
		Buttons.hideEventForm();
		Buttons.highlightDayCell(Buttons.getCalendarDay());
	});

	Buttons.addClickListenerToCancelButton('data-cancel-button', function addClickHandlerToCancelButton() {
		Buttons.hideEventForm();
	});

	Buttons.addClickListenerToFindButton('data-find-button', function addClickHandlerToFindButton() {
		Map.initMap();
	})

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
