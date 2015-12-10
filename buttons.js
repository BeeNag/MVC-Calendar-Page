var Buttons = (function initButtons() {

  var calendarDay;

  function showCalendarView() {
    return $('[class="calendarView"]').addClass('show').removeClass('hide');
  }

  function hideCalendarView() {
    return $('[class="calendarView"]').addClass('hide');
  }

  function highlightDayCell(calendarDay) {
    return $('[data-calendar-day="' + calendarDay + '"]').addClass('highlight');
  }

  function removeHighlightFromDayCell() {
    return $('[class="day highlight"]').removeClass('highlight');
  }

  function showEventForm() {
    return $('[id="blankform"]').addClass('show').removeClass('hide');
  }

  function hideEventForm() {
    return $('[id="blankform"]').addClass('hide').removeClass('show');
  }

  function showEditForm() {
    return $('[id="emptyForm"]').addClass('show').removeClass('hide');
  }

  function hideEditForm() {
    return $('[id="emptyForm"]').addClass('hide').removeClass('show');
  }

  function addClickListenerToDayCells(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      calendarDay = $(this).attr(selector);
      callback(calendarDay);
    });
  }

  function getCalendarDay() {
    return calendarDay;
  } 

  function setCurrentCalendarDay(currentCalendarDay) {
    calendarDay = currentCalendarDay;
  }

  function addClickListenerToSaveButton(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function getTextFromTextArea() {
    var textValue = $('[id="comments"]').val()
    return textValue;
  }

  function addClickListenerToCancelButton(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addClickListenerToFindButton(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addClickListenerToCloseButton(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addClickListenerToEditButton(selector, callback) {
    $('data-edit-button').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addClickListenerToRemoveButton(selector, callback) {
    $('data-remove-button').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addClickListenerToChangeButton(selector, callback) {
    $('data-change-button').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  return {
    showCalendarView: showCalendarView,
    hideCalendarView: hideCalendarView,
    highlightDayCell: highlightDayCell,
    removeHighlightFromDayCell: removeHighlightFromDayCell,
    showEventForm: showEventForm,
    hideEventForm: hideEventForm,
    showEditForm: showEditForm,
    hideEditForm: hideEditForm,
    addClickListenerToDayCells: addClickListenerToDayCells,
    getCalendarDay: getCalendarDay,
    setCurrentCalendarDay: setCurrentCalendarDay,
    addClickListenerToSaveButton: addClickListenerToSaveButton,
    getTextFromTextArea: getTextFromTextArea,
    addClickListenerToCancelButton: addClickListenerToCancelButton,
    addClickListenerToFindButton: addClickListenerToFindButton,
    addClickListenerToCloseButton: addClickListenerToCloseButton,
    addClickListenerToEditButton: addClickListenerToEditButton,
    addClickListenerToRemoveButton: addClickListenerToRemoveButton,
    addClickListenerToChangeButton: addClickListenerToChangeButton
  }

})();