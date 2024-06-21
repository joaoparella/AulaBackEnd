
const prompt = require('prompt-sync')();
var text = prompt("Escreva uma frase");
var proibidas = ['menor','proibida','senao','teste','validacao']





for (var i = 0; i < proibidas.length; i = i + 1) {
    
    if (text.toLowerCase().includes(proibidas[i].toLowerCase())){
        text= text.toLowerCase().replace(proibidas[i].toLowerCase(),"Invalido");
    }
}
console.log(text);