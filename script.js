//On ready
$(document).ready(function(){

//save button functionality
$(".saveBtn").on("click", function(){
    //get nearby values
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id");

    //save to localStorge
    localStorage.setItem(time, text);
})

//Hour updater 
function hourUpdater(){

    //Sets the current number of hours.
    var currentHour = moment().hours();

    //loop over time blocks.
    $(".time-block").each(function(){
        var setHour = parseInt($(this).attr("id").split("-")[1]);

        //Checks to see if we have passed this time.
        if( setHour < currentHour){
            $(this).addClass("past");
        }
        //Checks to see if we are on time
        else if( setHour === currentHour){
            $(this).addClass("past");
            $(this).addClass("present");
        }
        //Checks to see if it is early in the day
        else {
            $(this).removeClass("past");
            $(this).removeClass("presnet");
            $(this).addClass("future");
        }
    });
};

//calling hour updater
hourUpdater();

//loading local storage save
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));

//displaying current day on the page
$("#currentDay").text(moment().format("MMM Do YYYY"));

});




