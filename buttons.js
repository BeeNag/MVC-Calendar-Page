var Buttons = (function initButtons() {

  function showCalendarView() {
    return $('[class="calendarView"]').removeClass('hide').addClass('show');
  }

  function hideCalendarView() {
    return $('[class="calendarView"]').addClass('hide');
  }

  function highlightDayCell() {
    return $('[class="day"]').addClass('highlight');
  }

  function removeHighlightFromDayCell() {
    return $('[class="day highlight"]').removeClass('highlight');
  }

  function showEventForm() {
    return $('[class="formDiv hide"]').removeClass('hide').addClass('show');
  }

  function hideEventForm() {
    return $('[class="formDiv show"]').removeClass('show').addClass('hide');
  }

  function showEditForm() {
    return $('[class="changeDiv hide"]').removeClass('hide').addClass('show');
  }

  function hideEditForm() {
    return $('[class="changeDiv show"]').removeClass('show').addClass('hide');
  }

  function addClickListenerToDayCells() {
    $().on('click', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    })
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
    addClickListenerToSaveButton: addClickListenerToSaveButton,
    addClickListenerToCancelButton: addClickListenerToCancelButton,
    addClickListenerToCloseButton: addClickListenerToCloseButton,
    addClickListenerToEditButton: addClickListenerToEditButton,
    addClickListenerToRemoveButton: addClickListenerToRemoveButton,
    addClickListenerToChangeButton: addClickListenerToChangeButton
  }

})
    
    // var prevId = 0;
    // var prevTargetElement = 0;
    

    

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