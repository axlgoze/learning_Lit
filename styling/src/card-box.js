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

            h1{
                font-size: 100px;
                font-weight: normal;
                color: var(--card--box-title-color);
            }
            
        `
        ];
    }

    render() {
        return html`
            <h1>${this.title}</h1>

            <div>
                <slot name="card"></slot>
            </div>

            <slot></slot>
        `;
    }
}
customElements.define('card-box', CardBox);
