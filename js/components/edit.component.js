import { AbstractComponent } from './abststract.component.js';
import { addToData, taskData, updateData, renameTasks } from '../task.services.js';


export class EditComponent extends AbstractComponent{
    constructor(value) {
        super();
        this.taskTitle = value.taskTitle;
        this.value = value;
        this.id = value.id;
        this.img = value.img;
        this.dateCreate = value.dateCreate;
        this.deadlineDate = value.deadlineDate;
    }

    addEventListeners() {
        this.getCloseBtn().addEventListener('click', this.closeModal.bind(this));
        this.getSaveBtn().addEventListener('click', this.renameCurrentTasks.bind(this));
    }

    getSaveBtn() {
        return this.getElement().querySelector('.edit-save');
    }
    getCloseBtn() {
        return document.querySelector('.close-window');
    }


    _afterCreate() {

    }

    getInput() {
        return this.getElement().querySelector('.edit-modal-input')
    }

    getEditStartDate() {
        return document.querySelector('.calendar-start')
    }

    getEditDeadlineDate() {
        return document.querySelector('.calendar-finish')
    }

    closeModal() {
        this.getInput().value = '';
        this.getElement().style.display = 'none';
    }

    createNewData() {
        this.value.taskTitle = this.getInput().value;
        this.value.dateCreate = this.getEditStartDate().value;
        this.value.deadlineDate = this.getEditDeadlineDate().value;
        return this.value
    }

    renameCurrentTasks() {
        renameTasks(this.createNewData());

        this.closeModal()
    }


    _getTemplate() {
        return (`<div class="edit-overlay">
            <div class="container">
                <div class="edit-modal-window">
                    <div class="edit-modal-wrapper">
                        <p class="edit-task">Your Task</p> <input class="edit-modal-input" type="text">
                        <div class="choose-data">
                            <label class="start">Start date &dArr; </label>
                            <input type="date"  class="calendar-start">
                            <label class="finish">Finish date &dArr; </label>
                            <input type="date" class="calendar-finish">
                        </div>
                    </div>
                </div>
                <button class="close-window">Cancel</button>
                <button class="edit-save">Save</button>
            </div>       
        </div>`)
    }
}