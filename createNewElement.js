import { state } from "./state.js";
import { changeState } from "./activeObserver.js";

export function createNewElement(parentElement, text, id) {

    // console.log(parentElement);
    // console.log(id);

    let item = document.createElement('div');
    let itemInput = document.createElement('input');
    let itemText = document.createElement('p');
    let itemButton = document.createElement('button');

    item.classList.add('item');
    if (status === 'active') {
        item.classList.add('activeEl');
    }
    item.id = id;
    itemInput.classList.add('list__input');
    itemInput.setAttribute('type', 'radio');
    itemText.classList.add('text');
    itemText.textContent = text;
    itemButton.classList.add('button');

    itemInput.addEventListener('click', changeState);
    itemButton.addEventListener('click', state.deleteTask);

    item.append(itemInput, itemText, itemButton);
    parentElement.append(item);
}