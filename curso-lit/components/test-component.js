import { LitElement, html, css } from 'lit';

export class TestComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    
    static get properties() {
        return {
            object: {type: Object}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        this.object = {
            myProp: "Initial value"
        }
    
    }
    

    handleClick(){
        // this.object.myProp = "New value";
        console.log("im in the " + this.handleClick + "method")

        this.object = {
            // ...this.object,
            myProp : "new Value"
        };
    }

    render() {
        return html`

            <h2>${this.object.myProp}</h2>
            <button @click="${this.handleClick}">Click me!</button>

        `;
    }
}
customElements.define('test-component', TestComponent);
