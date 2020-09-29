/*
class ParkAdapter {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    load() {
        return this.fetchParks()
        .then( (parksJSON) => {
            return parksJSON.forEach( (park) => {
                return new Park(park)
            })
        })
    }

    fetchParks() {
        return fetch(this.baseURL)
        .then( (response) => response.json())
    }
}
*/