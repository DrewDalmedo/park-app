const BASE_URL = "http://localhost:3000"
const STATES_URL = `${BASE_URL}/states`
const PARKS_URL = `${BASE_URL}/parks`


let stateContainer = document.querySelector("#state-container")

function getStates() {
    fetch(STATES_URL)
    .then( response => {
        return response.json()
    })
    .then( json => {
        json.forEach(renderState)
    })
}

function renderState(state) {
    // add more stuffs
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

// on loading the page's content
document.addEventListener("DOMContentLoaded", () => {
    getStates();
})

// on clicking the delete button of a state
stateContainer.addEventListener("click", (e) => {
    if (e.target.className === "delete-button") {
        e.target.disabled = true;
        let stateID = e.target.dataset.stateId

        fetch(`http://localhost:3000/state/${stateID}`, {

        })

    }
})

