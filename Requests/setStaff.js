import { postData } from "./postData.js";

export async function setStaff(staffList) {
    const data = await postData('./API/setStaff.php', {staff: staffList});
}