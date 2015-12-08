function groupDaysIntoWeeks(days) {
	var weeks = [];
	var week;

	while (days.length) {
		week = days.splice(0, 7);
		weeks.push(week);
	}
	return weeks;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, null).getDate();
}

function getDateArray(month, year) {
  var daysInMonth = getDaysInMonth(month, year);
  var dateArray = [];

  for (var counter = 0; counter < daysInMonth; counter++) {
    dateArray.push(counter + 1);
  }
   return dateArray;
}