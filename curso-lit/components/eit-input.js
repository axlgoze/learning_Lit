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
            label{
                color: green;
            }
        `;
    }

    static properties = {
        
            
            placeholder: {type: String},
            disabled: {type: Boolean},
            value: {type: String},
            label: {type: String}
        
    }

    constructor() {
        super();
            // initializing
            this.disabled=false;
            this.value="";
            this.placeholder='';
    
    }

    _lookForKey(e){
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){
            console.log("You've pressed enter!")
            this.dispatchEvent(new CustomEvent('eit-input-enter'));
        }else if(keycode == '44'){
            console.log("You've pressed comma!")
        }
    }

    render() {
        return html`
            <div>
            ${this.label ? html`<label for="textField">${this.label}:</label>` : ''}
                <input type="text"
                    id="textField"
                    placeholder="${this.placeholder}" 
                    ?disabled=${this.disabled}
                    @keypress="${this._lookForKey}"
                    .value="${this.value}"
                    >
            </div>
            `;
    }
}
customElements.define('eit-input', EitInput);