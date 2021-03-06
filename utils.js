
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
    let pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

    if (pattern.test(str)) {
        return false;
    }
    return true;
}

export function getCurrentDate(currentData) {
    currentData = new Date().toISOString().substring(0, 10);
    return currentData;
}

export function getDeadlineDate(deadLineData) {
    deadLineData = new Date();
    deadLineData.setDate(deadLineData.getDate() + 1);

    return deadLineData.toISOString().substring(0, 10);
}

export function ifModalDataValidate(start, end) {
    if (start.value !== '' && end.value !== '' && start.value <= end.value ){
        end.style.border = 'none';
        return true;
    } else {
        end.style.border = '3px solid red';
        return false;
    }
}