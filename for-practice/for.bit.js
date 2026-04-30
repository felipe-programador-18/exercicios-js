

// putting my hands on code 

let names = ['felipe',' martins', 'programmer','more ']



for(let i=0; i < names.length; i ++){
   // console.log(names[i])
}

let NumbersAge = [12,23,45,23,4545,23,434].map((other) => other * 2)
 
//console.log(NumbersAge)

let SumByAyy = [1,3,7,9,11]
for(var i=0; i < SumByAyy.length; i++){
    SumByAyy[i] = SumByAyy[i] * 3

  //  console.log(SumByAyy)
}



// preciso praticar muito for !!
// estou lembrando muito pouco!!
// vamos de for in

var nomes = [" martins", " felipe", " analista trt 4"]

for(var pega in nomes){
   // console.log("testando o meu for in", pega +  nomes[pega])
}


var notas= { "portugues":10, "direito adminstrativo":9, "tecnologia":24,
    "notaTotal":[10,9,24]
}

for (let avaliacao in notas){
  //  console.log(avaliacao + " " + notas[avaliacao])
}


let meuObjeto= { "nome": "felipe", "sobrenome": "martins", "profissao": "programador" }
// for in é bom para trabalhar com objetos, para acessas as chaves do objeto
for (let dados in meuObjeto){
    //console.log(dados + " "+ meuObjeto[dados])
}


let testando= [1,2,3,4,5,6,7,8,9,10]
// for of é bom para trabalhar  com array, acessar os valores do array
for (let pega of testando){
     //console.log(pega + " pegando o valor do array "  + testando[pega])
}

let x =[1,2,3,4,5,6,7,8,9,10]

for(i=0; i<x.length; i++){
    for(j=i; j<x.length; j ++){
    //    console.log( i + "  --- " +j  )
    }
}



var r = [2, 5, 6, 18, 20, 10, 23, 12, 19, 10];
var s = [1, 5, 7, 13, 18, 21, 10, 25, 32, 17, 3];
var z = [0];
var i;

// Copia os elementos de r para x
for (i = 0; i <= 9; i++) {
    z[i] = r[i];
}

// Copia os elementos de s para x, a partir da posição 10
for (i = 0; i <= 9; i++) { // corrigido: <= 9 ao invés de <= 10
    z[i + 10] = s[i];
}

//console.log(z[15] + "<br>"); // exibe: 13
//console.log(i);               // exibe: 11




var a1 = [2, 5, 6, 18, 20, 10, 23, 12, 19, 10];
var a2 = [1, 5, 7, 13, 18, 21, 10, 25, 32, 17, 3];
var a4=[50,60,70,80,90]
var a3 = [0];
var Recebei;

for (Recebei=0; Recebei<=9; Recebei++){
    a3[Recebei]= a1[Recebei]
    //console.log('sera que copiou o a1',a3[Recebei])
}

for(Recebei=0; Recebei<=9; Recebei++){
   a3[Recebei + 10]= a2[Recebei]
   // fiz um teste para começar depois do 10
  // console.log('começendo a contagem depois do', a2[Recebei])
}

for (Recebei=0; Recebei<=9; Recebei++){
    a3[Recebei+ 20]= a4[Recebei]
}

//console.log(a3[5] +" recebendo o numero do meu array 1")
//console.log(a3[15] + " recebendo o numero do meu array a2")
//console.log(a3[22] + " recebendo o numero do meu array a4")