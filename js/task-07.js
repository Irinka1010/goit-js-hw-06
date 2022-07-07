const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
inputEl.addEventListener('input', onChangesFontSize);
spanText.style.fontSize= inputEl.value + 'px';



function onChangesFontSize() {
   
    spanText.style.fontSize = `${inputEl.value}px`;
} 
