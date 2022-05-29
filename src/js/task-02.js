const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');
const list = [];
ingredients.forEach(el => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = el;
  console.log(itemEl);
  
  list.push(itemEl);
});

ingredientsList.append(...list);
console.log(ingredientsList);