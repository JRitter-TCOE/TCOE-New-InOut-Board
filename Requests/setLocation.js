import { postData } from "./postData.js";

export async function setLocation(name, location) {
    const data = await postData('./API/setLocation.php', {name, location});
    return data;
}