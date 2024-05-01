// MORE EXPRESSIONS

import {LitElement, html} from 'lit';

export class MoreExpressions extends LitElement {
  static properties = {
    checked: {},
  };

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <div>
         <!-- The ?attributeName syntax tells Lit you want to set or remove a boolean attribute based on the value of the expression. -->
         <input ?disabled=${!this.checked} type="text" value="Hello there.">
      </div>
      <label><input type="checkbox" @change=${this.setChecked}> Enable editing</label>
    `;
  }

  setChecked(event) {
    this.checked = event.target.checked;
  }
}
customElements.define('more-expressions', MoreExpressions);