// define and render a template

import {LitElement, html} from 'lit-element'

// define a class that extends LitElement
class MyFirstElement extends LitElement {
    // add a render function 
    render(){
        // Write your template in HTML inside a JavaScript template literal by enclosing the raw HTML in back-ticks
        // tag your template literal with the html tag function to create a result
        return html `<p>Template content</<p>`
        // tipically returns a single templateResult object
    }
}
// define your element
customElements.define('MyFirstElement' , MyFirstElement);