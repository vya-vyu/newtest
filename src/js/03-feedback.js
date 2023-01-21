const form = document.querySelector('.feedback-form');
const textField = document.querySelector('[name="message"]');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',onTextInput)

const value = {
        email: '',
        message:'',
    };

function onFormSubmit(evt) { 
    evt.preventDefault();
     // const value = {
    //     email: evt.target.elements.email.value,
    //     message:evt.target.elements.message.value
    // }
    console.log(value);
    evt.target.reset();
    localStorage.clear();
}

function onTextInput(evt) { 

    // const value = {
    //     email: evt.target.elements.email.value,
    //     message:evt.target.elements.message.value
    // }
    
    if (evt.target.name === 'email') {
        value.email = evt.target.value;
    }
    if (evt.target.name === 'message') { value.message = evt.target.value }
    localStorage.setItem("feedback-form-state", JSON.stringify(value));
}

if (localStorage.getItem("feedback-form-state")) {
    form.elements.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    form.elements.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    console.log("fill");
} else { 
    form.elements.email.value = "";
    form.elements.message.value = "";
    console.log("empty");
}