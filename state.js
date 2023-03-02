import { createNewElement } from "./createNewElement.js";
// import { render } from "./render.js";

export const state = {
    count: 0,

    list: [
        {
            id: '0',
            text: 'create a new practice task',
            status: "To Do",
            importance: true
        },
        {
            id: '1',
            text: 'make a bed',
            status: "Done",
            importance: true,
        },
        {
            id: '2',
            text: 'write a post',
            status: "To Do",
            importance: false
        },
    ],

    showList() {
        console.table(state.list); //del 
    },

    addTask(event) {
        event.preventDefault();

        let task = event.target.previousElementSibling.value;
        if (task) {
            state.list.push({
                id: `${state.count++}`,
                text: `${task}`,
                status: 'To Do',
                importance: true,
            });
        }
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

    deleteTask() {
        console.log(this.parentElement);
        this.parentElement.remove();
        // if (String(task) in this.list) {
        //     delete this.list[task];
        // }
        // else {
        //     console.log("Task is not exist");
        //     return 0;
        // }
    }
}

function render(list) {
    let [hiListOnPage, lowListOnPage] = document.querySelectorAll('.list');
    let hiStore = list.filter(element => element.importance);
    let lowStore = list.filter(element => !element.importance);

    console.log(lowStore);

    clearDom(hiListOnPage);
    clearDom(lowListOnPage);

    for (let element of hiStore) {
        createNewElement(hiListOnPage, element.text);
    }

    for (let element of lowStore) {
        createNewElement(lowListOnPage, element.text);
    }

}

function clearDom(wrapper) {
    Array.from(wrapper.children).forEach(element => {
        element.remove();
    });
}
