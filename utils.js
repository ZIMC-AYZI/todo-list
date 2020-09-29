
export const enterKey = 13;
export const BODY_ELEMENT = document.querySelector('body');
export const MAIN_ELEMENT = document.querySelector('main');
export const insertPosition = {
    BEFORE_BEGIN: 'beforebegin',
    BEFORE_END: `beforeend`
};


export function renderElement(container, element, position) {
    switch (position){

        case insertPosition.BEFORE_BEGIN: container.prepend(element);
            break;
        case insertPosition.BEFORE_END: container.append(element);
            break;
        default: container.prepend(element);
    }
}

export function createElement(template) {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstChild
}

export function isValid(str){
    let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
    if (pattern.test(str)) {
        console.log('error')
        return false;
    }
    return true;
}

export function getCurrentDate(currentData) {
    currentData = new Date().toLocaleDateString();
    return currentData;
}

export function getDeadlineDate(deadLineData) {
    deadLineData = new Date();
    deadLineData.setDate(deadLineData.getDate() + 1);

    return deadLineData.toLocaleDateString();
}



export function showModal(modal) {
    if (modal) {
        modal.remove()
    } else {
        modal.style.display = 'flex';
    }
}

export function hideModal(modal) {
    modal.style.display = 'none';
}