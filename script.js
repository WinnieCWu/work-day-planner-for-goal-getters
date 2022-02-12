//display current day and time at top of calendar
//current time variable
var currentTime = moment().hours();
console.log(currentTime);

//hours variable for tasks
var hours = $(".hour");
console.log(hours);

console.log(hours[0].dataset.id);

//target save button
var saveButton = $(".saveBtn")
console.log(saveButton);

//target textarea
var taskDescriptionInput = $("textarea".val());

var currentDay = $("#currentDay");
var currentDayMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);
currentDay.html(currentDayMoment);

//when click the save button for that time block, the text for that event is saved in local storage
saveButton.on("click", function(){

})
//each time block is color coded to indicate whether it is in the past (grey), present (red), or future (green)
//when click into a time block, can enter an event

