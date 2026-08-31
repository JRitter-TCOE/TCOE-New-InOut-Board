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
            if (currentLoc && locations[currentLoc]) {
                console.log(currentLoc)
                staffCard.style.backgroundColor = locations[currentLoc];
                
                const hexcolor = locations[currentLoc].slice(1);

                const r = parseInt(hexcolor.substr(0, 2), 16);
                const g = parseInt(hexcolor.substr(2, 2), 16);
                const b = parseInt(hexcolor.substr(4, 2), 16);
                
                const yiq = (r * 299 + g * 587 + b * 114) / 1000;
                const conColor =  yiq >= 128 ? '#000000' : '#ffffff';
                staffCard.style.color = `${conColor}`;
            }
            else {
                staffCard.style.backgroundColor = 'black';
                staffCard.style.color = `white`;
            }
            app.append(staffCard);
        }
    }

}