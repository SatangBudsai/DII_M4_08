let searchButton = document.getElementById('searchButton')
let inputText = document.getElementById('inputText')
let output = document.getElementById('output')

function addText (){
    let text = inputText.value;
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','butoon')
    newButton.innerText =text
    output.appendChild(newButton)
}
inputText.addEventListener('blur',addText)