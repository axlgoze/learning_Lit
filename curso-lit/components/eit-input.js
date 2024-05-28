import { LitElement, html, css} from 'lit-element';

export class EitInput extends LitElement {

    static get styles() {
        return css`
            input::placeholder{
                color:red;
            }
            input{
                width: 210px;
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
            // initializing
            this.disabled=false;
            this.value="";
    
    }

    _lookForKey(e){
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){
            console.log("You've pressed enter!")
        }else if(keycode == '44'){
            console.log("You've pressed comma!")
        }
    }

    render() {
        return html`
            <input type="text"
                placeholder="${this.placeholder}" 
                ?disabled=${this.disabled}
                @keypress="${this._lookForKey}"
                .value="${this.value}"
                >
            `;
    }
}
customElements.define('eit-input', EitInput);