const categoriesListEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesListEl.length);

const titleEl = document.querySelectorAll('h2');

categoriesListEl.forEach(titleEl => {
    console.log(`Category: ${titleEl.firstElementChild.textContent}`);
    const value = titleEl.lastElementChild;
    console.log(`Elements: ${value.children.length}`);

    //console.log(value);
});
