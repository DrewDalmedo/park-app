class StateAdapter {
    constructor(url) {
        this.baseURL = url;
    }

    fetchStates() {
        return fetch(this.baseURL)
        .then((obj) => obj.json())
        .then((statesArray) => {
            return statesArray.forEach( function(state) {
                return new State(state)
            })
        })
    }

    async deleteState(stateID) {
        fetch(`http://localhost:3000/states/${stateID}`, {
            method: "DELETE"
        })
    }
}