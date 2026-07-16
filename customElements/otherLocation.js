import Control from "../Control.js";
import { renderBoard } from "../helperFunctions/renderBoard";
import { getStaffLocations } from "../Requests/getStaffLocations";
import { setLocation } from "../Requests/setLocation.js";

export function createOtherLocationSection() {
    const container = document.createElement('div');
    container.classList.add('column');
    container.id = 'otherLocContainer';

    const otherField = document.createElement('input');
    otherField.id = 'otherField';

    const otherLabel = document.createElement('label');
    otherLabel.setAttribute('for', 'otherField');
    otherLabel.innerText = 'Other Location:';

    const setOtherBtn = document.createElement('button');
    setOtherBtn.classList.add('btn');
    setOtherBtn.innerText = 'Set Location';

    setOtherBtn.onclick = async () => {
        Control.aside.classList.remove('active');
        const result = await setLocation(Control.selectedStaff, otherField.value);
        otherField.value = '';
        Control.staffLocations = await getStaffLocations();
        renderBoard();
    };

    container.append(otherLabel, otherField, setOtherBtn);

    Control.aside.append(container);
    
}