function multiplying(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    alert(`Please enter only numbers, Try again!`);
    return;
  }

  return Number(a) * Number(b);
}


document.getElementById('calculate__button').onclick = () => {
  const multiplicationContainerElement = document.getElementById('multiplication__container');
  const a = window.prompt('Want to multiply? Give me a number!');
  const b = window.prompt(`${a} x ???`);
  const multiply = multiplying(a, b);
  alert(`${a} x ${b} = ${multiply}`);
  const calculation = document.createElement('li');
  calculation.innerHTML = `${a} x ${b} = ${multiply}`;
  multiplicationContainerElement.appendChild(calculation);
};
