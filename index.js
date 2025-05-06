
let num1-el = document.getElementById("num1-el")
let num2-el = document.getElementById("num2-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add() {
  let num1 = praseFloat(num1-el.vaule)
  let num2 = praseFloat(num2-el.vaule)
  sumEl.textContent = num1 + num2
}
function subtract() {
   let num1 = praseFloat(num1-el.vaule)
  let num2 = praseFloat(num2-el.vaule)
  sumEl.textContent = num1 - num2
}
function divide() {
   let num1 = praseFloat(num1-el.vaule)
  let num2 = praseFloat(num2-el.vaule)
  sumEl.textContent = num1 / num2
}
function multiply() {
   let num1 = praseFloat(num1-el.vaule)
  let num2 = praseFloat(num2-el.vaule)
  sumEl.textContent = num1 * num2
}


