import { AbstractComponent } from './abststract.component.js';
import { isValid } from '../../utils.js';
import { addToData, createData, taskData, updateData,genId } from '../task.services.js';
import { enterKey,getCurrentDate } from '../../utils.js';


export class ModalComponent extends AbstractComponent {
    constructor() {
        super();

    }
                         // close Btn
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
                            // calendar
    getCalendarStart() {
        return this.getElement().querySelector('.calendar-start')
    }
    getCalendarEnd() {

        return this.getElement().querySelector('.calendar-finish')
    }
                         // save to data

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
            dateCreate : this.getCalendarStart().value,
            deadlineDate : this.getCalendarEnd().value,
            isChecked: false
        }
    }

    addTask(e) {
        const value = this.getInput().value;
        if (e.keyCode === enterKey || e.target === this.getSaveBtn()) {
            if (isValid(value)) {
                this.getInput().style.outline = 'none';
                addToData(this.createNewData());
                console.log(taskData)
                updateData();

                this.getInput().value = '';
                this.closeModal();

            } else {

                this.getInput().style.outline = '1px solid red';
                this.getInput().value = '';
            }
        }

    }
    _afterCreate() {

    }

    _getTemplate() {
        return(`<div class="overlay">
            <div class="container">
                <div class="modal-window">
                <div class="modal-wrapper">
                    <p>Create new task</p> <input class="modal-input" type="text">
                        <div class="choose-data">
                            <label for="start">Start date : </label>
                            <input type="date" class="calendar-start">
                            <label for="finish">Finish date : </label>
                            <input type="date" class="calendar-finish">
                        </div>
                    </div>
                </div>
                <button class="close-window">Cancel</button>
                <button class="save">Save</button>
            </div>
        </div>`)
    }
}