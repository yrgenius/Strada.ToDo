import { state } from "./state.js";

const formHigh = document.querySelector('.list__high');
const formLow = document.querySelector('.list__low');
const buttonHigh = document.querySelector('.button__high');
const buttonLow = document.querySelector('.button__low');

formHigh.addEventListener('submit', state.addTask);
formLow.addEventListener('submit', state.addTask);
buttonHigh.addEventListener('click', state.addTask);
buttonLow.addEventListener('click', state.addTask);


