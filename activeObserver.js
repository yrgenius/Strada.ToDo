import { state, render } from "./state.js";

function changeState(event) {
    let hiStoreArray = state.list.filter(element => element.importance);
    let lowStoreArray = state.list.filter(element => !element.importance);
    let id = event.target.parentElement.id;

    if (event.target.parentElement.parentElement.parentElement.classList[1] === 'list__high') {
        clearStatusAll(hiStoreArray);
        for (const element of hiStoreArray) {
            if (element.id === id) {
                element.status = 'active';
            }
        }
    }

    if (event.target.parentElement.parentElement.parentElement.classList[1] === 'list__low') {
        clearStatusAll(lowStoreArray);
        for (const element of lowStoreArray) {
            if (element.id === id) {
                element.status = 'active';
            }
        }
    }

    render(state.list);
}

function clearStatusAll(array) {
    for (let el of array) {
        el.status = 'To Do';
    }
}

export { changeState };