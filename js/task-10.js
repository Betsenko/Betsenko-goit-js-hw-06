function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('input', getNumber);

btnCreate.addEventListener('click', () => { 
  const amount = getNumber();
  createBoxes(amount);
});

btnDestroy.addEventListener('click', destroyBoxes);

function getNumber() {
  return Number(input.value);
};

function createBoxes(amount) {
  let markup = '';
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++){
    markup = `
    <div style="width: ${30 + i * 10}px; background-color: ${getRandomHexColor()}; height: ${30 + i * 10}px;">
    </div>
    `;
    boxes.insertAdjacentHTML('beforeend', markup);
  };  
};

function destroyBoxes() {
  boxes.innerHTML = "";
};
