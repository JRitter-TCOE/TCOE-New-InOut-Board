import { renderBoard } from "../helperFunctions/renderBoard.js";
import { renderVisitors } from "../helperFunctions/renderVisitors.js";

export function createVisitorBtn() {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Visitors';
    const modal = document.getElementById('modal');

    btn.onclick = () => {
        if (btn.innerText == 'Visitors') {
            renderVisitors();
            btn.innerText = 'Staff';
            modal.style.display = 'flex';
        }
        else {
            renderBoard();
            btn.innerText = 'Visitors';
            modal.style.display = 'none';
        }
    }

    return btn;
}