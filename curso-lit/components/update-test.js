import { LitElement, html, css } from 'lit';

export class UpdateTest extends LitElement {
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
            name:{
                type: String,
                hasChanged(newVal, oldVal){
                    if (newVal > oldVal){
                        console.log('hasChanged', newVal, oldVal)
                        return true;
                    }
                    return false;
                }
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
    
    this.name=""
    }

    firstUpdated(){
        // Js admits variables created in runtime
        this.elinput = this.shadowRoot.getElementById('theInput');
    }

    get elInput(){
        return this.elinput = this.shadowRoot.getElementById('theInput');
    }


    nameChange(){
        this.name= Math.random();
        // console.log(typeof(this.name));
        // updateComplete is a promise which is resolved when the component is Re rendered
        this.updateComplete.then( ()=>{
            // with this option we can omit write all the shadowRoot sentence
            console.log("newData: ", this.elInput.value);
        })
    }

    
    render() {
        // .value is bind to name prop
        return html`
            <input type="text"
                    id="theInput"
                    label="Name"
                    .value="${this.name}"
                    >

                    <button @click="${this.nameChange}">change name
                    </button>
        `;
    }
}
customElements.define('update-test', UpdateTest);
