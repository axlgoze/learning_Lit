import { html, css, LitElement } from 'lit';

export class LitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-left: 25px;
      padding-bottom: 25px;
      color: var(--lit-component-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    who: { type: String }
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <h4>Hello <b>${this.who}</b> </h4>
    `;
  }
}
