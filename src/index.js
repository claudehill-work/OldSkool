console.log('hello from javascript')

// console.log(add(12, 3))
const addButton = document.getElementById('add')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const answer = document.getElementById('answer')


addButton.addEventListener('click', () => {
   const result = (num1.valueAsNumber + num2.valueAsNumber)

   answer.innerText = "The answer is: " + result;
    console.log(result)
})