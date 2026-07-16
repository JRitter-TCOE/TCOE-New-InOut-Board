import Control from "../Control.js";
import { createAsideCloseBtn } from "../customElements/asideCloseBtn.js";
import { createLocationList } from "../customElements/locationList.js";
import { createOtherLocationSection } from "../customElements/otherLocation.js";

export async function populateAside() {
    const closeBtn = createAsideCloseBtn();

    Control.aside.append(closeBtn);
    await createLocationList();
    createOtherLocationSection();
}