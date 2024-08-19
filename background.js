// let data = {
//     "event": "onStop/onStart",
//     "prefs": {
//         "locationId" : "123",
//         "startDate": "2023-02-02",
//         "endDate": "2023-03-03"
//     }
// }
import fetchLocations from "./api/fetchLocations.js"

chrome.runtime.onInstalled.addListener(details => {
    fetchLocations()
})

chrome.runtime.onMessage.addListener(data => {
    const { event, prefs } = data

    switch (event){
        case "onStop":
                handleOnStop();
            break;
        case "onStart":
                handleOnStart(prefs);
            break;
        default:
            break;
    }
})


const handleOnStop = () => {
    stopAlarms()
    console.log("Alarm Cleared")
    setRunningStatus(false);
}

const handleOnStart = (prefs) => {
    console.log("prefs:", prefs)

    chrome.storage.local.set(prefs);
    createAlarm();
    console.log("Alarm Created");
    setRunningStatus(true);
}

const setRunningStatus = (isRunning) => {
    chrome.storage.local.set({ isRunning })
}

const ALARM_JOB_NAME = "DROP_ALARM"
const createAlarm = () => {

    chrome.alarms.get(
        ALARM_JOB_NAME,
        existingAlarm => {
            if(!existingAlarm){
                chrome.alarms.create(
                    ALARM_JOB_NAME,
                    {
                        periodInMinutes: 1.0
                    }
                )
            }
        }
    )


}

// Code for the Chrome alarm API that auto runs every min after an alarm has been created
chrome.alarms.onAlarm.addListener( () => {
    console.log("onAlarm scheduled code running...")
})

const stopAlarms = () => {
    chrome.alarms.clearAll()
}