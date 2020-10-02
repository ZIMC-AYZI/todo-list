import { AbstractComponent } from './abststract.component.js';


export class EditComponent extends AbstractComponent{
    constructor() {
        super();
    }

    _getTemplate() {
        return (`<div class="edit-overlay">
            <div class="container">
                <div class="edit-modal-window">
                    <div class="edit-modal-wrapper">
                        <p class="edit-task">Create new task</p> <input class="edit-modal-input" type="text">
                    </div>
                </div>
                <button class="close-window">Cancel</button>
                <button class="save">Save</button>
            </div>       
        </div>`)
    }
}