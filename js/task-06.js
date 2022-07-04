const inputEl = document.querySelector('#validation-input');
const symbolNumber = +inputEl.dataset.length;

inputEl.addEventListener('blur',onValidationInput);


function onValidationInput(event) {
    if (event.currentTarget.value.length===symbolNumber) {
      inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
}


