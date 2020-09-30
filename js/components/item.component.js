import { AbstractComponent } from './abststract.component.js';
import { taskData } from '../task.services.js';
import { EditComponent } from './edit.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../../utils.js';

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

    }
    _afterCreate() {
        const editComponent = new EditComponent(),
            editElement = editComponent.getElement();
        renderElement(BODY_ELEMENT, editElement, insertPosition.BEFORE_BEGIN);
        editComponent.addEventListeners();
    }



    addEventListeners() {
        this.getModalBtn().addEventListener('click', this.createModal.bind(this));
    }

    getModalBtn() {
        return this.getElement().querySelector('.edit-todo');
    }

    createModal() {
        this.showModal();
    }

    getModal() {
        return this.getElement().querySelector('.overlay');
    }

    showModal() {
        this.getModal().style.display = 'flex';
    }



    _getTemplate() {
        return(`<li>
        <input class="checkbox" type="checkbox">
            <p class="task-name">${this.id}</p>
            <div class="data">
                <p>${this.taskTitle}</p>
                <p>dateCreate : ${this.dateCreate}</p>
                <p>deadlineDate : ${this.deadlineDate}</p>
            </div>
            <button class="remove">X</button>
            <button class="edit-todo">
                <img class="edit" src="${this.img}" alt="">
            </button>
        </li>`)
    }
}