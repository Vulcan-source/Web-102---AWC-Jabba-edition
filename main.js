// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Tatooine', 1],
    ['Sun', 27.9],
];

const select = document.getElementById("planets");
const removePlutobox = document.getElementById("remove-pluto");


function populatePlanets() {
    select.innerHTML = "";
    const removePluto = removePlutobox.checked;

    [...planets].reverse().forEach(function (planet) {
        if (removePluto && planet[0] === "Pluto") {
            return;
        }
        const option = document.createElement("option"); 
        option.value = planet[0];
        option.textContent = planet[0];
        select.appendChild(option);
    });
}
populatePlanets();
removePlutobox.addEventListener("change", populatePlanets);

function calculateWeight(weight, planetName) {
    for (let i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            return weight * planets[i][1];

        }
    }
}
function handleClickEvent(e) {
    const userWeight = document.getElementById("user-weight").value;
    const planetName = document.getElementById("planets").value;
    const result = calculateWeight(userWeight, planetName);

    document.getElementById("output").textContent =
        `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
}
document.getElementById("calculate-button").onclick = handleClickEvent;
