import { LitElement, html, css } from 'lit';

export class TimestampToDate extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    /**
      * Declared properties and their corresponding attributes
      */
    static  properties ={
        
            timestamp: {type:String} 
        
    }

    _getDate(timestamp){
        // create a Date object
        let date= new Date(parseInt(timestamp));
        // create a string with the date
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    }

    render() {
        return html`
            <!-- binding -->
            <span>${this._getDate(this.timestamp)}</span>
        `;
    }
}
customElements.define('timestamp-to-date', TimestampToDate);
