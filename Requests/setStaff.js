import { postData } from "./postData.js";

export async function setStaff(staffList) {
    const result = await postData('./API/setStaff.php', {staff: staffList});
}