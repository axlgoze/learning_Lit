import { LitElement, html, css } from 'lit';

export class TagsList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            tags:{type: Array}
        };
    }

    constructor() {
        super();
    
        this.tags=[];
        // we can create methods in constructor
        this.addEventListener('click', (e) => 
            this.addRandomTag()
        )

        // this.addEventListener('click', (e) => {
        //     return addRandomTag();
        // })
    
    }

    // adds a random number to the array
    addRandomTag(){
        // generates a random number between 0 - 1000 being assigned to randomNumber variable.
        let randomNumber = Math.floor(Math.random()*1000);
        this.tags.push(randomNumber);
        console.log(this.tags);
        // This method is called to reRender the component. In this component a random number will be shown.
        this.requestUpdate();
        
    }

    render() {
        return html`
            ${
                this.tags.map( item => html`
                    <ul>
                        <li>
                            <p>${item}</p>
                        </li>
                    <ul>
                `
            )}
        `;
    }
}
customElements.define('tags-list', TagsList);
