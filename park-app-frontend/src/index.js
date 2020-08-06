const BASE_URL = "http://localhost:3000"
const STATES_URL = `${BASE_URL}/states`
const PARKS_URL = `${BASE_URL}/parks`


function getStates() {
    // fill me out once you have seed data!
    fetch(STATES_URL)
    .then( response => {
        response.json()
        .then( json => {
            json.forEach(renderState)
        })
    })
}

function renderState() {
    // add more stuffs
}

document.addEventListener("DOMContentLoaded", () => {
    getStates();
})