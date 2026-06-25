import { renderBoard } from "../helperFunctions/renderBoard.js";
import { renderVisitors } from "../helperFunctions/renderVisitors.js";

export function createVisitorBtn(addVisitorBtn) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Visitors';
    const modal = document.getElementById('modal');

    btn.onclick = () => {
        if (btn.innerText == 'Visitors') {
            renderVisitors();
            btn.innerText = 'Staff';
            addVisitorBtn.style.display = 'block';
        }
        else {
            renderBoard();
            btn.innerText = 'Visitors';
            modal.style.display = 'none';
            addVisitorBtn.style.display = 'none';

        }
    }

    return btn;
}