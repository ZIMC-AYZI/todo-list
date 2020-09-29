import { HeaderComponent } from './components/header.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../utils.js';
import { ModalComponent } from './components/modal.component.js';
import { ItemComponent } from './components/item.component.js';
import { taskData } from './task.services.js';
import { MAIN_ELEMENT } from '../utils.js';
import { ListComponent } from './components/list.component.js';


export class appComponent {
    init () {
        const modalComponent = new ModalComponent(),
            modalElement = modalComponent.getElement();
        renderElement(BODY_ELEMENT,modalElement, insertPosition.BEFORE_BEGIN);
        modalComponent.addEventListeners();

        const headerComponent = new HeaderComponent(taskData),
            headerElement = headerComponent.getElement();
            renderElement(BODY_ELEMENT, headerElement, insertPosition.BEFORE_BEGIN);
             headerComponent.addEventListeners();

        const listComponent = new ListComponent(taskData),
            listElement = listComponent.getElement();
        renderElement(MAIN_ELEMENT, listElement, insertPosition.BEFORE_END);
        listComponent.addEventListeners();

    }
}