// DECLARATIVE EVENT LISTENERS

import {LitElement, html} from 'lit';

export class MyElement extends LitElement{
    
    
    static properties = {
        name : {},
    };
    
    constructor(){
        super();
        this.name = 'Axel Reyes';
    }

    
    render(){
        return html`
        <p>Hey ${this.name}</p>
        
        // declarative event listener.
        <input @input=${this.changeName} placeholder="Enter your name">

        // event handlers To add interactivity to your components
        <button  @click=${this.handleClick} >Click me!</button>
        
        `;
    }

    // event handler method.
    changeName(event) {
        const input = event.target;
        this.name = input.value;
      }

}


customElements.define('my-element', MyElement);