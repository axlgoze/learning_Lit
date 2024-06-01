import { LitElement, html, css } from 'lit';

export class SlotIntro extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <slot></slot>
        `;
    }
}
customElements.define('slot-intro', SlotIntro);
