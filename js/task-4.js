let counterValue = 0;
const valueRef = document.querySelector('#value');

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);