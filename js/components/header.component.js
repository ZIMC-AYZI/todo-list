import { AbstractComponent } from './abststract.component.js';
import { ListComponent } from './list.component.js';
import { BODY_ELEMENT,enterKey, insertPosition, renderElement, isValid, showModal, hideModal } from '../../utils.js';
import { ModalComponent } from './modal.component.js';
import { ItemComponent } from './item.component.js';
import { taskData,createData,addToData,updateData } from '../task.services.js';

export class HeaderComponent extends AbstractComponent{
    constructor(taskData) {
        super();
        this.taskData = taskData;
    }
    getInput() {
        return document.querySelector('.input')
    }
    getList() {
        return document.querySelector('ul')
    }

    _createTask(e) {
        const value = this.getInput().value;
        if (e.keyCode === enterKey) {
            if (isValid(value)) {

                this.getInput().style.outline = 'none';
                addToData(createData(value));
                updateData();
                this.getInput().value = '';

            } else {

                this.getInput().style.outline = '1px solid red';
                this.getInput().value = '';
            }
            }
        }

    addEventListeners() {
        this.getInput().addEventListener('keypress', this._createTask.bind(this));
        this.getModalBtn().addEventListener('click', this._createModal.bind(this));


    }
    getModalBtn() {
        return document.querySelector('.modal-btn');
    }
    _createModal() {
        this.showModal();
    }

    getModal() {
        return document.querySelector('.overlay');
    }

    showModal() {
            this.getModal().style.display = 'flex';
    }

    _getTemplate() {
        return(`<header class ="header">
                    <div class="container">
                        <div class="header-wrapper">
                            <div class="logo">
                                toDO
                            </div>
                            <div class="right-side">
                                <p>Create new task</p> <input class="input" type="text">
                                <button class="modal-btn"><p>&#10006;</p></button>
                           </div>
                        </div>
                        </div>
                    </div>

                 </header>`)
    }
}