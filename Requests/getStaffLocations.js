import { getData } from "./getData.js";

export async function getStaffLocations() {
    const data = await getData('./API/getStaffLocations.php');

    const obj = {};

    for (let x of data) {
        obj[x['Full_Name']] = x['Current_Location'];
    }

    return obj;
}