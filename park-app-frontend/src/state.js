class State {
    static all = []
    static container = document.querySelector("#state-container")

    constructor({id, name, parks}) {
        this.id = id;
        this.name = name;
        this.parks = parks;

        this.main = document.createElement('div')
        this.main.id = `state-${this.id}`

        this.parksContainer = document.createElement('ul')
        this.parksContainer.id = `state-${this.id}-park-list`

        State.all.push(this)
    }

    // renders an individual state
    render() {
        // render the misc. details & buttons
        this.main.innerHTML += `
        <p>${this.name}</p>
        <button class="delete-state-button" data-state-id=${this.id}>Delete State</button>        
        `

        // render the parks
        let makeParkLi = (park) => {
            return `<li>${park.name}</li>`
        }

        this.parksContainer.innerHTML += `
            ${this.parks.map(makeParkLi).join("")}
        `

        this.main.appendChild(this.parksContainer)
        
        // stylistic separator
        this.main.innerHTML += `
        <label>=======================</label>
        `

        State.container.appendChild(this.main)
    }

    // renders all states IN THE STATE.ALL ARRAY
    static renderAll() {
        State.all.forEach((state) => state.render())
    }

    // ONLY removes the state from the DOM, not the database! That's the StateAdapter's job!
    delete() {
        this.main.remove()

        // maybe add functionality to remove "this" from State.all array?
        // ^ in addition to the state's parks from the Park.all array
    }

    /*
    get parks() {
        return Park.getByState(this.id)
    }
    */
}