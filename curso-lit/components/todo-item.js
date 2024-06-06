import { LitElement, html, css } from 'lit';

export class TodoItem extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            eit-switch{
                display: inline-block;
            }
            .complete{
                text-decoration: line-through;
                color: yellow;
            }
        `
    ];

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            task: { type: Object }
        };
    }

    handlerChecked(e){
        // this.task.completed = !this.task.completed;
        // console.log("hello: " + this.task.completed);
        // this.task = {
        //     // name: this.task.name,
        //     // spread operator copies all properties of the object task
        //     ...this.task,
        //     completed: e.detail
        // }
        console.log("e " +e.detail);

        // re Render
        this.task.completed = e.detail;
        // force the reRender of component
        this.requestUpdate();
    }

    render() {
        return html`
            <p class="${this.task.completed ? 'complete':''}">
                <eit-switch ?check="${this.task.completed}" @eit-switch-checked="${this.handlerChecked}"></eit-switch> ${this.task.name}
            </p>
        `;
    }
}
customElements.define('todo-item', TodoItem);
