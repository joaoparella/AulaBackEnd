var vetor = [];
const prompt = require('prompt-sync')();

for (var i = 0; i < 5; i = i + 1) {
    var n1 = prompt("Digite o numero ");
    vetor[i] = Number(n1);
}
var repetidos = [];
for (var i = 0; i < 5; i = i + 1) {
    for (var j = i; j < 5; j = j + 1) {
        if ((vetor[i] == vetor[j]) && (j != i)){
            if (!repetidos.includes(vetor[i]) ){
                repetidos.push(vetor[i]);
            }            
        }
    }
}
console.log("Os numeros  "+repetidos+" se repetem")
console.log(vetor);