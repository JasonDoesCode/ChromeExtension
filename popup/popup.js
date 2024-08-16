// ELEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// BUTTONS
const startButton = document.getElementById("startDate")
const stopButton = document.getElementById("stopDate")

startButton.onclick = function() {
    console.log("You clicked the Start Button!");
}

stopButton.onclick = function() {
    console.log("You clicked the Stop Button!");
}