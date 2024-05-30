import { LitElement, html, css } from 'lit';

export class TagsList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            tags:{type: Array}
        };
    }

    constructor() {
        super();
    
        this.tags=[]
    
    }

    render() {
        return html`
            ${
                this.tags.map( item => html`
                    <ul>
                        <li>
                            <p>${item}</p>
                        </li>
                    <ul>
                `
            )}
        `;
    }
}
customElements.define('tags-list', TagsList);
