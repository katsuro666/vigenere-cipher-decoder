let chooseEncrypt = document.querySelector('.encrypt')
let userText = document.querySelector('.user-message')
let userKey = document.querySelector('.user-key')
let resultButton = document.querySelector('.show-result')
let resultMessage = document.querySelector('.result__message')
let copyButton = document.querySelector('.copy-result')

const directMachine = new VigenereCipheringMachine()
const reverseMachine = new VigenereCipheringMachine(false)

function showResult() {
  if (chooseEncrypt.checked) {
    let result = directMachine.encrypt(userText.value, userKey.value)
    resultMessage.textContent = result
  } else {
    let result = directMachine.decrypt(userText.value, userKey.value)
    resultMessage.textContent = result
  }
}

resultButton.addEventListener('click', showResult)

copyButton.addEventListener('click', e => {
  navigator.clipboard.writeText(resultMessage.textContent)
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = 'Text copied!';
})
copyButton.addEventListener('mouseout', e => {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
})