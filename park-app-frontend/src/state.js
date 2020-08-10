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

        this.main.appendChild(this.parksContainer)

        State.all.push(this)
    }

    render() {
        // render the misc. details & buttons
        console.log("d")
        this.main.innerHTML += `
        <p>${this.name}</p>
        <button class="delete-button" data-state-id=${this.id}>Delete State</button>        
        `

        // render the parks
        // normally we'd rely on a Park class, but this will hold us over for now until we have one
        makeParkLi = (park) => {
            return `<li>${park.name}</li>`
        }

        /*
        this.parksContainer.innerHTML += `
            ${this.parks.map(makeParkLi).join("")}
        `
        */

        State.container.appendChild(this.main)
        console.log("This should work")
    }

    static renderAll() {
        console.log(this.all)
        
        this.all.forEach((state) => console.log(state))
    }

    delete() {

    }
    
    get parks() {

    }
}