import { LitElement, html, css } from 'lit';

export class MenuOverlay extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                position:relative;
            }
            .trigger{
                cursor: pointer;
            }
            .closed{
                display: none;
            }
        `
    ];
    /**
      * @description boolean property that indicates if the slot is open or not
      * 
      */
    static get properties() {
        return {
            opened: { type: Boolean },
        };
    }

    /**
      * @description opened property with false value by default. which means is not open.
      * @constructor
      */
    constructor() {
        super();
    
        this.opened=false;
    
    }

    /**
      * @description change opened property from false to true.
      * @method 
      */
    toggle(){
        this.opened= !this.opened;
    }
    
    /**
      * @description returns the html template
      * @render 
      */
    render() {
        return html`
            
            <div class="trigger" @click="${this.toggle}">
                <slot name="trigger"></slot>
            </div>

            <section class="${this.opened ? '' : 'closed'}">
                <slot></slot>
            </section>
        `;
    }
}
customElements.define('menu-overlay', MenuOverlay);
