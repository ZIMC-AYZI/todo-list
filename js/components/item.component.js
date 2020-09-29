import { AbstractComponent } from './abststract.component.js';
import { getCurrentDate, getDeadlineDate } from '../../utils.js';

export class ItemComponent extends AbstractComponent{
    constructor(value) {
        super();
        this.id = value.id;
        this.taskTitle = value.taskTitle;
        this.data = value.data;
        this.dateCreate = value.dateCreate
        this.deadlineDate = value.deadlineDate

    }
    _afterCreate() {

    }


    _getTemplate() {
        return(`<li><p class="task-name">${this.id}</p></h3>
        <div class="data">
        <p>${this.taskTitle}</p>
        <p>dateCreate : ${this.dateCreate}</p>
        <p>deadlineDate : ${this.deadlineDate}</p>
        </div>
        </li>`)
    }
}