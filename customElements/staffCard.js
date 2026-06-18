import Control from "../Control.js";
import { renderBoard } from "../helperFunctions/renderBoard.js";
import { getStaffLocations } from "../Requests/getStaffLocations.js";
import { setLocation } from "../Requests/setLocation.js";

export function createStaffCard(staffName, plannedLocations, currentLocation) {
    const card = document.createElement('div');
    card.classList.add('staffCard');

    const nameField = document.createElement('p');
    nameField.classList.add('staffName');
    nameField.innerHTML = staffName;

    const plannedField = document.createElement('p');
    plannedField.classList.add('plannedLocations');
    plannedField.innerHTML = '<ion-icon name="calendar-outline"></ion-icon> ' + plannedLocations;

    const currentField = document.createElement('p');
    currentField.classList.add('currentLocation');
    currentField.innerHTML = '<ion-icon name="location-outline"></ion-icon> ' + currentLocation;

    card.onclick = async () => {
        await setLocation(staffName, currentLocation == 'TCOE Main Office' ? 'Out' : 'TCOE Main Office');
        Control.staffLocations = await getStaffLocations();
        renderBoard();
    }

    currentField.onclick = (e) => {
        e.stopPropagation();
        Control.aside.classList.add('active');
        Control.selectedStaff = staffName;
    }

    const row = document.createElement('div');
    row.classList.add('row');

    row.append(nameField, currentField);

    card.append(row, plannedField);

    return card;
}