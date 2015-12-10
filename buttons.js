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
    addClickListenerToCancelButton: addClickListenerToCancelButton,
    addClickListenerToFindButton: addClickListenerToFindButton,
    addClickListenerToCloseButton: addClickListenerToCloseButton,
    addClickListenerToEditButton: addClickListenerToEditButton,
    addClickListenerToRemoveButton: addClickListenerToRemoveButton,
    addClickListenerToChangeButton: addClickListenerToChangeButton
  }

})();
    

    // $('[class="month"]').on('click', '.day', function daySelector(event) {
    //       var targetElement = event.target;
    //       event.stopPropagation();
    //       event.preventDefault();
    //       $('[id="blankform"]').addClass('show').removeClass('hide');
    //       var getId = $(targetElement).attr('id');
    //       var textValue = newObject[getId];
    //       $('[id="comments"]').val(textValue);
    //       targetObject[getId] = getId;
    //       prevId = getId;
    //       prevTargetElement = targetElement;
    // });

    // $('[class="month"]').on('click', '.highlight', function dayHighlight(event) {
    //       var targetElement = event.target;
    //       event.stopPropagation();
    //       event.preventDefault();
    //       $('[id="emptyForm"]').addClass('show').removeClass('hide');
    //       $('[id="blankform"]').addClass('hide').removeClass('show');
    //       var getId = $(targetElement).attr('id');
    //       var textValue = newObject[getId];
    //       $('[class="emptyParagraph"]').text(textValue);
    //       prevId = targetObject[getId];
    // });

    // $('[value="save"]').on('click', function save(event) {
    //       event.preventDefault();
    //       newObject[prevId] = $('[id="comments"]').val();
    //       $('[id="' + prevId + '"]').addClass('highlight');
    //       $('[id="blankform"]').addClass('hide').removeClass('show');
    // });

    // $('[value="cancel"]').on('click', function cancel(event) {
    //       event.preventDefault();
    //       $('[id="blankform"]').addClass('hide').removeClass('show');
    // });

    // $('[value="close"]').on('click', function close(event) {
    //       event.preventDefault();
    //       $('[id="emptyForm"]').addClass('hide').removeClass('show');
    // });

    // $('[value="edit"]').on('click', function edit(event) {
    //       event.preventDefault();
    //       $('[id="blankform"]').addClass('show').removeClass('hide');
    //       $('[id="emptyForm"]').addClass('hide').removeClass('show');
    // });

    // $('[value="remove"]').on('click', function remove(event) {
    //       event.preventDefault();
    //       newObject[targetObject[prevId]] = "";
    //       $('[id="' + prevId + '"]').removeClass('highlight');
    //       $('[id="emptyForm"]').addClass('hide').removeClass('show');
    // });