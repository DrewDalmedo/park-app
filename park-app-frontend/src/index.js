const BASE_URL = "http://localhost:3000"
const STATES_URL = `${BASE_URL}/states`
const PARKS_URL = `${BASE_URL}/parks`

const stateAdapter = new StateAdapter(STATES_URL)
const parkAdapter = new ParkAdapter(PARKS_URL)

let stateContainer = document.querySelector("#state-container")
let newStateContainer = document.querySelector("#state-form-container")

// kept for reference
function renderState(state) {
    stateContainer.innerHTML += `
    <div data_id=${state.id}><p>${state.name}</p>
        <button class="delete-button" data-state-id=${state.id}>Delete State</button>
        <ul id="state-${state.id}-park-list">
            ${state.parks.map(makeParkLi).join("")}
        </ul>
        <p>=======================</p>
    </div>
    `

}

function makeParkLi(park) {
    return `<li>${park.name}</li>`
}

// on clicking the delete button of a state
stateContainer.addEventListener("click", (e) => {
    if (e.target.className === "delete-button") {
        e.target.disabled = true;
        let stateID = e.target.dataset.stateId
        let stateCard = document.querySelector(`div[id=state-${stateID}]`)

        // optimistic rendering
        stateAdapter.deleteState(stateID)
        stateCard.remove();
    }
})

document.addEventListener("DOMContentLoaded", (e) => {
    parkAdapter.load()

    stateAdapter.load()
    .then( State.renderAll )
})

// on clicking the submit button for creating a new state
// TODO: refactor for OO!!!
newStateContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = []
    e.target.querySelectorAll('input').forEach(input => {
        info.push(input.value)
    })
    fetch(STATES_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: info[0]
        })
    })
    .then( response => {
        return response.json()
    })
    .then( json => {renderState(json)})
})

