import { getCurrentDate, getDeadlineDate } from '../utils.js';

export let taskData = [
  {
    id: 1,
    taskTitle: 'Купить инструменты.',
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: true,
    img: './images/1.png'
  },
  {
    id: 2,
    taskTitle: 'Закончить проект.',
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: false,
    img: './images/1.png'
  },
  {
    id: 3,
    taskTitle: 'Купить зимнюю куртку.',
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: false,
    img: './images/1.png'
  },
  {
    id: 4,
    taskTitle: 'Купить еду.',
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: false,
    img: './images/1.png'
  },
  {
    id: 5,
    taskTitle: 'Поменять сцепление!',
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: false,
    img: './images/1.png'
  }
];

export function createData(title) {
  return {
    id: generateId(taskData),
    taskTitle: title,
    dateCreate: getCurrentDate(),
    deadlineDate: getDeadlineDate(),
    isChecked: false,
    img: './images/1.png'
  }
}

export function addToData(obj) {
  taskData.push(obj);

  emitEvent('update', taskData)
}

export function generateId(array) {
  let id = array.length + 1;
  return id;
}

export function deleteCompletedTasks() {
  taskData = taskData.filter(el => !el.isChecked)

  emitEvent('delete-completed-tasks', taskData)
}


export function showActiveTasks() {
  const activeTasks = taskData.filter(el => {

    return !el.isChecked
  });
  emitEvent('show-active-tasks', activeTasks)
}


export function showAllTasks() {
  emitEvent('show-all-tasks', taskData)
}

export function showDoneTasks() {
  const doneTasks = taskData.filter(el => el.isChecked === true);

  emitEvent('show-done-tasks', doneTasks)
}

export function renameTasks(item) {
  taskData.forEach(el => {

    if (el.id === item.id) {
      el = item;
      return el;
    }
  });

  emitEvent('updateTasks', taskData)
}

export function deleteTask(item) {
  taskData = taskData.filter(el => el.id !== item.id);

  emitEvent('delete-task', taskData)
}

export function updateCheckboxStatus(item) {

  taskData.filter(el => {

    if (el.isChecked !== item.isChecked) {
      el = item;
      return el;
    }
  });

  emitEvent('updateCheckbox', taskData)
}

export function emitEvent(type, data) {
  window.dispatchEvent(new CustomEvent(type, {
    detail: {data}
  }))
}

export function sortByDate() {
  taskData = taskData.sort((a, b) => {

    if (a.dateCreate < b.dateCreate) {
      return -1;
    } else {
      return 1;
    }
  });

  emitEvent('sort-by-date', taskData)
}

export function sortByText() {
  taskData = taskData.sort((a, b) => {

    if (a.taskTitle < b.taskTitle) {
      return -1;
    } else {
      return 1;
    }
  });

  emitEvent('sort-by-text', taskData)
}