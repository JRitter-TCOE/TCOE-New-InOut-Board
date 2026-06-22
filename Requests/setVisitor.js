import { postData } from "./postData.js";

export async function setVisitor(visitor) {
    console.log(visitor);
    const data = await postData('./API/setVisitor.php', visitor);
}