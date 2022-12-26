'use strict'
import throttle from 'lodash.throttle';
const contactFormEl = document.querySelector('.feedback-form')

const CONTACT_FORM_LS_KEY = "feedback-form-state";
let form = {};
const fillContactFormFields = JSON.parse(localStorage.getItem(CONTACT_FORM_LS_KEY));
if (fillContactFormFields)
// if (!fillContactFormFields) {
// 	return
// }

// else {
{
	form = fillContactFormFields;
	contactFormEl.email.value = fillContactFormFields.email || "";
	contactFormEl.message.value = fillContactFormFields.message || "";
}
	

	


const handleContactFormChange = ({ target }) => {
	const { name, value } = target;

	localStorage.setItem(CONTACT_FORM_LS_KEY, JSON.stringify(form));
   
	form[name] = value;
 console.log(form);
	
}

const handleContactFormSubmit = event => {
	event.preventDefault();
	localStorage.removeItem(CONTACT_FORM_LS_KEY);
	event.target.reset();
};


contactFormEl.addEventListener('input', throttle(handleContactFormChange,500))
contactFormEl.addEventListener('submit', handleContactFormSubmit)

