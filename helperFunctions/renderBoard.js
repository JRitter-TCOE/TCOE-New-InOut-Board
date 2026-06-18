import Control from "../Control.js";
import { createStaffCard } from "../customElements/staffCard.js";
import { getAvailableLocations } from "../Requests/getAvailableLocations.js";

export async function renderBoard() {
    const locations = await getAvailableLocations();
    Control.app.innerHTML = '';
    let i = 0;
    for (let x of Control.staffSchedules) {
        if (x[0].toLowerCase().includes(Control.searchTerm.toLowerCase())) {
            const currentLoc = Control.staffLocations[x[0]];
            const staffCard = createStaffCard(x[0], x[1], currentLoc);
            staffCard.style.backgroundColor = locations[currentLoc];
            staffCard.style.color = `contrast-color(${locations[currentLoc]})`;
            app.append(staffCard);
        }
    }

}