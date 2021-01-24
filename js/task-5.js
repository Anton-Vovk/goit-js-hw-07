const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', (event) => {
  nameInputRef.value
    ? (nameOutputRef.textContent = event.currentTarget.value)
    : (nameOutputRef.textContent = 'незнакомец');
});