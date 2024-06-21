const prompt = require('prompt-sync')();

var text = prompt("Escreva seu nome")

console.log("Nome: "+ text + " -> " +text.toLowerCase()+ " -> "+text.toUpperCase() )
console.log(`Nome: ${text} -> ${text.toLowerCase()} -> ${text.toUpperCase()}`)