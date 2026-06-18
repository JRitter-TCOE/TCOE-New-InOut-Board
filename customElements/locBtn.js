import Control from "../Control.js";
import { renderBoard } from "../helperFunctions/renderBoard.js";
import { getStaffLocations } from "../Requests/getStaffLocations.js";
import { setLocation } from "../Requests/setLocation.js";

export function createLocButton(locName, locColor) {
    const btn = document.createElement('button');
    btn.classList.add('loc');
    btn.innerText = locName;
    btn.style.backgroundColor = locColor;
    btn.style.color = `contrast-color(${locColor})`;
    
    btn.onclick = async () => {
        Control.aside.classList.remove('active');
        const result = await setLocation(Control.selectedStaff, locName);
        Control.staffLocations = await getStaffLocations();
        renderBoard();
    };
    
    return btn;
}