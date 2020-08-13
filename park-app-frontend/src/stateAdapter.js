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

    createState(info) {
        fetch( this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: info[0]
            })
        })
        .then( response => response.json() )
        .then( stateJSON => new State(stateJSON).render() )
    }

    deleteState(stateID) {
        fetch(`http://localhost:3000/states/${stateID}`, {
            method: "DELETE"
        })
    }
}