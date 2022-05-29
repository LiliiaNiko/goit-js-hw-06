const inputRef = document.querySelector('#font-size-control');
const fontsize = inputRef.addEventListener('input', onInputChange);
const textEl = document.querySelector('#text');

function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value + 'px'}`;
        console.log(textEl.style.fontSize);
    
};
//console.log(textEl);
