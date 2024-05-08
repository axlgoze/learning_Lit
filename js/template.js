import {LitElement, html} from 'lit-element'


class MyFirstElement extends LitElement {

    //properties
    static get properties(){
        return{
            // propertyName : options
            greeting : {type: String},
            data: {type: false},
            // An empty option object is equivalent to specifying the default value for all options.
            items: {}
        };
    }

    // Initialize property values in the constructor
    constructor(){
        // allways call super() first
        super();
        // Initialize properties
        this.greeting = 'Hello';
        this.data = {name: 'Cora'};
        this.items = [1,2,3];
    }

    render(){
        return html `
        <p>${this.greeting} ${this.data.name}.</p>
        <p>You have ${this.items.length} items.</p>
        `;
    }
}

// * you should use '-' when defining your element
customElements.define('My-FirstElement' , MyFirstElement);