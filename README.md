## Exercicio - Analise de Numeros

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Fundamentos Aritméticos em JavaScript. [https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.


#### Entrada:

Você receberá 5 valores inteiros.


#### Saída:

Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
-5 | 3 valor(es) par(es)
0 | 2 valor(es) impar(es)
-3 | 1 valor(es) positivo(s)
-4 | 3 valor(es) negativo(s)
 12 |


#### Javascript

```javascript

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

```

