import { state, render } from "./state.js";

export function changeState(event) {
    let hiStoreArray = state.list.filter(element => element.importance);
    let lowStoreArray = state.list.filter(element => !element.importance);

    let id = event.target.parentElement.id;
    let wrapper = event.target.parentElement.parentElement.parentElement.classList[1];

    changeStatus(wrapper, hiStoreArray, id, 'list__high');
    changeStatus(wrapper, lowStoreArray, id, 'list__low');

    render(state.list);
}

function clearStatusAll(array) {
    for (let el of array) {
        el.status = 'To Do';
    }
}

function changeStatus(wrapper, taskList, id, classTask) {
    if (wrapper === classTask) {
        clearStatusAll(taskList);
        for (const element of taskList) {
            if (element.id === id) {
                element.status = 'active';
            }
        }
    }
}
