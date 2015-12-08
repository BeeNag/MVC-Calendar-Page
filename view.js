var CalendarView = (function initCalendarView() {
    var calendarDays = groupDaysIntoWeeks(Model.createDateArray());
    var weekdays = Model.getDays(); 
    var dataRow;
       
    function renderTable() {
      var container = $('<div class="calendarView"></div>'); 
      var table = $('<table class="calendar" cellpadding="4" cellspacing="3"></table>');
      var monthRow = $(renderMonthRow(renderCalendarMonth));
      var weekRow = $(renderWeekdayRow(getCalendarWeekdays));
      var dayRow = $(renderCalendarDays(getCalendarDays()));
      $('body').append(container);
      $('[class="calendarView"]').append(table);
      $('[class="calendar"]').append(monthRow);
      $('[class="calendar"]').append(weekRow);
      $('[class="calendar"]').append(dayRow);
      $('body').append('<button value="change" class="changeView">Change View</button>')
    }
  
    function renderMonthRow(renderCalendarMonth) {
      var mainHeaderRow = ('<tr class="dateHeader">' + renderCalendarMonth() + '</tr>');
      return mainHeaderRow;
    }
  
    function renderWeekdayRow(renderWeekday) {
      var subHeaderRow = ('<tr class="weekdaySubHeader">' + renderWeekday() + '</tr>');
      return subHeaderRow;
    }
  
    function createDayRows(dayBox) {
      dataRow = ('<tr class="monthDays">' + dayBox + '</tr>');
      return dataRow;
    }
  
    function renderCalendarMonth() {
      var tableHeader = ('<th class="month" colspan="7"><h1>' + Model.convertMonthNumberToString(Model.getMonth()) + ' ' + Model.getYear() + '</h1></th>');
      return tableHeader;
    }
  
    function renderWeekday(weekElement) {
      var tableSubHeader = ('<th class="weekday"><h3>' + weekElement + '</h3></th>');
      return tableSubHeader;
    }
                             
    function renderCalendarWeekdays(getCalendarWeekdays) {
      var weekdayBox = getCalendarWeekdays.map(renderWeekday).join('');
      return weekdayBox;
    }
  
    function getCalendarWeekdays() {
      return renderCalendarWeekdays(Model.getDays());
    }

    function renderDay(element) {
      var dayCell = ('<td class="day" id="' + element + '">' + element + '</td>');
      return dayCell;
    }

    function renderCalendarDays(calendarDays) {
      var calendarDaysView = '';
      for (var iterator = 0; iterator < 6; iterator++) {
        var dayBox = calendarDays[iterator].map(renderDay).join('');
        calendarDaysView = calendarDaysView.concat(createDayRows(dayBox));
      }
      return calendarDaysView;
    }
  
    function getCalendarDays() {
      return groupDaysIntoWeeks(Model.createDateArray());
    }

    return {
      renderTable: renderTable,
      renderMonthRow:renderMonthRow,
      renderWeekdayRow: renderWeekdayRow,
      createDayRows: createDayRows,
      renderCalendarMonth: renderCalendarMonth,
      renderWeekday: renderWeekday,
      renderCalendarWeekdays: renderCalendarWeekdays,
      getCalendarWeekdays: getCalendarWeekdays,
      renderDay: renderDay,
      renderCalendarDays: renderCalendarDays,
      getCalendarDays: getCalendarDays
    };
})();
