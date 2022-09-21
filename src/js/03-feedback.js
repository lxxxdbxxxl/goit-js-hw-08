import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}
const STORAGE_KEY = "feedback-form-state";
let formData = {};


refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextForm();


function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(`E-mail: ${formData.email}`)
    console.log(`Message: ${formData.message}`)
};

function populateTextForm() {
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    const outputText = JSON.parse(saveMessage);
    if (saveMessage) {
        refs.email.value = outputText.email;
        refs.textarea.value = outputText.message;
    }
    
    formData = {
        email: outputText.email,
        message: outputText.message
    }
};





