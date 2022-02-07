//display current day at top of calendar
var currentDay = newDate();
//have time blocks for standard business hours
//each time block is color coded to indicate whether it is in the past (grey), present (red), or future (green)
//when click into a time block, can enter an event
//when click the save button for that time block, the text for that event is saved in local storage
//when refresh, saved events persist

$('#date').datepicker({
    minDate: 0
});
$('#time').timepicker({
    onHourShow: function( hour ) { 
        // compare selected date with today
        if ( $('#date').val() == $.datepicker.formatDate ( 'mm/dd/yy', currentDay) ) {
            if ( hour <= now.getHours() ) {
                return false;
            }
        }
        return true;
    }
});​