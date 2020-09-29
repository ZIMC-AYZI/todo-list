import { AbstractComponent } from './abststract.component.js';
import { ListComponent } from './list.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../../utils.js';

export class HeaderComponent extends AbstractComponent{
    constructor() {
        super();
    }
    getInput() {
        return document.querySelector('.input')
    }
    _createTask(e) {
        const value = this.getInput().value;
        if (e.keyCode === 13 ){
            const listComponent = new ListComponent(value),
            listElement = listComponent.getElement();
            renderElement(BODY_ELEMENT, listElement, insertPosition.BEFORE_END);

            this.getInput().value = null;
        }
    }
    addEventListeners() {
        this.getInput().addEventListener('keypress', this._createTask.bind(this))
    }
    _afterCreate() {

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
                           </div>
                        </div>
                        </div>
                    </div>

                 </header>`)
    }
}