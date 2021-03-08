//SOLUCAO 1
let numPar = numImpar = numPostitivo = numNegativo = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(gets());
    //As condições são para verificar o mesmo numero em situações diferentes
    if (num % 2 == 0) numPar++; // valida numeros pares
    if (num % 2 == -1) numImpar++; // valida numeros impares negativos
    if (num % 2 == 1) numImpar++; // valida numeros impares positivos
    if (num > 0) numPostitivo++; // valida numeros positivos
    if (num < 0) numNegativo++; // valida numeros negativos
}
console.log(numPar + " valor(es) par(es)" + "\n" + numImpar + " valor(es) impar(es)" + "\n" + numPostitivo + " valor(es) positivo(s)" + "\n" + numNegativo + " valor(es) negativo(s)");

//SOLUCAO 2
var numPar = 0,
    numImpar = 0,
    numPostitivo = 0,
    numNegativo = 0;

for (var i = 0; i < 5; i++) {
    var num = parseInt(gets());
    if (num % 2 == 0) numPar++;
    if (num % 2 == -1) numImpar++;
    if (num % 2 == 1) numImpar++;
    if (num > 0) numPostitivo++;
    if (num < 0) numNegativo++;
}

console.log(numPar + " valor(es) par(es)");
console.log(numImpar + " valor(es) impar(es)");
console.log(numPostitivo + " valor(es) positivo(s)");
console.log(numNegativo + " valor(es) negativo(s)");
