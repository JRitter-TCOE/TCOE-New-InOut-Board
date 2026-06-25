import { getData } from "./getData.js";

export async function getAllVisitors() {
    const data = await getData('./API/getAllVisitors.php');

    return data;
}