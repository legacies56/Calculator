let num1Input = document.getElementById("num1-el")
let num2Input = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")

function add() {
    let num1 = parseFloat(num1Input.value)
    let num2 = parseFloat(num2Input.value)
    sumEl.textContent = num1 + num2
}

function subtract() {
    let num1 = parseFloat(num1Input.value)
    let num2 = parseFloat(num2Input.value)
    sumEl.textContent = num1 - num2
}

function divide() {
    let num1 = parseFloat(num1Input.value)
    let num2 = parseFloat(num2Input.value)
    sumEl.textContent = num1 / num2
}
function multiply() {
    let num1 = parseFloat(num1Input.value)
    let num2 = parseFloat(num2Input.value)
    sumEl.textContent = num1 * num2
}
