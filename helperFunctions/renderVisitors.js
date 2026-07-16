import Control from "../Control.js";
import { createVisitorCard } from "../customElements/VisitorCard.js";
import { getAllVisitors } from "../Requests/getAllVisitors.js";


export async function renderVisitors() {
    const visitors = Control.visitors;
    Control.app.innerHTML = '';

    if (!visitors.length) {
        const noVis = document.createElement('h2');
        noVis.innerText = "No Current Vistors.";
        noVis.style.textAlign = 'center';
        noVis.style.width = '100%';
        Control.app.append(noVis);
    }

    for (let v of visitors) {
        const card = createVisitorCard(v);
        Control.app.append(card);
    }
}