import { HeaderComponent } from './components/header.component.js';
import { BODY_ELEMENT, insertPosition, renderElement } from '../utils.js';
import { ModalComponent } from './components/modal.component.js';
import { taskData } from './task.services.js';
import { MAIN_ELEMENT } from '../utils.js';
import { ListComponent } from './components/list.component.js';


export class appComponent {
  init() {
      this.createModalComponent();
      this.createHeaderComponent();
      this.createListComponent();
  }

  createModalComponent() {
      const modalComponent = new ModalComponent(taskData),
        modalElement = modalComponent.getElement();
      renderElement(BODY_ELEMENT, modalElement, insertPosition.BEFORE_BEGIN);
      modalComponent.addEventListeners();
  }

  createHeaderComponent() {
      const headerComponent = new HeaderComponent(taskData),
        headerElement = headerComponent.getElement();
      renderElement(BODY_ELEMENT, headerElement, insertPosition.BEFORE_BEGIN);
      headerComponent.addEventListeners();
  }

  createListComponent() {
      const listComponent = new ListComponent(taskData),
        listElement = listComponent.getElement();
      renderElement(MAIN_ELEMENT, listElement, insertPosition.BEFORE_END);
      listComponent.addEventListeners();
  }
}