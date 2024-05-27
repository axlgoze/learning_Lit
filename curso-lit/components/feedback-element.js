import { LitElement, html} from 'lit';

export class FeedbackElement extends LitElement {


    static properties={
            msg: {type:String},
            opened: {type: Boolean}
    }

    constructor() {
        super();
    }

    _open(message){
        this.msg = message;
        this.opened = true;

        setTimeout(()=> this.opened = false, 2000)
    }

    render() {
        return html`

        <style>
            div{
                overflow: hidden;
                height: 0;
            }
            .opened{
                height: 100px;
                font-size: 2em;
            }
        </style>

        <div class="${this.opened ? 'opened':''}">
            <h1>${this.msg}</h1>
        </div>
        `;
    }
}
customElements.define('feedback-element', FeedbackElement);