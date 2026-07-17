import Control from "../Control.js";
import { renderVisitors } from "../helperFunctions/renderVisitors.js";
import { getAllVisitors } from "../Requests/getAllVisitors.js";
import { setVisitor } from "../Requests/setVisitor.js";
import CustomForm from "./CustomForm.js";

export function createVisitorModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    const form = new CustomForm();

    form.addField('Full_Name', 'Full Name:');
    form.addField('Organization', 'Organization:');
    form.addField('Visiting', 'Visiting:');
    form.addField('Add_With', 'With:');

    modal.append(form.el);

    form.cancelBtn.onclick = () => {
        modal.style.display = 'none';
        form.clearAllFields();
    }

    form.submitBtn.onclick = async () => {
        const date = new Date();
        const visitor = form.getAllFieldValues();

        if (!visitor['Full_Name']) {
            form.feedback.innerText = 'Please enter your name...';
            form.fields['Full_Name'].style.borderColor = 'red';
            return;
        }

        visitor['Time_In'] = date.toLocaleString();
        const result = await setVisitor(visitor);
        modal.style.display = 'none';
        form.feedback.innerText = '';
        form.fields['Full_Name'].style.borderColor = 'black';
        form.clearAllFields();
        Control.visitors = await getAllVisitors();
        renderVisitors();
    }
}