const number1 = Math.ceil(Math.random()*10); //create random number between 1 and 10
const number2 = Math.ceil(Math.random()*10)

const questionElement = document.getElementById("question");
questionElement.textContent = `What is ${number1} multiply by ${number2} ?`;