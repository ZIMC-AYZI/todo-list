import { AbstractComponent } from './abststract.component.js';


export class HeaderComponent extends AbstractComponent{
    constructor() {
        super();

    }

    addEventListeners() {
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
                                blacknote
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