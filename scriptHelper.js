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

    // Empty field validation
   if(
    validateInput(pilot) === `Empty`||
    validateInput(copilot) === `Empty`||
    validateInput(fuelLevel) === `Empty`||
    validateInput(cargoLevel) === `Empty`

    ){
        alert(`Ensure each field has filled`)
    }else if(
        validateInput(pilot) === `Is a number`||
        validateInput(copilot) === `Is a number`
    ){
        alert(`Pilot and Copilot must be a name`)
    }else if (
      validateInput(fuelLevel) === `Not a number` ||
      validateInput(cargoLevel) === `Not a number`
    ) {
        alert(`Fuel level and Cargo Mass must be a number`)
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
