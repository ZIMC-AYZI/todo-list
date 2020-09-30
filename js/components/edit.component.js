import { AbstractComponent } from './abststract.component.js';


export class EditComponent extends AbstractComponent{



    getCloseBtn() {
        return this.getElement().querySelector('.close-window');
    }
    getSaveBtn() {
        return this.getElement().querySelector('.save');
    }

    addEventListeners(){

    }

    _getTemplate() {
        return `(
        <div class="overlay">
            <div class="container">
                <div class="modal-window">
                    <div class="modal-wrapper">
                        <p class="edit-task">Create new task</p> <input class="edit-modal-input" type="text">
                    </div>
                </div>
                <button class="close-window">Cancel</button>
                <button class="save">Save</button>
            </div>       
        </div>
        )`
    }
}