import {LitElement, html} from 'lit';

export class MyElement extends LitElement{
    static properties = {
        version : {},
    };


    constructor(){
        super();
        this.version = 'World';
    }

    render(){
        return html`
        <p>Hello</p>
        <p>My ${this.version}.</p>
        `;
    }
}

customElements.define('my-element', MyElement);