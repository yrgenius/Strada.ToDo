import { createNewElement } from "./render2.js";

export const state = {
    list: {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
    },

    showList(event) {
        console.table(state.list); //del 
        createNewElement(event.target.parentElement, state.list);
    },

    addTask(event) {
        event.preventDefault();

        let task = event.target.previousElementSibling.value;
        if (task) {
            state.list[task] = 'To Do';
            state.showList(event);
        }
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

    deleteTask(task) {
        if (String(task) in this.list) {
            delete this.list[task];
        }
        else {
            console.log("Task is not exist");
            return 0;
        }
    }
}