const BASE_URL = "http://localhost:3000"
const STATES_URL = `${BASE_URL}/states`
const PARKS_URL = `${BASE_URL}/parks`

const stateAdapter = new StateAdapter(STATES_URL)
const parkAdapter = new ParkAdapter(PARKS_URL)

let stateContainer = document.querySelector("#state-container")
let newStateContainer = document.querySelector("#state-form-container")

// on clicking the delete button of a state
stateContainer.addEventListener("click", (e) => {
    if (e.target.className === "delete-state-button") {
        e.target.disabled = true;
        let stateID = e.target.dataset.stateId
        let stateCard = document.querySelector(`div[id=state-${stateID}]`)

        stateAdapter.deleteState(stateID)
        .then( stateCard.remove() )
    }
})

document.addEventListener("DOMContentLoaded", (e) => {
    parkAdapter.load()

    stateAdapter.load()
    .then( State.renderAll )
})

// on clicking the submit button for creating a new state
newStateContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = []
    e.target.querySelectorAll('input').forEach(input => {
        info.push(input.value)
    })
    stateAdapter.createState(info)
})

