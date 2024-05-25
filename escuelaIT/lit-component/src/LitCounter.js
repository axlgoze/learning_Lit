import { LitElement } from 'lit-element';

export class LItcounter extends LitElement {

    static properties = {
        header: {type:String}
    }

    constructor() {
        super();
        this.header = 'Counter component'
    }

    render() {
        return html`
            <h2>Counter component!</h2>
        `;
    }
}
