var tasks = {};


var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      toDo: [],
      inProgress: [],
    };
  }
  // loop over object properties
  $.each(tasks, function(list, arr) {
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text, task.date, list);
    });
  });
};

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//hours variable for tasks
var hours = $(".hour");
console.log(hours);

console.log(hours[0].dataset.id);

//target save button
var saveButton = $(".saveBtn");
console.log(saveButton);

// //target textarea
// var taskDescriptionInput = $("textarea".val());

var currentDayMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$(".currentDay").html(currentDayMoment);

//when click the save button for that time block, the text for that event is saved in local storage
saveButton.on("click", function () {
  //for loop to assess if the task is scheduled before, during, or after current time
  if (moment().isAfter(currentTime)) {
    $(taskEl).addClass("list-group-item-success");
    //using the else if statement, if task is due one day from now (neg #= now-future date; so use absolute value), will get yellow background
  } else if (moment().isBefore(currentTime)) {
    $(taskEl).addClass("list-group-item-dark");
  } else {
    moment();
  }
});
//each time block is color coded to indicate whether it is in the past (grey), present (red), or future (green)
//when click into a time block, can enter an event