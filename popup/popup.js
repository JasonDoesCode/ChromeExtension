// ELEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// BUTTONS
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")

startButton.onclick = function() {
    console.log("You clicked the Start Button!");
}

stopButton.onclick = function() {
    console.log("You clicked the Stop Button!");
}