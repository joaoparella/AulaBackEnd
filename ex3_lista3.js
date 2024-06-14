const prompt = require('prompt-sync')();
var vetor = [];


do{
    var n1 = Number(prompt("Digite o numero (0 para sair)"));
    vetor.push(n1);    
}while(n1 != 0)


var total = 0;
for (var i = 0; i < vetor.length; i = i + 1) {
    total = total + vetor[i];
}
console.log("A soma do vetor é "+total)
console.log(vetor);