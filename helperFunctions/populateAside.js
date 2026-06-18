import Control from "../Control.js";
import { createAsideCloseBtn } from "../customElements/asideCloseBtn.js";
import { createLocationList } from "../customElements/locationList.js";

export function populateAside() {
    const closeBtn = createAsideCloseBtn();

    Control.aside.append(closeBtn);
    createLocationList();
}