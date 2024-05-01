// especificacion de modulos con js 'import'
// la clase LitElement simplifica la creación de componentes reutilizables al proporcionar funcionalidades como manejo de propiedades, ciclo de vida y renderizado eficiente.
// html template is used to render
import {LitElement, html} from 'lit';
// Aquí se define el comportamiento y la estructura del componente MyElement. 
export class MyElement extends LitElement{
    
    // properties of the component
    static properties = {
        message : {},
    };
    // reactive propertie
    constructor(){
        super();
        this.message = 'hello again';
    }

    // render is mandatory
    // define el contenido HTML que será renderizado por el componente. 
    render(){
        return html`
        <p>Hey</p>
        <p>${this.message}.</p>
        `;
    }
}

// define() registers your custom element with the browser as a new element type
customElements.define('my-element', MyElement);