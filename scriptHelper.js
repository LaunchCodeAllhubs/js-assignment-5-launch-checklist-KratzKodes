// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ''){
    return `Empty`;
   } else if(!isNaN(Number(testInput))){
    return `Is a number`
   }else{
    return `Not a number`
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    list.style.visibility = "hidden";

   
   if (
     // Empty field validation
     validateInput(pilot) === `Empty` ||
     validateInput(copilot) === `Empty` ||
     validateInput(fuelLevel) === `Empty` ||
     validateInput(cargoLevel) === `Empty`
   ) {
     alert(`Ensure each field has filled`);
   } else if (
     // Empty pilot and copilot validation
     validateInput(pilot) === `Is a number` ||
     validateInput(copilot) === `Is a number`
   ) {
     alert(`Pilot and Copilot must be a name`);
   } else if (
     // Empty fuel level and cargo level validation
     validateInput(fuelLevel) === `Not a number` ||
     validateInput(cargoLevel) === `Not a number`
   ) {
     alert(`Fuel level and Cargo Mass must be a number`);
   } else {
     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
     copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   }

   if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000) {
     list.style.visibility = "visible";
     fuelStatus.innerHTML = `Fuel level too low for launch`;
     launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
     launchStatus.style.color = `rgb(199, 37, 78)`;
   } else if (Number(cargoLevel) > 10000 && Number(fuelLevel) >= 10000) {
     list.style.visibility = `visible`;
     cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
     fuelStatus.innerHTML = `Fuel level high enough for launch`;
     launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
     launchStatus.style.color = `rgb(199, 37, 78)`;
   } else if (Number(cargoLevel) > 10000 && Number(fuelLevel) < 10000) {
     list.style.visibility = `visible`;
     cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
     fuelStatus.innerHTML = `Fuel level too low for launch`;
     launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
     launchStatus.style.color = `rgb(199, 37, 78)`;
   } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) >= 10000) {
     list.style.visibility = `visible`;
     launchStatus.style.color = `rgb(65, 159, 106)`;
     fuelStatus.innerHTML = `Fuel level high enough for launch`;
     cargoStatus.innerHTML = "Cargo mass low enough for launch";
     launchStatus.innerHTML = `Shuttle is Ready for Launch`;
   }



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
