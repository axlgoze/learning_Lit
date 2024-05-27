import { LitElement, html, css } from 'lit';

// base class
export class EitCounter extends LitElement {

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
        // this.header="This is the counter header";
        this.counter=0;
    
    }

    // methods

    _count(){
        this.counter +=1
    }
    _MinusCount(){
        this.counter -=1
    }


    render() {
        return html`
        <style>
            h1{
                color:red;
            }
        </style>
        
        <h1>Counter Component</h1>
        <h2>${this.header}</h2>
        <h3>Counter value = ${this.counter}</h3>
        <button @click=${this._count}>+1</button>
        <button @click=${this._MinusCount}>-1</button>
        <slot name=""></slot>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
