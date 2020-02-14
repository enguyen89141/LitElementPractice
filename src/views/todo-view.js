import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

class TodoView extends LitElement {

  static get properties() {
    return {
      todo: { type: Array },
      filter: { type: String },
      task: { type: String }
    }
  }

  constructor() {
    super();
    this.todos = [];
    this.filter = VisibilityFilters.SHOW_ALL;
    this.task = '';
  }

  render() {
    return html` 
      <div class="input-layout">
        <vaadin-text-field  
          placeholder="Task"
          value="${this.task}"
          @change="${this.updateTask}">
        </vaadin-text-field>
        <vaadin-button
          theme="primary"
          @click="${this.addTodo}">
          Add todo
          </vaadin-button>
        </div>
    `;
  }

  updateTask(e) {
    this.task = e.target.value;
  }

  addTodo(){
    if(this.task){
      this.todos = [...this.todos, {
        task: this.task,
        complete: false
      }];
      this.task= "";
    }
  }
}

customElements.define('todo-view', TodoView); 