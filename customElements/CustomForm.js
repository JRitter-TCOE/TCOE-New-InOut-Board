export default class CustomForm {
    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add('customForm');

        this.fieldContainer = document.createElement('div');
        this.fieldContainer.classList.add('formFieldContainer');

        this.fields = {};

        const btnRow = document.createElement('div');
        btnRow.classList.add('row');

        this.feedback = document.createElement('p');
        this.feedback.style.color = 'yellow';


        this.el.append(this.fieldContainer, this.feedback, btnRow);


        this.cancelBtn = document.createElement('button');
        this.cancelBtn.classList.add('btn');
        this.cancelBtn.innerText = 'Cancel';
        
        this.submitBtn = document.createElement('button');
        this.submitBtn.classList.add('btn');
        this.submitBtn.innerText = 'Submit';

        btnRow.append(this.cancelBtn, this.submitBtn);
    }

    addField(fieldId, labelText, type='text') {
        const label = document.createElement('label');
        label.innerText = labelText;
        label.setAttribute('for', fieldId);
        label.classList.add('formLabel');

        const field = document.createElement('input');
        field.type = type;
        field.id = fieldId;
        field.classList.add('formField');

        this.fields[fieldId] = field;
        this.fieldContainer.append(label, field);
    }

    getFieldValue(fieldId) {
        return this.fields[fieldId].value;
    }

    getAllFieldValues() {
        const values = {};

        for (let fieldId in this.fields) {
            values[fieldId] = this.getFieldValue(fieldId);
        }

        return values;
    }

    clearAllFields() {
        for (let fieldId in this.fields) {
            this.fields[fieldId].value = "";
        }
    }
}