import { state } from "./state.js";

export function createNewElement(parentElement, text, id) {

    let item = document.createElement('div');
    let itemInput = document.createElement('input');
    let itemText = document.createElement('p');
    let itemButton = document.createElement('button');

    item.classList.add('item');
    item.id = id;
    itemInput.classList.add('list__input');
    itemInput.setAttribute('type', 'radio');
    itemText.classList.add('text');
    itemText.textContent = text;
    itemButton.classList.add('button');

    itemButton.addEventListener('click', state.deleteTask);

    item.append(itemInput, itemText, itemButton);
    parentElement.append(item);
}