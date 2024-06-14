const prompt = require('prompt-sync')();

var vetor = [];
var vetorLocais = [];

for (var i = 0; i < 20; i = i + 1) {
    
    var n1 =  prompt("Digite o numero ");
    vetor[i] = parseInt(n1);
}

for (var i = 0; i < 20; i = i + 1) {
    
    if (vetor[i] == 10) {
        vetorLocais.push(i);
    }
}
console.log("O numero 10 está presente nos indices: "+vetorLocais);
console.log(vetor);