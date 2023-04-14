let counterValue = 0;
const value = document.getElementById("value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

function incrementCount() {
  counterValue += 1;
  value.textContent = counterValue;
}
function decrementCount() {
  counterValue -= 1;
  value.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrementCount);
incrementBtnEl.addEventListener("click", incrementCount);
