import { renderBoard } from "../helperFunctions/renderBoard.js";
import { renderVisitors } from "../helperFunctions/renderVisitors.js";

export function createVisitorBtn(addVisitorBtn, searchContainer) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.id = 'visitorBtn';
    btn.innerText = 'Visitors';
    const modal = document.getElementById('modal');

    btn.onclick = () => {
        if (btn.innerText == 'Visitors') {
            renderVisitors();
            btn.innerText = 'Staff';
            addVisitorBtn.style.display = 'block';
            searchContainer.style.display = 'none';

        }
        else {
            renderBoard();
            btn.innerText = 'Visitors';
            modal.style.display = 'none';
            addVisitorBtn.style.display = 'none';
            searchContainer.style.display = 'flex';
        }
    }

    return btn;
}