import { LitElement, html, css } from 'lit';

export class ComponenteTitulo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                --main-test: #59CE8F;
                --main-background: #FEFBF6;
                --background--aliceBlue: #f0f8ff;
                --main-header: #F87474;
                --main-title white; 
            }

            .header{
                width: 100%;
                height: 130px;
                border: solid red 1px;
                background-color: var(--main-header);
            }

            .header--flex{
                display:flex;
                justify-content: space-around;
                align-items: center;
            }

            .header__title{
                font-family: "Inter", sans-serif;
                font-size: 44px;
                color: white;
            }

            .header__button{
                width: 70px;
                height: 65px;
                background-color: var(--main-background);
                border-radius: 8px;
            }

            .header__icon{
                display: inline-flex;
                width: 70px;
                height: 65px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url(../assets_lit/close3.svg);
                cursor: pointer;
            }

            .hidden{
                display:none
            }
        `
    ];

    static get properties() {
        return {
            header1: { type: String },
            header2: { type: String },
            header3: { type: String },
            header4: { type: String },
            header5: { type: String },
            header6: { type: String },
            title: {type: String}
        };
    }

    constructor() {
        super();
    
        this.header1 = 'Recargas y paquetes';
        this.header2 = 'Nuevo Celular';
        this.header3 = 'Contactos guardados';
        this.header4 = 'Recargar';
        this.header5 = 'Modificar contacto';
        this.title = '';
    }




    render() {
        return html`
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
        </head>
            <div class="header header--flex">
                <!-- __title--inicio
                --inicio -->
                <span class="header__title header__title--inicio">${this.title}</span>
                <div class="${this.currentView === "Recargas y paquetes" ? "hidden":"header__button" }">
                    <span class="header__icon"></span>
                </div>
            </div>
        `;
    }
}
customElements.define('componente-titulo', ComponenteTitulo);
