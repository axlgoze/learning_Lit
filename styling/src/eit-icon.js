import { LitElement, html } from 'lit-element';
import { icons } from './icons.js';
export class EitIcon extends LitElement {

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            icon: { type: String }
        };
    }
    
    constructor() {
        super();
        this.icon = 'done';
    }

    render() {
        return html`
        `;
    }
}
customElements.define('eit-icon', EitIcon);