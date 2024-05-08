import {LitElement, html} from 'lit-element'


class MyFirstElement extends LitElement {

    
    static get properties(){
        return{
            greeting : {type: String},
            data: {type: false},
            items: {}
        };
    }

    constructor(){
        super();
        // Add event listeners in the constructor
        // if you need to listen an event that might occur before your component has been added to DOM
        this.addEventListener('focus', this._handleFocus);
    }

    render(){
        return html `
        <!-- declarative event listeners -->
        <button @click=${this._handleClick} ></button>
        `;
    }
}

// * you should use '-' when defining your element
customElements.define('My-FirstElement' , MyFirstElement);

// add Event Listeners in connectedCallback

// connectedCallback() {
//     super.connectedCallback();
//     window.addEventListener('resize', this._handleResize);
//   }


// add Event Listeners after first paint
// async firstUpdated() {
//     Give the browser a chance to paint
//     await new Promise((r) => setTimeout(r, 0));
//     this.addEventListener('click', this._handleClick);
//   }
