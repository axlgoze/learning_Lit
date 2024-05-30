import { LitElement, html, css } from 'lit';

export class ComponentePlantilla extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color: #FEFBF6;
            }

            .template{
                width: 100%;
                height: 800px;
                display:flex;
                flex-direction:column;
            }

            .header{
                width: 100%;
                height: 130px;
                border: solid red 1px;
                background-color:
            }

            .body{
                width: 100%;
                height: 800px;
                border: solid blue 1px;
                background-color:
            }
        `
    ];

    render() {
        return html`
            <div class="template">
                <div class="header">
                <componente-titulo></componente-titulo>
                </div>
                <div class="body"></div>
            </div>
        `;
    }
}
customElements.define('componente-plantilla', ComponentePlantilla);
