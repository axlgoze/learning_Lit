import { LitElement, html, css } from 'lit';

export class MenuOverlay extends LitElement {
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
customElements.define('menu-overlay', MenuOverlay);
