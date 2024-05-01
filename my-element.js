// especificacion de modulos con js 'import'
// la clase LitElement simplifica la creación de componentes reutilizables al proporcionar funcionalidades como manejo de propiedades, ciclo de vida y renderizado eficiente.
// html template is used to render
import {LitElement, html} from 'lit';
// Aquí se define el comportamiento y la estructura del componente MyElement. 
export class MyElement extends LitElement{
    static properties = {
        version : {},
    };

    constructor(){
        super();
        this.version = 'World';
    }

    // render is mandatory
    // define el contenido HTML que será renderizado por el componente. 
    render(){
        return html`
        <p>Hello</p>
        <p>My ${this.version}.</p>
        `;
    }
}

// define() registers your custom element with the browser as a new element type
customElements.define('my-element', MyElement);