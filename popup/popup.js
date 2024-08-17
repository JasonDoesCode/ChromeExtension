// ELEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// BUTTONS
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")

startButton.onclick = () => {

    const popupPrefs = {
        locationId: locationIdElement.value,
        startDate: startDateElement.value,
        endDate: endDateElement.value,
        tzData: locationIdElement.options[locationIdElement.selectedIndex].getAttribute('data-tz') // options is refering to the options of within the dropdown
    }

    chrome.runtime.sendMessage({event: "onStart", prefs: popupPrefs})
}

stopButton.onclick = () => {
    chrome.runtime.sendMessage({event: "onStop"})
}

chrome.storage.local.get(["locationId", "startDate", "endDate", "locations"], (result) => {
    const {locationId, startDate, endDate, locations} = result

    setLocations(locations);

    if(locationId){
        locationIdElement.value = locationId;
    }

    if(startDate){
        startDateElement.value = startDate;
    }

    if(endDate){
        endDateElement.value = endDate;
    }

    if(locations){
        console.log(locations);
    }
})


// Location
// {
//     "id" : 5005,
//     "name" : "El Paso Enrollment Center",
//     "shortName" : "El Paso Enrollment Center",
//     "tzData" : "America/Denver"
// }
const setLocations = (locations) => {
    locations.forEach(location => {
        let optionElement = document.createElement("option");
        optionElement.id = location.id;
        optionElement.innerHTML = location.name;
        optionElement.setAttribute('data-tz', location.tzData)
        locationIdElement.appendChild(optionElement);
    })
}