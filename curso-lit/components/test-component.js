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
            name: {
                type: String,
                attribute: 'fullname'
            }
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        
    
    }
    

    render() {
        return html`

            <h2>${this.name}</h2>

        `;
    }
}
customElements.define('test-component', TestComponent);
