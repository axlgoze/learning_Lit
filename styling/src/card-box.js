import { LitElement, html, css } from 'lit';
import { sharedStyles } from './shared-styles.js';

export class CardBox extends LitElement {
    static get styles() {
        return [sharedStyles, css`
            :host {
                display: block;
            }

            div {
                border: solid 1px red;
            }
            
        `
        ];
    }

    render() {
        return html`
            <div>
                <slot name="card"></slot>
            </div>
        `;
    }
}
customElements.define('card-box', CardBox);
