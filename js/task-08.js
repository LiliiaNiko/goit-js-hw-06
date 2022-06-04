const form = document.querySelector('.login-form');
const inputRef = document.querySelector('input');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');
//console.log(inputRef);


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (emailEl.value === '' || passwordEl.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
        const formElements = event.currentTarget.elements;
        const email = formElements.email.value;
        const password = formElements.password.value;

        const formData = { email, password };
    
        console.log(formData);
        form.reset();
    }
};

