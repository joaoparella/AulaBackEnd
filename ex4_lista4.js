function aleatorioEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
const prompt = require('prompt-sync')();
var qtd = Number(prompt("Quantas vezes quer jogar ?"));

for (var i =0; i < qtd; i++){
    
    var numeroAleatorio = aleatorioEntre(1, 20);
    console.log("---------------------------");
    console.log("O dado foi rodado");
    console.log("O numero que caiu foi "+ numeroAleatorio);
    console.log("---------------------------");
}

