//----------------------jQuery Wrapper so HTML loads before executing function-----------------//

$(function () {

  
  //---------------------------Setting Date at the top of the page--------------------------//
  let currentDay = $("#currentDay")
  let currentDate = document.querySelector("#currentDate")

  currentDay.text(dayjs().format("MMMM D, YYYY"));
  currentDate.textContent = dayjs().format("dddd");




  
  //---------------------------------Color change of Time Blocks----------------------------//


 
  let currentHour = dayjs().hour()
  let hourBlocks = document.querySelectorAll('.time-block')


  for (let i = 0; i < hourBlocks.length; i++) {

    if (currentHour == hourBlocks[i].dataset.time) {
      hourBlocks[i].className = "row time-block present"
    }
    else if (currentHour < hourBlocks[i].dataset.time) {
      hourBlocks[i].className = "row time-block future"
    }
    else {
      hourBlocks[i].className = "row time-block past"
    }

  }

 

  //------------------------------Event Listener for Save Button---------------------------//

  let saveButton = document.querySelector('.time-block-container');


  saveButton.addEventListener('click', function (event) {


    if (event.target.matches("button")) {
      let eventText = event.target.previousElementSibling.value
      let timeBlockNumber = event.target.dataset.time

      localStorage.setItem(timeBlockNumber, eventText)
    }

    else if (event.target.matches('i')) {
      let eventText = event.target.parentElement.previousElementSibling.value
      let timeBlockNumber = event.target.dataset.time

      localStorage.setItem(timeBlockNumber, eventText)
    }

  })

//-----Getting the text values from local storage that were saved using the save button----//

  let allTextArea = document.querySelectorAll('textarea');

  for (i = 9; i < 18; i++) {
    console.log(i)

    let textValue = localStorage.getItem(i)

    if (textValue != null) {
      allTextArea[i - 9].value = textValue;
    }


}})