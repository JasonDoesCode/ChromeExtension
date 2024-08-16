// let data = {
//     "event": "onStop/onStart",
//     "prefs": {
//         "locationId" : "123",
//         "startDate": "2023-02-02",
//         "endDate": "2023-03-03"
//     }
// }



chrome.runtime.onMessage.addListener( data => {
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
    console.log("Background onStop")
}

const handleOnStart = (prefs) => {
    // console.log("Background onStart")
    // console.log("prefs:", prefs)

    chrome.storage.local.set(prefs)
}