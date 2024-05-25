import { html, css, LitElement } from 'lit';

export class LitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-left: 25px;
      padding-bottom: 25px;
      color: var(--lit-component-text-color, #000);
    }
    .increment-btn {
      background-color: blue;
      color: white;
      width: 90px;
      border: none;
    }
    
    .increment-btn:hover {
      background-color: transparent;
      border: 2px solid blue;
      cursor:pointer;
      color: blue;
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    who: { type: String }
  };

  // constructor initialize properties
  constructor() {
    // always call super
    super();
    this.header = 'Hey there';
    this.counter = 0;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Clicks--> ${this.counter}!</h2>
      <button class="increment-btn" @click=${this.__increment}>increment</button>
      
    `;
  }
}
