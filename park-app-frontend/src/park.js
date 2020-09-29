class Park {
    static all = []

    constructor({id, name, state_id}) {
        this.id = id;
        this.name = name;
        this.state_id = state_id;

        Park.all.push(this)
    }

    /*
    static getByState(id) {

        let matchArray = []

        Park.all.forEach( (park) => {
            if (park.state_id === id) {
                matchArray.push(park)
            }
        })

        return matchArray
    }
    */


}