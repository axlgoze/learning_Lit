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
        // declaration
        header: { type: String },
        counter: {type: Number}
    }

    // initialize
    constructor() {
        super();
        // this.header="This is the counter header";
        this.counter=0;
    
    }

    // methods

    get feedback(){
        return this.shadowRoot.getElementById("feedback")
    }

    _count(){
        this.counter +=1
        if(this.counter==5){
            this.feedback._open("5 clicks!")
        }
        if(this.counter == 11){
            this.feedback._open("Magic Number")
        }
    }
    _MinusCount(){
        this.counter -=1
        if(this.counter == 0){
            this.shadowRoot.getElementById("feedback")._open("Reset!")
        }
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

        <feedback-element id="feedback"></feedback-element>
        `;
    }
}
customElements.define('eit-counter', EitCounter);
