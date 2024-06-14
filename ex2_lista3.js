var vetor = [];
const prompt = require('prompt-sync')();

for (var i = 0; i < 10; i = i + 1) {
    
    var n1 = prompt("Digite o numero ");
    vetor[i] = Number(n1);
}
var aux = 0;
var troca = 0;

for(var i=0; i<vetor.length ; i = i + 1){
    aux=i;
    for(var nAtual=i+1; nAtual< 10; nAtual = nAtual + 1){
        if(vetor[nAtual] < vetor[aux])
            aux=nAtual;
    }
    troca = vetor[aux];
    vetor[aux]=vetor[i];
    vetor[i]=troca;
    
}
console.log(vetor)