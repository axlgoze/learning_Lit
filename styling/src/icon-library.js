import { LitElement, html } from 'lit-element';

export class IconLibrary extends LitElement {

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    
    render() {
        return html`
            <p>hello world</p>
        `;
    }
}
customElements.define('icon-library', IconLibrary);