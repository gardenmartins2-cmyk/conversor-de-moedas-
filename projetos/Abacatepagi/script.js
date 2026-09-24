

const input = document.querySelector("#meu-input")
const paragrafo = document.querySelector(".paragrafo-js")

function digitenoInput(){
    console.log(input.value)
}

function cliquenobotao(){
    paragrafo.textContent = input.value 
   console.log( "aparecer no paragrafo")
}
