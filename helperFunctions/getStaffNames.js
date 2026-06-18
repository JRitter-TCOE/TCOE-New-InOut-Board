import Control from "../Control.js";

export function getStaffNames() {
    const names = [];
    
    for (let x of Control.staffSchedules) {
        names.push(x[0]);
    }

    return names;
}