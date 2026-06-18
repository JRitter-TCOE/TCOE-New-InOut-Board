import Control from "./Control.js";
import { createLocationList } from "./customElements/locationList.js";
import { getStaffNames } from "./helperFunctions/getStaffNames.js";
import { populateAside } from "./helperFunctions/populateAside.js";
import { populateHeader } from "./helperFunctions/populateHeader.js";
import { renderBoard } from "./helperFunctions/renderBoard.js";
import { fetchSheetData } from "./Requests/fetchSheetData.js";
import { getStaffLocations } from "./Requests/getStaffLocations.js";
import { setStaff } from "./Requests/setStaff.js";


async function initApp() {
    Control.staffSchedules = await fetchSheetData();
    await setStaff(getStaffNames()); //Resets DB on reload
    Control.staffLocations = await getStaffLocations();
    populateHeader();
    populateAside();
    renderBoard();
}


initApp();