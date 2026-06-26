import Control from "../Control.js";
import { createVisitorCard } from "../customElements/VisitorCard.js";
import { getAllVisitors } from "../Requests/getAllVisitors.js";


export async function renderVisitors() {
    const visitors = Control.visitors;
    Control.app.innerHTML = '';

    for (let v of visitors) {
        const card = createVisitorCard(v);
        Control.app.append(card);
    }
}