import {LitElement, html} from 'lit-element'

// expressions in static files
const mainColor= css`red`;

class MyFirstElement extends LitElement {

    // define scoped styles in a static styles property
    static get styles(){
        // style property can be single or an Array
        // also you can link external stylesheets
        return css`
            div {color: ${mainColor}}
        `;
    }

    render(){
        return html `<div>something!</<p>`
    }
}
customElements.define('MyFirstElement' , MyFirstElement);