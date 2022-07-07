function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input[type="number"]')
const btCreate = document.querySelector('[data-create]');
const btDestroy = document.querySelector('[data-destroy]');
const fragment = document.querySelector('#boxes');

inputEl.addEventListener('input',onInput)
btCreate.addEventListener('click',onCreateBoxes);
btDestroy.addEventListener('click',onDestroyBoxes);

function onInput(event) {
 let numberArray = [];
  const meaning = event.currentTarget.value;
  numberArray.push(meaning);
  console.log(numberArray);
}
function onCreateBoxes() {
  let numberArray = [];
  for (let i = 1; i <= inputEl.value; i+=1){
    numberArray.push(i);
  };
  console.log(numberArray);
  const boxes = numberArray.map((number) => {
    const divEL = document.createElement('div');
    const widthHeightSize = 30 + number * 10 + 'px';
    divEL.style.width = widthHeightSize;
    divEL.style.height = widthHeightSize;
    divEL.style.backgroundColor = getRandomHexColor();
    return divEL;
  });

fragment.append(...boxes);
}

function onDestroyBoxes() {
    fragment.innerHTML = '';
    inputEl.value = '';
 }






