import { AbstractComponent } from './abststract.component.js';
import { deleteCompletedTasks, showActiveTasks, showAllTasks, showDoneTasks } from '../task.services.js';


export class HeaderComponent extends AbstractComponent{
    constructor() {
        super();

    }

    addEventListeners() {
        this.getModalBtn().addEventListener('click', this._createModal.bind(this));
        this.getShowFinishedBtn().addEventListener('click',this.ShowFinishedTasks.bind(this));
        this.getShowAllBtn().addEventListener('click', this.findAllTasks.bind(this));
        this.getShowActiveBtn().addEventListener('click', this.findActiveTasks.bind(this));
        this.getDeleteCompletedBtn().addEventListener('click', this.removeCompletedTasks.bind(this));
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



    getDeleteCompletedBtn() {
        return document.querySelector('.delete-finished')
    }
    removeCompletedTasks() {
        deleteCompletedTasks(this.value);
    }


    getShowActiveBtn() {
        return document.querySelector('.show-active');
    }
    findActiveTasks() {
        showActiveTasks();
    }


    getShowAllBtn() {
        return document.querySelector('.show-all')
    }
    findAllTasks() {
        showAllTasks(this.value);
    }


    getShowFinishedBtn() {
        return document.querySelector('.show-finished')

    }
    ShowFinishedTasks() {
        showDoneTasks();
    }


    _getTemplate() {
        return(`<header class ="header">
                    <div class="container">
                        <div class="header-wrapper">
                            <div class="menu-btn">
                            <button class="show-all">All</button>
                            <button class="show-active">Active</button>
                            <button class="show-finished">Finished</button>
                            <button class="delete-finished">Delete Finished</button>
                            </div>
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