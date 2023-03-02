import { createNewElement } from "./createNewElement.js";
// import { render } from "./render.js";

export const state = {
    count: 0,

    list: [

    ],

    showList() {
        console.table(state.list); //del 
    },

    addTask(event) {
        event.preventDefault();

        let task = event.target.previousElementSibling.value;
        if (task) {
            state.list.push({
                id: `${state.count}`,
                text: `${task}`,
                status: 'To Do',
                importance: (event.target.previousElementSibling.classList[1] === 'input__high'),
            });
        }
        state.count++;
        state.showList();
        render(state.list);
    },

    changeStatus(task, status = 'In Progress') {
        if (typeof task === 'undefined') {
            console.log("task is not defined");
            return 0;
        }
        if (String(task) in this.list) {
            this.list[task] = status;
        }
    },

    deleteTask(event) {
        let id = event.target.parentElement.id;
        let deletedIndex = state.list.findIndex(obj => obj.id === id);

        console.log('id >> ' + id);
        console.log('deletedIndex ' + deletedIndex);

        state.list.splice(deletedIndex, 1);
    }
}

function render(list) {
    let [hiListOnPage, lowListOnPage] = document.querySelectorAll('.list');
    let hiStore = list.filter(element => element.importance);
    let lowStore = list.filter(element => !element.importance);

    clearDom(hiListOnPage);
    clearDom(lowListOnPage);

    for (let element of hiStore) {
        createNewElement(hiListOnPage, element.text, element.id);
    }

    for (let element of lowStore) {
        createNewElement(lowListOnPage, element.text, element.id);
    }

}

function clearDom(wrapper) {
    Array.from(wrapper.children).forEach(element => {
        element.remove();
    });
}
