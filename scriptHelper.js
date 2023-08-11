// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src='${imageUrl}'>
                `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return `Empty`;
  } else if (!isNaN(Number(testInput))) {
    return `Is a Number`;
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  //validate all fields are filled out
  if (
    validateInput(pilot) === `Empty` ||
    validateInput(copilot) === `Empty` ||
    validateInput(fuelLevel) === `Empty` ||
    validateInput(cargoLevel) === `Empty`
  ) {
    alert(`Make sure to enter valid information for each field!`);
  }
  //validate pilotName & copilotName are stings
  else if (
    validateInput(pilot) === `Is a Number` ||
    validateInput(copilot) === `Is a Number`
  ) {
    alert(`Make  sure Pilot & Copilot are names`);
  }

  //validate fuelLevel and cargoLevel are numbers
  else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert(`Make sure that Fuel level and Cargo Mass are numbers!`);
  }
  else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }
  list.style.visibility = "hidden";

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

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanet = Math.floor(Math.random() * planets.length);
  return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
