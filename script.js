// Use Moment.js to format the following variables:

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currenTime = moment().hours()
console.log(currenTime)
   //Get Current time

   //get all elements with class "taskarea"
   var timeBlockElements = $(".form-contol");

$(".form-control").each( function(index, element) {
  // if you want to grab the id
  //var id = $(element).attr("id");

  // if you want to remove a class
  //$(element).removeClass("future");

  // if you want to add a class
 // $(element).addClass("present");
})

if (elementID < currentTime) {
    $(manipID).addClass("past");
} else if (elementID > currentTime) {
    $(manipID).addClass("future");
} else {
    $(manipID).addClass("present");
}











   //loop through taskarea classes
   //for (var i = 0 ; i < timeBlockElements.length ; i++) {

       //Get element i's ID as a string
      // var elementID = timeBlockElements[i].id;

       //get element by ID
     //  var manipID = document.getElementById(timeBlockElements[i].id)

       //remove any old classes from element
      // $(timeBlockElements[i].id).removeClass(".present .past .future");

       // apply new class if task is present/past/future
   
