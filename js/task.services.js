import { getCurrentDate,getDeadlineDate } from '../utils.js';

export let taskData = [
    { id: 1, taskTitle: 'Купить инструменты.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: true, img : './images/1.png'},
    { id: 2, taskTitle: 'Закончить проект.' ,dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false, img : './images/1.png'},
    { id: 3, taskTitle: 'Купить зимнюю куртку.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(), isChecked: false, img : './images/1.png'},
    { id: 4, taskTitle: 'Купить еду.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false, img : './images/1.png'},
    { id: 5, taskTitle: 'Поменять сцепление!',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false, img : './images/1.png'},
];

export function createData(title) {
    return {
        id: genId(taskData),
        taskTitle: title,
        dateCreate: getCurrentDate(),
        deadlineDate: getDeadlineDate(),
        isChecked: false,
        img : './images/1.png'
    }
}
export function addToData(obj) {
    taskData.push(obj)

}

export function genId(array) {
    let id = array.length + 1;
    return id;
}
                // custom event

export function updateData(array) {
    emmitEvent('update',array)
}

export function deleteTask(item) {
    taskData = taskData.filter(el => el.id !== item.id)

    emmitEvent('delete-task',taskData)
}

export function updateCheckboxStatus(item) {

     taskData.filter(el => {
        if(el.isChecked !== item.isChecked) {
            el = item;
            return el;
        }
    });
    emmitEvent('updateCheckbox',taskData)
}

export function emmitEvent(type,data) {
    window.dispatchEvent(new CustomEvent(type,{
        detail: {data}
    }))
}

