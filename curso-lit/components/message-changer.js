import { LitElement, html, css } from 'lit';

export class MessageChanger extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            currentMessage: { type: String },
            messages: { type: Array},
            currentIndex: {type: Number}
        };
    }
    
    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        this.currentMessage = '';
        this.messages = [];
        this.currentIndex = 0;
    
    }

    changeMessage(){
        this.currentMessage = this.messages[this.currentIndex];
        // when currentIndex is equal to 0 that means the last item of the Array has been reached.
        this.currentIndex = (this.currentIndex + 1) % this.messages.length;
        this.timer = setTimeout(()=> this.changeMessage(),5000);
    }

    render() {
        return html`
            <div>
                ${this.currentMessage}
            </div>

            <button
                id="b1"
                @click="${this.stop}"
            >Stop</button>
        `;
    }

    firstUpdated(){
        this.changeMessage();
    }

    updated(propertyChanged){
        propertyChanged.forEach( (oldValue, propName) => {
            console.log('Prop: ', propName, ' VALOR ACTUAL', this[propName], 'VALOR ANTERIOR', oldValue)
            this.shadowRoot.getElementById('b1').focus();
            if(propertyChanged.has('messages')){
                console.log('ha cambiado el array', this.messages)
            }
        });
    }
}
customElements.define('message-changer', MessageChanger);
