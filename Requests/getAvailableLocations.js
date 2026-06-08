import { getData } from "./getData.js";

export async function getAvailableLocations() {
    const response = await getData('./API/getAvailableLocations.php');
    console.log(response);
}