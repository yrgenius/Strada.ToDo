import { state } from "./state.js";
import { changeState } from "./activeObserver.js";

export function createNewElement(parentElement, text, id, status) {
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
    if (status === 'active') {
        item.classList.add('activeEl');
        itemInput.setAttribute('checked', 'true');
    }

    itemInput.addEventListener('click', changeState);
    itemButton.addEventListener('click', state.deleteTask);

    item.append(itemInput, itemText, itemButton);
    parentElement.append(item);
}

export function Element(parentElement, text, id, status) {
    this.item = document.createElement('div');
    this.itemInput = document.createElement('input');
    this.itemText = document.createElement('p');
    this.itemButton = document.createElement('button');

    this.item.classList.add('item');
    this.item.id = id;
    this.itemInput.classList.add('list__input');
    this.itemInput.setAttribute('type', 'radio');
    this.itemText.classList.add('text');
    this.itemText.textContent = text;
    this.itemButton.classList.add('button');
    if (status === 'active') {
        this.item.classList.add('activeEl');
        this.itemInput.setAttribute('checked', 'true');
    }

    this.itemInput.addEventListener('click', changeState);
    this.itemButton.addEventListener('click', state.deleteTask);

    this.item.append(this.itemInput, this.itemText, this.itemButton);
    parentElement.append(this.item);
}