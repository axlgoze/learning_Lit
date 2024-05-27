import { LitElement, html, css } from 'lit';

export class HelloWorld extends LitElement {
    
    static properties={
        message: {type : String}
    }

    constructor() {
        super();
    
    this.message = 'Hello World!';
    
    }

    render() {
        return html`
            <h2>${this.message}</h2>
        `;
    }
}
customElements.define('hello-world', HelloWorld);
