import {LitElement, html} from 'lit-element'



class MyFirstElement extends LitElement {

    // define scoped styles in a static styles property
    static get styles(){
        // style property can be single or an Array
        // also you can link external stylesheets
        return css`
            div {color: red;}
        `;
    }

    render(){
        return html `<div>I'm Styled !</<p>`
    }
}
customElements.define('MyFirstElement' , MyFirstElement);