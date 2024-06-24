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

    static  get properties() {
            // Properties
            return{
                placeholder: {
                    type: String,
                    attribute: 'ph'
                },
                disabled: {type: Boolean},
                label: {type: String},
                value: {
                    // type: String,
                    reflect: true,
                    converter: {
                        toAttribute(value) {
                            return value.toString().toLowerCase();
                        },
                        fromAttribute(value){
                            return value.toString().toUpperCase();
                        }
                    }
                }
            };
    }

    constructor() {
        super();
            // initializing
            this.disabled=false;
            this.value='';
            this.placeholder='';
    
    }

    _lookForKey(e){
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){
            console.log("You've pressed enter!");
            console.log(typeof(this.value));
        }else if(keycode == '44'){
            console.log("You've pressed comma!")
        }
        
    }

    inputChanged(e){
        this.value = e.target.value;
        console.log("inputChanged "+this.shadowRoot.getElementById("textField").value);
    }

    // This method is called for the first time after render acts.
    firstUpdated(){
        // the text input with textField ID is focused.
        this.shadowRoot.getElementById('textField').focus();
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

    attributeChangedCallback(nameAttr, oldValue, newValue){
        super.attributeChangedCallback(nameAttr, oldValue, newValue);
            console.log("attribute: "+ nameAttr + " OLD: " + oldValue + " NEW: "+ newValue);
            
    }
}
customElements.define('eit-input', EitInput);