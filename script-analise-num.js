//SOLUÇÃO 1
var numPar = 0,
    numImpar = 0,
    numPostitivo = 0,
    numNegativo = 0;
//Leitura de cinco numeros
for (var i = 0; i < 5; i++) {
    var num = parseInt(gets());
    if (num % 2 == 0) numPar++; // valida numeros pares
    if (num % 2 == -1) numImpar++; // valida numeros impares negativos
    if (num % 2 == 1) numImpar++; // valida numeros impares positivos
    if (num > 0) numPostitivo++; // valida numeros positivos
    if (num < 0) numNegativo++; // valida numeros negativos
}
//imprime o resultado
console.log(numPar + " valor(es) par(es)");
console.log(numImpar + " valor(es) impar(es)");
console.log(numPostitivo + " valor(es) positivo(s)");
console.log(numNegativo + " valor(es) negativo(s)");


//SOLUÇÃO 2
var numPar = 0,
    numImpar = 0,
    numPostitivo = 0,
    numNegativo = 0;
//Leitura de cinco numeros
for (var i = 0; i < 5; i++) {
    var num = parseInt(gets());
    if (num % 2 == 0) numPar++; // valida numeros pares
    if (num % 2 == -1) numImpar++; // valida numeros impares negativos
    if (num % 2 == 1) numImpar++; // valida numeros impares positivos
    if (num > 0) numPostitivo++; // valida numeros positivos
    if (num < 0) numNegativo++; // valida numeros negativos
}
//imprime o resultado
console.log(numPar + " valor(es) par(es)" + "\n" + numImpar + " valor(es) impar(es)" + "\n" + numPostitivo + " valor(es) positivo(s)" + "\n" + numNegativo + " valor(es) negativo(s)");