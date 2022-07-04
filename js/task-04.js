let counterValue = 0;
const decrementBt = document.querySelector('button[data-action="decrement"]');
const incremenBt = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');



function onDecrementBtClick() {
    counterValue -= 1;
      return valueEl.textContent = counterValue;
}

function onIncremenBtClick() {
    counterValue += 1;
   return valueEl.textContent = counterValue;
}

decrementBt.addEventListener('click',onDecrementBtClick);
incremenBt.addEventListener('click', onIncremenBtClick);