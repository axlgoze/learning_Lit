import { LitElement, html, css } from 'lit';

export class PaginationSimulator extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .closed{
                display: none;
            }
            .trigger{
                cursor:pointer;
            }
        `
    ];

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            opened: {type:Boolean},
        };
    }
    
    constructor() {
        super();
    
        this.opened=false;
    
    }

    toggle(){
        this.opened = !this.opened;
    }
    showMsg(){
        console.log("hi there!")
    }

    render() {
        return html`
            <slot name="click" class="trigger" @click="${this.toggle}"></slot>
            
            <slot class="${this.opened ? '' : 'closed'}"></slot>

        `;
    }
}
customElements.define('pagination-simulator', PaginationSimulator);
