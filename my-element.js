// TEMPLATE LOGIC

import {LitElement, html} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
  };

  constructor() {
    super();
    // asignando un array de objetos
    this._listItems = [
    // dos objetos con propiedades
      {text: 'Start Lit tutorial', completed: true},
      {text: 'Make to-do list', completed: false},
    ];
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
         <!-- TODO: Render list items. -->
        // aplica funcion map()
        ${this._listItems.map((item) =>
            html`<li>${item.text}</li>`
        )}
      </ul>
        
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }
  
  //click handler
  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
    }

  // TODO: Add click handler.
  addToDo() {
    // operador de propagacion para crear un nuevo array. Esto es una forma de hacer una copia del array original antes de modificarlo.
    this._listItems = [...this._listItems,
        {text: this.input.value, completed: false}];
      this.input.value = '';
  }

  //   Mutating objects and arrays.

}
customElements.define('todo-list', ToDoList);
