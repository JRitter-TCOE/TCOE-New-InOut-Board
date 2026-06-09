import { getData } from "./getData.js";

export async function getAvailableLocations() {
    const data = await getData('./API/getAvailableLocations.php');
    console.log(data);
    return data;
}