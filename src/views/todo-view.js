import { LitElement, html } from 'lit-element'; 

const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

class TodoView extends LitElement { 

  static get properties(){
    return {
      todo: {type: Array},
      filter: { type: String},
      task: {type: String}
    }
  }

  constructor(){
    super();
    this.todos = [];
    this.filter = VisibilityFilters.SHOW_ALL;
    this.task = '';
  }

  render() {
    return html` 
      <p>Hello world</p>
    `;
  }
}

customElements.define('todo-view', TodoView); 