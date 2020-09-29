import { AbstractComponent } from './abststract.component.js';


export class ItemComponent extends AbstractComponent{
    constructor(value) {
        super();
        this.value = value;
    }
    _afterCreate() {

    }

    _getTemplate() {
        return(`<li>${this.value}</h3>
        <div></div>
        <div></div>
        </li>`)
    }
}