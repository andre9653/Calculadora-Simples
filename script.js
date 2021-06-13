const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '%', ',', '0'];
const operadores = ['/', '*', '-', '+']
const actions = ['⇤', '↺']
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
addButtons(actions, containerActions, 'actions')

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
function equal() {
  const inputValue = input.value;
  let operacao = []
  let numbers = []
  let number = 0
  for(let index = 0; index < inputValue.length; index +=1) {
    if(!isNaN(inputValue[index]) === true) {
      if (number === 0) {
        number = inputValue[index]
      } else {
        number += inputValue[index]
      }
    } else if(isNaN(inputValue[index]) === true) {
      numbers.push(number)
      number = 0
      operacao.push(inputValue[index])
    }
  }
  console.log(numbers);
  console.log(operacao);
}