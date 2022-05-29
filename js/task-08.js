const form = document.querySelector('.login-form');
const inputRef = document.querySelector('input');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');
console.log(inputRef);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailEl.value === '' || passwordEl.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
        const { elements: { email, password } } = event.currentTarget;
        console.log(email.value, password.value);
        form.reset();
    }
});
