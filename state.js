import { createNewElement } from "./createNewElement.js";

export const state = {
    countId: 0,
    list: [],

    addTask(event) {
        event.preventDefault();

        let task = event.target.previousElementSibling.value;
        if (task) {
            state.list.push({
                id: `${state.countId}`,
                text: `${task}`,
                status: 'To Do',
                importance: (event.target.previousElementSibling.classList[1] === 'input__high'),
            });
        }
        state.countId++;
        render(state.list);
    },

    deleteTask(event) {
        let id = event.target.parentElement.id;
        let deletedIndex = state.list.findIndex(obj => obj.id === id);

        state.list.splice(deletedIndex, 1);
    }
}

export function render(list) {
    let [hiListOnPage, lowListOnPage] = document.querySelectorAll('.list');
    let hiStoreArray = list.filter(element => element.importance);
    let lowStoreArray = list.filter(element => !element.importance);

    clearDom(hiListOnPage);
    clearDom(lowListOnPage);

    for (let element of hiStoreArray) {
        createNewElement(hiListOnPage, element.text, element.id, element.status);
    }

    for (let element of lowStoreArray) {
        createNewElement(lowListOnPage, element.text, element.id, element.status);
    }
}

function clearDom(wrapper) {
    Array.from(wrapper.children).forEach(element => {
        element.remove();
    });
}

