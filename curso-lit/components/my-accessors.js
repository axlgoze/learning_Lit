import { LitElement, html, css } from 'lit';

export class MyAccessors extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            prop: { type: Number },
        };
    }
    // transformation
    get prop(){
        // underscore is a convention to declare private props
        return this._prop *3;
    }

    set prop(val){
        let oldVal = this._prop;
        this._prop = Math.floor(val);
        // When a change occurs we need to notify this change in the property with:
        this.requestUpdate('prop',oldVal);
    }

    render() {
        return html`
            <p> prop: ${this.prop}</p>
            <button @click="${() => {
                this.prop = Math.random()*10;
            }}">accessor
            </button>

        `;
    }
}
customElements.define('my-accessors', MyAccessors);
