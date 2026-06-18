import { getData } from "./getData.js";

export async function getAvailableLocations() {
    const data = await getData('./API/getAvailableLocations.php');
    console.log(data);
    
    const obj = {};

    for (let x of data) {
        obj[x['Name']] = x['Color'];
    }

    return obj;
}