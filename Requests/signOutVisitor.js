import { postData } from "./postData.js";

export async function signOutVisitor(id) {
    const date = new Date();
    const Time_Out = date.toLocaleString();
    const data = await postData('./API/signOutVisitor.php', {id, Time_Out});
    return data;
}