import { AbstractComponent } from './abststract.component.js';
import { ItemComponent } from './item.component.js';
import { insertPosition, renderElement } from '../../utils.js';

export class ListComponent extends AbstractComponent{
    constructor(value) {
        super();
        this.value = value;
    }
    _afterCreate() {
        const itemComponent = new ItemComponent(this.value),
            itemElement = itemComponent.getElement();
        renderElement(this.getElement(), itemElement, insertPosition.BEFORE_BEGIN);
    }

    _getTemplate() {
        return(`<ul></ul>`)
    }
}