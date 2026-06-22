import Control from "../Control.js";
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
    }

    form.submitBtn.onclick = async () => {
        const date = new Date();
        const visitor = form.getAllFieldValues();
        visitor['Time_In'] = date.toLocaleString();
        const result = await setVisitor(visitor);
        console.log(result);
    }
}