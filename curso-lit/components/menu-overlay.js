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
            .over{
                position:absolute;
                border: solid 1px green;
                box-shadow: 3px 3px 8px #eee;
                padding: 15px;
                width: 150px;
                background-color: #74E291;
                color: #211C6A;
                text-transform: uppercase;
                list-style-type: none;
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
        document.addEventListener('click', ()=>{
            this.opened = false;
        })
    
    }

    /**
      * @description change opened property from false to true.
      * @method 
      */
    toggle(e){
        e.stopPropagation();
        this.opened= !this.opened;
    }
    close(){
        this.opened = false;
    }
    

    get triggerTemplate(){
        return html`
            <div class="trigger" @click="${this.toggle}">
                    <slot name="trigger"></slot>
            </div>
        `
    }

    get contentTemplate(){
        return html`
            <section class="${this.opened ? '' : 'closed'} over">
                <slot></slot>
                <button @click="${this.close}">Close</button>
            </section>
        `
    }

    /**
      * @description returns the html template
      * @render 
      */
    render() {
        return html`
            
            ${this.triggerTemplate}
            ${this.contentTemplate}


            
        `;
    }
}
customElements.define('menu-overlay', MenuOverlay);
