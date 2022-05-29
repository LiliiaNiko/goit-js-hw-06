const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
const inputLength = inputEl.dataset.length;
//console.log(inputLength);

function onInputBlur() {
    if (inputEl.value.length < inputLength || inputEl.value.length > inputLength) {
        
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
   
    console.log(inputEl);
};