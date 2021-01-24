const validationInputRef = document.querySelector('#validation-input');

function validationInput() {
  if (validationInputRef.value.length === 6) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  }
  else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  }
}

validationInputRef.addEventListener('blur', validationInput);
