import { LitElement, html, css } from 'lit';

// base class
export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    // Old version to call properties
    // static get properties() {
    //     return {
    //         header: { type: String },
    //         counter: {type: Number}
    //     };
    // }

    // New version to call properties
    static properties={
        header: { type: String },
        counter: {type: Number}
    }

    constructor() {
        super();
        this.header="This is the counter header";
        this.counter=0;
    
    }

    // methods

    _count(){
        this.counter +=1
    }

    render() {
        return html`
        <h1>Counter component</h1>
        <h2>${this.header}</h2>
        <h3>Counter value = ${this.counter}</h3>
        <button @click=${this._count}>count</button>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
