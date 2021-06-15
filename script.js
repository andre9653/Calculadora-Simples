const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '00', ',', '0'];
const operadores = ['/', '*', '-', '+']
const enter = ['=']
const actions = ['⇤']
const reset = ['↺']
const containerNumbers = document.querySelector('#numbers');
const containerActions = document.querySelector('#actions')
const containerOperadores = document.querySelector('#operadores')
function addButtons(array, elemento, classe) {
  for (let index = 0; index < array.length; index += 1) {
    const creatElement = document.createElement('button');
    creatElement.classList = `${classe} buttons`
    creatElement.innerText = array[index]
    elemento.appendChild(creatElement)
  }
}
addButtons(numbers, containerNumbers, 'numbers')
addButtons(operadores, containerOperadores, 'operadores')

const input = document.querySelector('#input');
const buttons = document.querySelector('#buttons');
function addEvent() {
  buttons.addEventListener('click', (event) => {
    let eventOrigin = event.target
    if (eventOrigin.classList.contains('numbers') === true || eventOrigin.classList.contains('operadores')) {
      if (input.value === '') {
        input.value = eventOrigin.innerText
      } else {
        input.value += eventOrigin.innerText
      }
    }
  })
}
addEvent()
addButtons(actions, containerActions, 'backspace')
addButtons(reset, containerActions, 'reset')
addButtons(enter, containerActions, 'enter')
document.querySelector('.backspace').addEventListener('click', () => {
  let value = input.value
  let length = value.length
  let newString = value.substr(0, length -1)
  input.value = newString
  value = newString
})

const divResult = document.querySelector('#result')
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  input.value = ''
  divResult.innerHTML = ''
})

const enterBtn = document.querySelector('.enter');
enterBtn.addEventListener('click', () => {
  const control = isNaN(input.value.substr(0, 1)) === false && isNaN(input.value.substr(-1)) === false && input.value !== '';
  console.log(control);
  if (control === true) {
    const result = eval(input.value);
    const h3 = document.createElement('h3');
    h3.classList = 'resultado';
    h3.innerText = `${input.value} = ${result}`;
    divResult.innerHTML = ''
    divResult.appendChild(h3);
    input.value = result
  } else if(input.value === '') {
    const h3 = document.createElement('h3');
    h3.classList = 'warning';
    h3.innerText = 'Digite alguma operação';
    divResult.innerHTML = ''
    divResult.appendChild(h3);
  } else {
    const h3 = document.createElement('h3');
    h3.classList = 'warning';
    h3.innerText = 'Operação invalida';
    divResult.innerHTML = ''
    divResult.appendChild(h3);
  }
})
