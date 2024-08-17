const LOCATION_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global+Entry"

export default function fetchLocations(){
    fetch(LOCATION_ENDPOINT)
        .then(response => response.json()) //converts retured list into json format
        .then(data =>{
            const filteredLocations = data.map(loc => ({ //Link to what data.map is doing - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                "id": loc.id,
                "name": loc.name, 
                "shortName": loc.shortName,
                "tzData": loc.tzData
            }))

            filteredLocations.sort((a,b) => a.name.localeCompare(b.name)) //Link to explain this sort (I don't understand yet) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            
            chrome.storage.local.set({locations: filteredLocations})
            
            console.log(filteredLocations);
        })
        .catch(error =>{
            console.log("API Fetch Error:", error)
        })

}