// Criando matriz 3x3
const mat = [];

// Inicializando matriz
for (let i = 1; i <= 3; i++) {
  mat[i] = [];
     
     for(let j= i; j<=3;j ++){
      // seria assim: 1+ (2x index)= 2x1=2+3 //
       mat[i][j]= i +2 *j
     }
}

//console.log(mat);


const arrayyyy=[]

for(let i=1; i<5; i++){
   arrayyyy[i]=[]
   
     for(let f=i; f<5; f++){
        arrayyyy[i][f]= i + 2 + f
     }


}
//console.log(arrayyyy)




let N= 834230948932482934023849238409n;
//console.log(N)


let Fe= ['felipe']
const Testing = Fe.map((item) => item + "martins machado")
//console.log(Testing)


//console.log(new Date())



var numeros = [1, 2, 3];
numeros.push(4);

//console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

//console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]



const TestNewSometing = [11,12,13,14,15]
TestNewSometing.push(16,17,18)
//console.log(TestNewSometing)




const Soma = (a, b) => {
    return a + b;
}

try {
    const resultado = Soma(3, 4);
    let mensagem;

    mensagem = (resultado < 10 && resultado < 5) ? 
        "essa soma é menor que 10 e menor que 5" :
        (resultado > 10 ? 
            "essa conta é maior que 10" :
            "encerro a conta aqui");

  //  console.log("Mensagem:", mensagem);

} catch (error) {
    //console.error("Ocorreu um erro:", error);
}

//console.log("Resultado:", Soma(3, 4));


const Myarray = [1,2,3,4]
Myarray.splice(0,0,'felipe')
//console.log(Myarray.filter(item => !!item))


let v = [];
let contador;
let aux;

for (contador = 1; contador <= 5; contador++) {
  //  aux = console.log(`Digite o valor ${contador}:`);
    v[contador] = aux + contador * 2;
}

//console.log(v[3]);



  var vSearch = [1, 20, 50, 67, 89, 100];
    var n = v.length;
    var x = 89;
    var j = 0;
    while (v[j] != x)
        ++j;
  //  console.log(j);