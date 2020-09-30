import { getCurrentDate,getDeadlineDate } from '../utils.js';

export const taskData = [
    { id: 1, taskTitle: 'Купить инструменты.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false, img : './images/1.png'},
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

export function updateData() {
    emmitEvent('update')
}

export function emmitEvent(type,data) {
    window.dispatchEvent(new CustomEvent(type,{
        detail: {data}
    }))
}

