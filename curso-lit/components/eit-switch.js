import { LitElement, html, css } from 'lit';

export class EitSwitch extends LitElement {
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
            check: {type: Boolean}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        this.check=false;
        this.addEventListener('click', ()=>{
            // this.checkingImperative();
            console.log("imperative: " + this.check)
        });
    
    }

    get checkedIcon(){
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E88D67"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z"/></svg>
        `;
    }

    get unCheckedIcon(){
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg>
        `;
    }

    checking(){
        this.check= !this.check;
        console.log(this.check)
    }
    checkingImperative(){
        console.log("imperative: " + this.check)
    }

    render() {
        return html`
            <h5>Declarative</h5>
            <span style="cursor:pointer;" @click="${this.checking}">
                ${this.check ? this.checkedIcon : this.unCheckedIcon}
            </span>
        `;
    }
}
customElements.define('eit-switch', EitSwitch);
