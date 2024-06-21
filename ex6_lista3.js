var peso = [];
var altura = [];
const prompt = require('prompt-sync')();
for (var i = 0; i < 5; i = i + 1) {
    
    var n1 = prompt("Digite o peso ");
    peso[i] = Number(n1);
    var n1 = prompt("Digite a altura ");
    altura[i] = Number(n1);
}

var totalPeso = 0;
var totalAltura = 0;
var maiorAltura = 0;
var indiceMaior = -1;
for (var i = 0; i < 5; i = i + 1) {
    totalPeso = totalPeso + peso[i];
    totalAltura = totalAltura + altura[i];
    if (altura[i] > maiorAltura){
        indiceMaior = i;
        maiorAltura = altura[i];
    }
}

var mediaPeso = totalPeso/5;
var mediaAltura = totalAltura/5;

console.log("A altura media é "+mediaAltura)
console.log("O peso medio é "+mediaPeso)
console.log("O aluno mais alto é "+indiceMaior + " com "+maiorAltura)
