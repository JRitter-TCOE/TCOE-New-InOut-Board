import Control from "./Control.js";
import { createVisitorModal } from "./customElements/visitorModal.js";
import { getStaffNames } from "./helperFunctions/getStaffNames.js";
import { populateAside } from "./helperFunctions/populateAside.js";
import { populateHeader } from "./helperFunctions/populateHeader.js";
import { renderBoard } from "./helperFunctions/renderBoard.js";
import { fetchSheetData } from "./Requests/fetchSheetData.js";
import { getAllVisitors } from "./Requests/getAllVisitors.js";
import { getStaffLocations } from "./Requests/getStaffLocations.js";
import { setStaff } from "./Requests/setStaff.js";


async function initApp() {
    Control.staffSchedules = await fetchSheetData();
    await setStaff(getStaffNames()); //Resets staff current location in DB on reload for testing
    Control.staffLocations = await getStaffLocations();
    Control.visitors = await getAllVisitors();
    populateHeader();
    populateAside();
    renderBoard();
    createVisitorModal();
}


initApp();