import { LitElement, html, css } from 'lit';

export class ComponenteAgregarContacto extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .agregar{
                padding-left: 40px;
            }
            .agregar__titulo{
                font-family: "Inter", sans-serif;
                color: var(-color--titulos);
                text-transform: uppercase;
                font-size: 38px;
            }
            .form{
                
            }
            .form__titulo__input{
                font-size: 25px;
                font-weight: normal;
            }
            .form__input{
                width: 600px;
                height: 40px;
                font-size: 25px;
                color: #828282;
            }
            input{
                background-color: #F1F1F1;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #E0E0E0;
                border-radius: 8px;
            }
        `
    ];

    static get properties() {
        return {
            nuevoContacto: { type: Object },
        };
    }


    constructor() {
        super();
    
        this.nuevoContacto = {
            phone: '',
            company: '',
            name: ''
        }
    
    }


    _handleInput(e){
        const { name, value } = e.target;
        this.nuevoContacto = {... this.nuevoContacto, [name]: value};
    }

    _handleGuardar(){
        console.log(this.nuevoContacto);
        this._limpiarCampos();
    }

    _limpiarCampos(){
        this.nuevoContacto = {
            phone: '',
            company: '',
            name: ''
        };
        // Para forzar la actualización del DOM
        this.requestUpdate();
    }


    render() {
        return html`
            <div class="agregar">
            <div class="agregar__titulo">Datos del contacto</div>
            <div class="form">
                <p class="form__titulo__input">Número de celular</p>
                <input type="text" name="phone" placeholder="55 1234 4568" class="form__input"
                @input="${this._handleInput}"
                >

                <p class="form__titulo__input">Compañia</p>
                <select name="company" id="type" value="" class="form__input" 
                @input="${this._handleInput}"
                >
                    <option value="telcel">telcel</option>
                    <option value="movistar">movistar</option>
                    <option value="unefon">unefon</option>
                    <option value="bait">bait</option>
                    <option value="at&t">at&t</option>
                </select>

                <p class="form__titulo__input">Nombre del destinatario</p>
                <input type="text" name="name" class="form__input"
                @click="${this._handleInput}"
                >
            </div>
            <div class="agregar__button">
                <!-- componente-boton -->
                <button @click="${this._handleGuardar}">Guardar</button>
            </div>
        </div>
        `;
    }
}
customElements.define('componente-agregar-contacto', ComponenteAgregarContacto);
