export function createNewElement(event) {
    event.preventDefault();

    // console.log(event.target.parentElement);
    // console.log(event.currentTarget);

    let item = document.createElement('div');
    let itemInput = document.createElement('input');
    let itemText = document.createElement('p');
    let itemButton = document.createElement('button');

    item.classList.add('item');
    itemInput.classList.add('list__input');
    itemInput.setAttribute('type', 'radio');
    itemText.classList.add('text');
    itemText.textContent = event.target.previousElementSibling.value;
    itemButton.classList.add('button');

    itemButton.addEventListener('click', console.log('delete'));

    item.append(itemInput, itemText, itemButton);
    event.target.parentElement.parentElement.append(item);
}