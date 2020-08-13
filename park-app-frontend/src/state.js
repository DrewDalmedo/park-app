class State {
    static all = []
    static container = document.querySelector("#state-container")

    constructor({id, name}) {
        this.id = id;
        this.name = name;

        this.main = document.createElement('div')
        this.main.id = `state-${this.id}`

        this.parksContainer = document.createElement('ul')
        this.parksContainer.id = `state-${this.id}-park-list`

        State.all.push(this)
    }

    render() {
        // render the misc. details & buttons
        this.main.innerHTML += `
        <p>${this.name}</p>
        <button class="delete-button" data-state-id=${this.id}>Delete State</button>        
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

    static renderAll() {
        State.all.forEach((state) => state.render())
    }

    delete() {

    }

    get parks() {
        return Park.getByState(this.id)
    }
}