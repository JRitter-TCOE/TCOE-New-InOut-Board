import Control from "../Control.js";

export function createAsideCloseBtn() {
    const closeBtn = document.createElement('button');
    closeBtn.id = 'closeBtn';
    closeBtn.innerHTML = 'X';
    closeBtn.onclick = () => {
        Control.aside.classList.remove('active');
    }

    return closeBtn;
}