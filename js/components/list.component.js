import { AbstractComponent } from './abststract.component.js';
import { ItemComponent } from './item.component.js';
import { MAIN_ELEMENT, insertPosition, renderElement } from '../../utils.js';
import { taskData } from '../task.services.js';


export class ListComponent extends AbstractComponent{
    constructor(taskData) {
        super();
        this.taskData = taskData;
    }
    _afterCreate() {
        this.render()
    }
    addEventListeners() {
        window.addEventListener('update', this.dataChange.bind(this));
    }
    dataChange(e) {
        this.render()
    }

    render() {
        this.getElement().innerHTML = '';
        this.taskData.forEach(el => {
            const itemComponent = new ItemComponent(el),
                itemElement = itemComponent.getElement();
            renderElement(this.getElement(), itemElement, insertPosition.BEFORE_END);
        })
    }

    _getTemplate() {
        return(`<ul></ul>`)
    }
}