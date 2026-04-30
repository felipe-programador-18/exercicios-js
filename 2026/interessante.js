let manage = []
for (let i=2; i<=4;i++){
    
    manage[i]=[]

    for (let j =i; j<=4;j ++){
        manage[i][j]= i +2 *j
    }
}

//console.log(manage)


var v = [1, 20, 50, 67, 89, 100];
var n = v.length;
var x = 89;
var j = 0;

// basicamente esse while percorre o array v
// e incrementa j enquanto o valor em v[j] for menor que x 89
while (j < n && v[j] < x) {
  ++j;
}

console.log(j); // Resultado: 4


var v = [1, 20, 50, 67, 89, 100];
var n = v.length;
var x = 89;
var j = 0;

while (j < n && v[j] !== x) {
  ++j;
}

//console.log(j); // Resultado:4



let a = [1,2,3,4,5,6,7,8]
// o length conta a quantidade de ELEMENTOS DENTRO DO ARRAY
var n = a.length;
var x= 7;
var j=0;

// basicamente ele vai rodar até o momento  que o j seja menor que o 7
while(j<n  && a[j] !==x){
    ++j
}

//console.log(j)



let name=['felipee', 'maria', 'joao', 'pedro']
const manageee= name.length;
//console.log(manageee)


var frutas =['banana','uva','morango','melancia','alface']
var PegaFruta= frutas.length;
var x = 'melancia';
var j = 0;


while(j< PegaFruta && frutas[j] !== x){
     ++j
}

//console.log(j)



var numerosss= [10,20,30,40,50,60,70,80]
var n = numerosss.length;
var x = 70;
var j = 0;

while(j<n && numerosss[j] !== x){
    ++j
}

//console.log(j)

// numeros pares
var numeros= [1,2,3,4,5,6,7,8,9,10]
var pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // Saída: [2, 4, 6, 8, 10]

var numerosIMPARES=[11,12,13,14,15,16,17,18,19,20]
var pegaImpares = numerosIMPARES.filter(numero => numero %2 ===1);
console.log(pegaImpares)






var numeros = [4, 8, 15, 16, 23, 42];
var soma = 0;
var i;


//let outrojeito = numeros.reduce((one, two) => one + two)
//console.log(outrojeito)

// esse sinal += é apenas para somar
for (i=0; i<numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma);


let FelipeTeste =[20,25,30,35,40,45,50];
let somas=0;


for(let i=0; i<FelipeTeste.length; i++){
    somas += FelipeTeste[i]
}

console.log(somas)



var notas = [6, 8, 10, 7, 9];
var n = notas.length;
var maior = notas[0];
var i = 1;

while (i < n ) {
  if (notas[i]> maior ) {
    maior = notas[i];
  }
  i++;
}

console.log(maior);



let Num =[1,2,3,4,5,6,7,8,9]
for(i=0; i<Num.length; i++){
   
  for ( let j=i; j<Num.length; j++){
       console.log(Num[i], Num[j])
  }

}
