var SliderMapView = (function initSliderMapView() {

	var showEvents = $('<div class="container"></div>');
    $('body').append(showEvents);
    var viewRow = $('<div class="row"></div>');
    $('[class="container"]').append(viewRow);
    var title = $('<div class="col-xs-12 col-sm-12 col-md-12"></div>');
    $('[class="row"]').append(title);
    var para = $('<p><label for="amount">December</label><input id="amount"></p>');
    $('[class="col-xs-12 col-sm-12 col-md-12"]').append(para);
    var range = $('<div id="slider-range"></div>');
    $('[class="col-xs-12 col-sm-12 col-md-12"]').append(range);
    var slider = $(function() {
      $("#slider-range").slider({
        range: true,
        min: 1,
        max: 30,
        values: [1,30],
        slide: function(event, ui) {
          $("#amount").val(ui.values[0] + "th - " + ui.values[1] + "th");
        }
      });
      $("#amount").val($("#slider-range").slider("values", 0) + "th - " + $("#slider-range").slider("values", 1) + "th");
    });
    
})();