
    
    var prevId = 0;
    var prevTargetElement = 0;
    

    

    $('[class="month"]').on('click', '.day', function daySelector(event) {
          var targetElement = event.target;
          event.stopPropagation();
          event.preventDefault();
          $('[id="blankform"]').addClass('show').removeClass('hide');
          var getId = $(targetElement).attr('id');
          var textValue = newObject[getId];
          $('[id="comments"]').val(textValue);
          targetObject[getId] = getId;
          prevId = getId;
          prevTargetElement = targetElement;
    });

    $('[class="month"]').on('click', '.highlight', function dayHighlight(event) {
          var targetElement = event.target;
          event.stopPropagation();
          event.preventDefault();
          $('[id="emptyForm"]').addClass('show').removeClass('hide');
          $('[id="blankform"]').addClass('hide').removeClass('show');
          var getId = $(targetElement).attr('id');
          var textValue = newObject[getId];
          $('[class="emptyParagraph"]').text(textValue);
          prevId = targetObject[getId];
    });

    $('[value="save"]').on('click', function save(event) {
          event.preventDefault();
          newObject[prevId] = $('[id="comments"]').val();
          $('[id="' + prevId + '"]').addClass('highlight');
          $('[id="blankform"]').addClass('hide').removeClass('show');
    });

    $('[value="cancel"]').on('click', function cancel(event) {
          event.preventDefault();
          $('[id="blankform"]').addClass('hide').removeClass('show');
    });

    $('[value="close"]').on('click', function close(event) {
          event.preventDefault();
          $('[id="emptyForm"]').addClass('hide').removeClass('show');
    });

    $('[value="edit"]').on('click', function edit(event) {
          event.preventDefault();
          $('[id="blankform"]').addClass('show').removeClass('hide');
          $('[id="emptyForm"]').addClass('hide').removeClass('show');
    });

    $('[value="remove"]').on('click', function remove(event) {
          event.preventDefault();
          newObject[targetObject[prevId]] = "";
          $('[id="' + prevId + '"]').removeClass('highlight');
          $('[id="emptyForm"]').addClass('hide').removeClass('show');
    });