// ELEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// BUTTONS
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")

startButton.onclick = function() {
    if (startDateElement.value){
        console.log("Start Date:", startDateElement.value);
    } else {
        console.log("Start Date is invalid!")
    }
}

stopButton.onclick = function() {
    console.log("End Date:", endDateElement.value);
}