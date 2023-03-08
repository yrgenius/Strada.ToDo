import { state, render } from "./state.js";

function activeObserver() {
    try {
        let [hiListOnPage, lowListOnPage] = document.querySelectorAll('.list');
        let hiStoreArray = state.list.filter(element => element.importance);
        let lowStoreArray = state.list.filter(element => !element.importance);
        let highCheckList = hiListOnPage.querySelectorAll('.list__input');
        let lowCheckList = lowListOnPage.querySelectorAll('.list__input');

        for (let el of state.list) {
            if (el.status === 'active') console.log(el.status);
        }
    } catch (err) {
        console.log('error in activeObserver.js');
        console.log(err);
    }

}

function changeState(event) {
    let hiStoreArray = state.list.filter(element => element.importance);
    let lowStoreArray = state.list.filter(element => !element.importance);

    let id = event.target.parentElement.id;

    if (event.target.parentElement.parentElement.parentElement.classList[1] === 'list__high') {
        console.log("list__hight"); //del
        clearStatusAll(hiStoreArray);
        for (const element of hiStoreArray) {
            if (element.id === id) {
                element.status = 'active';
            }
        }
    }

    if (event.target.parentElement.parentElement.parentElement.classList[1] === 'list__low') {
        console.log('list__low'); //del
        clearStatusAll(lowStoreArray);
        for (const element of lowStoreArray) {
            if (element.id === id) {
                element.status = 'active';
            }
        }
    }

    console.dir(state.list); // del
    render(state.list);
}

function clearStatusAll(array) {
    for (let el of array) {
        el.status = 'To Do';
    }
}

export { changeState };