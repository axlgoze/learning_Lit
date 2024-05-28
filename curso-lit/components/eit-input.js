import { LitElement, html, css} from 'lit-element';

export class EitInput extends LitElement {

    static get styles() {
        return css`
            input::placeholder{
                color:red;
            }
        `;
    }

    static properties = {
        
            label: {type: String},
            placeholder: {type: String},
            disabled: {type: Boolean},
            value: {type: String},
        
    }

    constructor() {
        super();
        
            this.disabled=false;
    
    }


    render() {
        return html`
            <input type="text" placeholder="${this.placeholder}" ?disabled=${this.disabled}>
            `;
    }
}
customElements.define('eit-input', EitInput);