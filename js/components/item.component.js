import { AbstractComponent } from './abststract.component.js';
import { taskData } from '../task.services.js';
import { EditComponent } from './edit.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../../utils.js';
import { updateCheckboxStatus,deleteTask, showDoneTasks, showAllTasks, showActiveTasks,deleteCompletedTasks } from '../task.services.js';


export class ItemComponent extends AbstractComponent{
    constructor(value) {
        super();
        this.id = value.id;
        this.taskTitle = value.taskTitle;
        this.data = value.data;
        this.dateCreate = value.dateCreate;
        this.deadlineDate = value.deadlineDate;
        this.isChecked = value.isChecked;
        this.img = value.img;
        this.value = value;

    }
    _afterCreate() {
        if (this.isChecked){
            this.getElement().style.opacity = '0.5';
            this.getElement().classList.add('task-done');
            this.getCheckbox().checked = true
        } else {
            this.getElement().style.opacity = '1';
            this.getElement().classList.remove('task-done');
            this.getCheckbox().checked = false;
        }


    }



    addEventListeners() {
        this.getCheckbox().addEventListener('click', this.updateState.bind(this));
        this.getCloseBtn().addEventListener('click', this.removeTask.bind(this));
        this.getEditModalBtn().addEventListener('click', this.createEditModal.bind(this));

    }

    getCloseBtn() {
        return this.getElement().querySelector('.remove')
    }
    removeTask() {
        deleteTask(this.value);
        console.log(this.value)
    }

    updateState() {
        this.value.isChecked = !this.value.isChecked;
        updateCheckboxStatus(this.value);

    }

    getEditModalBtn() {
        return this.getElement().querySelector('.edit-todo');
    }

    createEditModal() {
        this.showEditModal();

    }

    getEditModal() {
        return document.querySelector('.edit-overlay');
    }
    getEditValue() {
        return document.querySelector('.edit-modal-input');
    }


    getEditStartDate() {
        return document.querySelector('.calendar-start')
    }

    getEditDeadlineDate() {
        return document.querySelector('.calendar-finish')
    }


    showEditModal() {
        const editComponent = new EditComponent(this.value),
            editElement = editComponent.getElement();
        renderElement(BODY_ELEMENT, editElement, insertPosition.BEFORE_BEGIN);
        editComponent.addEventListeners();

        console.log(this.getEditStartDate().value)
        this.getEditModal().style.display = 'flex';
        this.getEditValue().value = this.taskTitle;
        this.getEditStartDate().value = this.dateCreate;
        this.getEditDeadlineDate().value = this.deadlineDate;

    }

    getCheckbox() {
        return this.getElement().firstChild.nextSibling
    }




    _getTemplate() {
        return(`<li>
        <input class="checkbox" data-uid ="${this.id}" type="checkbox">
            <p class="task-name">${this.id}</p>
            <div class="data">
                <p>${this.taskTitle}</p>
                <p>dateCreate : ${this.dateCreate}</p>
                <p>deadlineDate : ${this.deadlineDate}</p>
            </div>
            <button data-uid="${this.id}" class="remove">X</button>
            <button class="edit-todo">
                <img class="edit" src="${this.img}" alt="">
            </button>
        </li>`)
    }
}