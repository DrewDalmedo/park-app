class StateAdapter {
    constructor(url) {
        this.baseURL = url;
    }

    load(){
        return this.fetchStates()
        .then( (statesJSON) => {
            return statesJSON.forEach( (state) => {
                return new State(state)
            })
        })
    }

    fetchStates() {
        return fetch(this.baseURL)
        .then( (response) => response.json())
    }

    deleteState(stateID) {
        fetch(`http://localhost:3000/states/${stateID}`, {
            method: "DELETE"
        })
    }
}