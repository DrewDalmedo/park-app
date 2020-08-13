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
        // normally we'd rely on a Park class, but this will hold us over for now until we have one
        let makeParkLi = (park) => {
            return `<li>${park.name}</li>`
        }

        
        this.parksContainer.innerHTML += `
            ${makeParkLi({ name: "test"})}
        `

        this.main.appendChild(this.parksContainer)
        
        // separator
        this.main.innerHTML += `
        <label>=======================</label>
        `

        State.container.appendChild(this.main)
    }

    static renderAll() {
        console.log(State.all)
        
        State.all.forEach((state) => state.render())
    }

    delete() {

    }
    
    get parks() {

    }
}