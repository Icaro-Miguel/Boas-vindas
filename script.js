let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let div = document.querySelector("div")
let button = document.querySelector("#bt")




function Boasvindas(){
 let mensagem = document.querySelector("h1")
div.appendChild(mensagem)

mensagem.innerHTML ="seja Bem vindo(a), " +nome.value+ 
"! reparei que você tem " +idade.value+ " anos de idade. Que legal!"

}