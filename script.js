//hours variable for tasks
var hours = $(".hour");
console.log(hours[0].dataset.id);

//target save button
var saveButton = $(".saveBtn");
console.log(saveButton);

var currentDayMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$(".currentDay").html(currentDayMoment);

//add event listener to all the save buttons
$(".saveBtn").click(function(){
    var taskText = $(".row").val();
    var taskTime 
})

//when click the save button, the task will be saved to localStorage
var saveTasks = function () {
  //add on click of the save button
  return localStorage.setItem('id', '12');
};

//set the time to 12pm so the events saved after it will be green 
//and the events before it will be greyed out
$("#12").on("click", "textarea", function() {
  var text = $(this).val()
});


var currentTime = moment().hour()
  if (moment().isAfter(currentTime)) {
    $(".description").addClass("list-group-item-success");
    //using the else if statement, if task is due one day from now (neg #= now-future date; so use absolute value), will get yellow background
  } else if (moment().isBefore(currentTime)) {
    $(".description").addClass("list-group-item-dark");
  } else {
    moment();
  }

