import Control from "../Control.js";
import { getAvailableLocations } from "../Requests/getAvailableLocations.js";
import { createLocButton } from "./locBtn.js";

export async function createLocationList() {
    const locList = document.createElement('div');
    locList.id = 'locList';

    const locations = await getAvailableLocations();
    console.log(locations);


    for (let l in locations) {
        const btn = createLocButton(l, locations[l]);
        locList.append(btn);
    }

    Control.aside.append(locList);

}