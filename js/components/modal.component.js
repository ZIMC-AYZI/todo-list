import { AbstractComponent } from './abststract.component.js';
import { isValid } from '../../utils.js';
import { addToData, taskData, genId } from '../task.services.js';
import { enterKey } from '../../utils.js';


export class ModalComponent extends AbstractComponent {
  constructor(taskData) {
    super();
    this.taskData = taskData
  }

  getCloseBtn() {
    return document.querySelector('.close-window');
  }

  addEventListeners() {
    this.getCloseBtn().addEventListener('click', this.closeModal.bind(this));
    this.getInput().addEventListener('keypress', this.addTask.bind(this));
    this.getSaveBtn().addEventListener('click', this.addTask.bind(this));
  }

  closeModal() {
    this.getInput().value = '';
    this.getElement().style.display = 'none';
  }

  getCalendarStart() {
    return this.getElement().querySelector('.calendar-start')
  }

  getCalendarEnd() {
    return this.getElement().querySelector('.calendar-finish')
  }

  getSaveBtn() {
    return document.querySelector('.save')
  }

  getInput() {
    return this.getElement().querySelector('.modal-input')
  }

  createNewData() {

    return {
      id: genId(taskData),
      taskTitle: this.getInput().value,
      dateCreate: this.getCalendarStart().value,
      deadlineDate: this.getCalendarEnd().value,
      isChecked: false,
      img: './images/1.png'
    }
  }

  addTask(e) {

    if (e.keyCode === enterKey || e.target === this.getSaveBtn()) {
      this.ModalValueValidate();
    }
  }

  ModalValueValidate() {
    const value = this.getInput().value;

    if (isValid(value) && value !== '') {
      this.getInput().style.outline = 'none';
      addToData(this.createNewData());
      this.getInput().value = '';
      this.closeModal();

    } else {
      this.getInput().style.outline = '1px solid red';
      this.getInput().value = '';
    }
  }

  _getTemplate() {
    return (`<div class="overlay">
              <div class="container">
                 <div class="modal-window">
                    <div class="modal-wrapper">
                        <div class="modal-block">
                          <p class="new-task">Create new task</p> <input class="modal-input" type="text">
                              <div class="choose-data">
                                  <label class="start">Start date &dArr; </label>
                                  <input type="date" class="calendar-start">
                                  <label class="finish">Finish date &dArr; </label>
                                  <input type="date" class="calendar-finish">
                              </div>
                        </div>
                    </div> 
                 </div>
                  <button class="close-window">Cancel</button>
                  <button class="save">Save</button>
              </div>
        </div>`)
  }
}