const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '%', ',', '0'];
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
addButtons(enter, containerActions, 'enter')
addButtons(actions, containerActions, 'backspace')
addButtons(reset, containerActions, 'reset')
const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.buttons');
function addEvent() {
  let value = []
  for (let index = 0; index < buttons.length; index += 1) {
    const button = buttons[index]
    const typeButton = buttons[index].classList.contains('actions')
    if (typeButton === false) {
      button.addEventListener('click', () => {
        value += button.innerText
        input.value = value
      })
    }
  }
}
addEvent()

function result() {
  const value = input.value
  console.log(eval(value));
}

