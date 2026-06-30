import { postData } from "./postData.js";

export async function testUpdateStaff() {
    const data = await postData('./API/updateStaff.php');
}