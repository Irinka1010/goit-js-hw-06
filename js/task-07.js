const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
inputEl.addEventListener('input', onChangesFontSize);

function onChangesFontSize(event) {
    spanText.style.fontSize = `${inputEl.value}px`;
}
