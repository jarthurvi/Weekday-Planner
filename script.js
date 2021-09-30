// Use Moment.js to format the following variables:

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function getCurrentTime(){

var currenTime = moment().hours()
console.log(currenTime)
   //Get Current time

   //get all elements with class "form-control"
   //var timeBlock= $(".form-control");

   // referencing each div with the class of time block to test  our current time versus the timeblock to change css coloring to show past, present, future
$(".time-block").each( function() {
   // using parseInt() method to turn the value into a number from a string...
   let timeBlockHour = parseInt($(this).attr('value'))
    console.log("timeBlockHour Value", timeBlockHour)

    if(timeBlockHour < currenTime){
       $(this).addClass("past")
    } else if (timeBlockHour === currenTime){
      $(this).removeClass("past")
       $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
       $(this).addClass("future")
    }
 
})
}

getCurrentTime();
$(".saveBtn").on("click", function(){
console.log("working")

// getting the user's input from text area...associating them by the class of description
let userInput = $(this).siblings(".description").val();
console.log("userinput", userInput)

// the time block that we will be saving to localstorage as our "key" to associate the respectful userinput with.
let timeBlock = $(this).parent().attr('id')
console.log("timeblock", timeBlock)

// saving the timeblock as the key and the user input as the value to localstorage
localStorage.setItem(timeBlock, userInput)


}) 

// getting localstorage to remain in the timeblock it was saved to even after a page
for(var i =9; i < 17 ; i++){

   $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

// removing item from local storage by the key it was saved to localstorage as...
//localStorage.removeItem("hour-9")






