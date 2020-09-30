import { getCurrentDate,getDeadlineDate } from '../utils.js';

export const taskData = [
    { id: 1, taskTitle: 'Купить инструменты.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false},
    { id: 2, taskTitle: 'Закончить проект.' ,dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false},
    { id: 3, taskTitle: 'Купить зимнюю куртку.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(), isChecked: true},
    { id: 4, taskTitle: 'Купить еду.',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false},
    { id: 5, taskTitle: 'Поменять сцепление!',dateCreate: getCurrentDate(),deadlineDate : getDeadlineDate(),  isChecked: false},
];

export function createData(title) {
    return {
        id: genId(taskData),
        taskTitle: title,
        isChecked: false,
        dateCreate: getCurrentDate(),
        deadlineDate: getDeadlineDate()
    }
}
export function addToData(obj) {
    taskData.push(obj)

}

export function genId(array) {
    let id = 0;
    array.forEach(el => {
        id = array.length + 1;
    });
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