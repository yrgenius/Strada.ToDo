import { state } from "./state.js";

export function checkActive(hiListOnPage, lowListOnPage) {
    try {
        let highCheckList = hiListOnPage.querySelectorAll('.list__input');
        let lowCheckList = lowListOnPage.querySelectorAll('.list__input');

        console.log(state.list);
        console.log(highCheckList);
        console.log(lowCheckList);

    } catch (err) {
        console.log('error in checkActive.js');
        console.log(err.name, err.message);
    }

}