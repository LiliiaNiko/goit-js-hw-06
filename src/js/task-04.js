const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const btnList = document.querySelector('#counter');
console.log(btnList);
const decrementBtn = btnList.firstElementChild;
const incrementBtn = btnList.lastElementChild;
console.log(decrementBtn);
console.log(incrementBtn);
const valueEl = document.querySelector('#value')
//console.log(valueEl);

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});
console.log(counterValue);

