import { LitElement, html, css } from 'lit';

export class CardBox extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            div {
                border: solid 1px red;
            }
        `
    ];

    render() {
        return html`
            <div>
                <slot name="card"></slot>
            </div>
        `;
    }
}
customElements.define('card-box', CardBox);
