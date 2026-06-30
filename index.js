import Control from "./Control.js";
import { createVisitorModal } from "./customElements/visitorModal.js";
import { getStaffNames } from "./helperFunctions/getStaffNames.js";
import { populateAside } from "./helperFunctions/populateAside.js";
import { populateHeader } from "./helperFunctions/populateHeader.js";
import { renderBoard } from "./helperFunctions/renderBoard.js";
import { renderVisitors } from "./helperFunctions/renderVisitors.js";
import { fetchSheetData } from "./Requests/fetchSheetData.js";
import { getAllVisitors } from "./Requests/getAllVisitors.js";
import { getStaffLocations } from "./Requests/getStaffLocations.js";
import { setStaff } from "./Requests/setStaff.js";
import { testUpdateStaff } from "./Requests/testUpdateStaff.js";


async function initApp() {
    Control.staffSchedules = await fetchSheetData();
    //await setStaff(getStaffNames()); //Resets staff current location in DB on reload for testing
    Control.staffLocations = await getStaffLocations();
    Control.visitors = await getAllVisitors();
    populateHeader();
    populateAside();
    renderBoard();
    createVisitorModal();

    setInterval(heartbeat, 5000);
}

async function heartbeat() {
    Control.staffLocations = await getStaffLocations();
    Control.visitors = await getAllVisitors();

    const btn = document.getElementById('visitorBtn');

    if (btn.innerText == 'Visitors') {
        renderBoard();
    }
    else {
        renderVisitors();
    }
}


initApp();

