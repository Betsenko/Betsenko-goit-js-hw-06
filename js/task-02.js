const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
const ingredientsEl = document.createElement("ul");

const getIngredientsEl = [...ingredients].map((elem) => {
  const ingredient = document.createElement("li");
  console.log(ingredient);
  ingredient.textContent = elem;
  ingredientsEl.appendChild(ingredient);
  return ingredientsEl;
});

console.log(ingredientsEl);
ingredientsRef.replaceWith(ingredientsEl);
