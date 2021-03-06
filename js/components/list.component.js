import { AbstractComponent } from './abststract.component.js';
import { ItemComponent } from './item.component.js';
import { insertPosition, renderElement } from '../../utils.js';
import { enterKey, isValid } from '../../utils.js';
import { addToData, createData } from '../task.services.js';


export class ListComponent extends AbstractComponent {
  constructor(taskData) {
    super();
    this.taskData = taskData;
  }

  getInput() {
    return document.querySelector('.input')
  }

  ValueValidate() {
    const value = this.getInput().value;

    if (isValid(value) && value !== '') {
      this.getInput().style.outline = 'none';
      addToData(createData(value));
      this.getInput().value = '';
    } else {
      this.getInput().style.outline = '1px solid red';
      this.getInput().value = '';
    }
  }

  _createTask(e) {

    if (e.keyCode === enterKey) {
      this.ValueValidate();
    }
  }

  _afterCreate() {
    this.render(this.taskData);
  }

  addEventListeners() {
    this.getInput().addEventListener('keypress', this._createTask.bind(this));
    window.addEventListener('update', this.dataChange.bind(this));
    window.addEventListener('updateCheckbox', this.dataChange.bind(this));
    window.addEventListener('delete-task', this.dataChange.bind(this));
    window.addEventListener('updateTasks', this.dataChange.bind(this));
    window.addEventListener('show-done-tasks', this.dataChange.bind(this));
    window.addEventListener('show-all-tasks', this.dataChange.bind(this));
    window.addEventListener('show-active-tasks', this.dataChange.bind(this));
    window.addEventListener('delete-completed-tasks', this.dataChange.bind(this));
    window.addEventListener('sort-by-date', this.dataChange.bind(this));
    window.addEventListener('sort-by-text', this.dataChange.bind(this));
  }

  dataChange(e) {
    this.render(e.detail.data)
  }

  createItemComponent(el) {
    const itemComponent = new ItemComponent(el),
      itemElement = itemComponent.getElement();

    renderElement(this.getElement(), itemElement, insertPosition.BEFORE_END);
    itemComponent.addEventListeners();
  }

  render(array) {
    this.getElement().innerHTML = '';
    array.forEach(el => {
        this.createItemComponent(el)
    });
  }

  _getTemplate() {
    return (`<ul></ul>`)
  }
}