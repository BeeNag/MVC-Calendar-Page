var Model = (function initModel() {
  var daysInMonth = getDaysInMonth(month, year);
  var month = 12;
  var year = 2015;
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var dateArray = getDateArray (month, year);
  var monthsArray = convertMonthNumberToString(month);
  var today = new Date();
  var day = today.getDate();
  var firstOfMonth = new Date("'" + month + " " + "1 " + " " + year + "'").getDay();
  var daysToPrepend = setPrependNumberForDateArray();
  var calendarRowsObject = createDateArray();

  function convertMonthNumberToString(month) {
  var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthsArray[month - 1];
}

    function getMonth() {
      return month;
    }

    function getYear() {
      return year;
    }

    function getDays() {
      return days;
    }  

    function getCurrentDay() {
      return day;
    }
  
    function getFirstOfMonth() {
      return firstOfMonth;
    }
  
    function setPrependNumberForDateArray () {

      if(getFirstOfMonth() === 0) {
        daysToPrepend = 6;
      } else {
        daysToPrepend = getFirstOfMonth() -1;
      }

      return daysToPrepend;
    }
  
    function createDateArray() {
      var arrayToPrepend = [];
      var arrayToAppend = [];
      
      for (var i = 0; i < daysToPrepend; i++) {
        arrayToPrepend[i] = "";
      }

      for (var counter = 0; counter < 42 - getDaysInMonth(month,year)-daysToPrepend; counter++) {
        arrayToAppend[counter] = "";
      }

      return arrayToPrepend.concat(getDateArray(month, year).concat(arrayToAppend));
    }

  return {
    convertMonthNumberToString: convertMonthNumberToString, 
    getMonth: getMonth,
    getYear: getYear,
    getDays: getDays,
    getCurrentDay: getCurrentDay,
    getFirstOfMonth: getFirstOfMonth,
    setPrependNumberForDateArray: setPrependNumberForDateArray,
    createDateArray: createDateArray
  };
})();

