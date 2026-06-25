import Control from "../Control.js";
import { renderVisitors } from "../helperFunctions/renderVisitors.js";
import { getAllVisitors } from "../Requests/getAllVisitors.js";
import { signOutVisitor } from "../Requests/signOutVisitor.js";

export function createVisitorCard({id, Full_Name, Organization, Time_In, Visiting}) {
    const card = document.createElement('div');
    card.classList.add('visitorCard');
    card.style.backgroundColor = 'white';

    const nameField = document.createElement('p');
    nameField.classList.add('staffName');
    nameField.innerHTML = Full_Name;

    const orgField = document.createElement('p');
    orgField.classList.add('plannedLocations');
    orgField.innerHTML = 'Organization: ' + Organization;

    const timeInField = document.createElement('p');
    timeInField.classList.add('currentLocation');
    timeInField.innerHTML = 'Time In: ' + Time_In.split(', ')[1];

    const visitingField = document.createElement('p');
    visitingField.classList.add('currentLocation');
    visitingField.innerHTML = 'Visiting: ' + Visiting;

    const infoCol = document.createElement('div');
    infoCol.classList.add('column');

    infoCol.append(nameField, orgField, timeInField);

    const signOutBtn = document.createElement('button');
    signOutBtn.classList.add('btn');
    signOutBtn.innerText = 'Sign Out';

    signOutBtn.onclick = async () => {
        await signOutVisitor(id);
        Control.visitors = await getAllVisitors();
        renderVisitors();
    }

    card.append(infoCol, signOutBtn);

    return card;
}