import { AbstractComponent } from './abststract.component.js';
import { ItemComponent } from './item.component.js';
import { insertPosition, renderElement } from '../../utils.js';
import { enterKey, isValid } from '../../utils.js';
import { addToData, createData, updateData } from '../task.services.js';
import { taskData } from '../task.services.js';


export class ListComponent extends AbstractComponent{
    constructor(taskData) {
        super();
        this.taskData = taskData;
    }

    getInput() {
        return document.querySelector('.input')
    }

    ifValueValidate() {
        const value = this.getInput().value;

        if (isValid(value) && value !== '') {
            this.getInput().style.outline = 'none';
            addToData(createData(value));
            updateData();
            this.getInput().value = '';
        } else {
            this.getInput().style.outline = '1px solid red';
            this.getInput().value = '';
        }
    }

    _createTask(e) {
        if (e.keyCode === enterKey) {
            this.ifValueValidate()
        }
    }

    getRemoveBtn() {
        return this.getElement().querySelectorAll('.remove')
    }

    deleteTask() {
        this.getRemoveBtn().forEach(el => {
            el.addEventListener('click', (e) => {
                const target = e.target;
                    if (target){
                        target.parentElement.remove()
                        console.log(taskData)
                    }
            })
        })
    }





    _afterCreate() {
        this.render()
    }
    addEventListeners() {
        window.addEventListener('update', this.dataChange.bind(this));
        this.getInput().addEventListener('keypress', this._createTask.bind(this));
    }
    dataChange(e) {
        this.render()
    }

    getCheckbox() {
        return this.getElement().querySelectorAll('.checkbox');
    }
    findAllCheckboxes() {
        this.getCheckbox().forEach(el => {
            el.addEventListener('click', (e) => {
                const target = e.target;

                if (target.checked){
                    target.isChecked = true;
                    target.parentElement.style.opacity = '0.5';
                    target.parentElement.classList.add('task-done');
                } else {
                    target.parentElement.style.opacity = '1';
                    target.parentElement.classList.remove('task-done');
                }

            })
        })
    }




    render() {
        this.getElement().innerHTML = '';
        this.taskData.forEach(el => {
            const itemComponent = new ItemComponent(el),
                itemElement = itemComponent.getElement();
            renderElement(this.getElement(), itemElement, insertPosition.BEFORE_END);
            this.findAllCheckboxes();
            this.deleteTask()
            itemComponent.addEventListeners();

        })
    }

    _getTemplate() {
        return(`<ul></ul>`)
    }
}