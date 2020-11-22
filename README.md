## Treinamento Digital Innovation One - Exercicio - Analise de Numeros

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Fundamentos Aritméticos em JavaScript.
(https://digitalinnovation.one)

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
```

