//---------------Global variables--------------------------------------------------------//
let currentDay = document.querySelector("#currentDay");
let currentDate = document.querySelector("#currentDate")

//----------------------------------------------------------------------------------------//

//-----------Step 1 Set the date at the top of the page-------------------------------//
// TODO: Add code to display the current date in the header of the page.

currentDay.textContent = dayjs().format("MMMM D, YYYY");
currentDate.textContent = dayjs().format("dddd");


//----------------------------------------------------------------------------------------//
//-----------Step 2 Find Current Time and Compare it to the Hour shown-------------------------------//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//.........................Current hour in military time.............//
let currentHour = dayjs().hour();
///---------------------------------------------------------------///
//----------Set variable = all time blocks and so it is an array---//
let hourBlocks = document.querySelectorAll('.time-block')


//----------------------Comparison to Id's----------------------//
//Need to run a for loop since I grabbed all time blocks and now it is an array//
for (let i = 0; i < hourBlocks.length; i++){

  if (currentHour==hourBlocks[i].dataset.time){
    hourBlocks[i].className = "row time-block present"
  } 
  //-------------Above is not working for some reason>>>ANSWER it is a string so you can't use three equals signs------//
  else if (currentHour<hourBlocks[i].dataset.time){
      hourBlocks[i].className = "row time-block future"
    }
  else {
    hourBlocks[i].className = "row time-block past"
  }
    
}

//-----------------------------------------------------------------------

//-------------Event Listener for Save Button............................//


let saveButton = document.querySelector('.time-block-container');
let allButtonsArr = document.querySelectorAll('.btn');

saveButton.addEventListener('click', function(event){
  
  
  if (event.target.matches("button")){
    let eventText = event.target.previousElementSibling.value
    let timeBlock = event.target.dataset.time
    // let calendarEvents = localStorage.getItem() || null;<<NEEDED else where
  console.log(event.target.dataset.time)
  localStorage.setItem(timeBlock, eventText)
  
 }
})
//Get the saved item to show up on the page now//
///---------------attempt 1-------------//
// function pageLoad(){
//   let allTextArea = document.querySelectorAll('textarea')
// for (let i = 0; i < allTextArea.length; i++) {
//       if(allTextArea[i].dataset.time===localStorage.key(allTextArea[i])){
//         allTextArea[i].value = localStorage.getItem(i)
//       }


// }}
//---------------attempt 2------------//
//On page load//
  for (let i = 0; i < allTextArea.length; i++) {
    let allTextArea = document.querySelectorAll('textarea')
    if (allTextArea[i].dataset.time===localStorage.key(i+9)){
        allTextArea[i].value = localStorage.getItem(i+9)
      
    }

    
    
  }






//----------------------------------------------------------------------------------------//
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
