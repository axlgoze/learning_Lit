import { LitElement, html, css } from 'lit';

export class CellsExam extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            mainTitle: {type: String}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        this.mainTitle = 'CELLS Exam'
    
    }

    render() {
        return html`
            <div>
                <h2>${this.mainTitle}</h2>
            </div>
        `;
    }
}
customElements.define('cells-exam', CellsExam);
