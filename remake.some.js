//practice about javascript!!

//Crie uma função que mostre(console.log) a frase “Hello world” com o
//número de vezes que ela foi mostrada, exemplo “Hello world 1”, “Hello world
//2”, “Hello world 3”, “Hello world 4” ....
//Não poderá ser usado ‘for’ ou ‘while’, somente recursão de função, que é
//quando a função executa a si mesma. (Lembrar de colocar um stop com ‘if’
//ou ela entrará em loop infinito
function Call (called){
    console.log('hello word',called)
    
    let get = called-1

    if(get > 0){
        Call(get)
    }
}

Call(50)




//2º - Crie uma função que recebe um argumento(nomeDeFruta), esse
//argumento deverá executar uma função que irá mostrar(console.log) a cor
//dessa fruta. Exemplo


const fruta = (cor) =>{
    return cor
    }
const SalaFruta = {
    banana:'amarela',
    morango:'vermelho',
    uva:'roxo',
    abacate:'verde claro',
    maça:'vermelho claro',
    
}

console.log(fruta(SalaFruta.maça))





//3º -
//Dada a seguinte função e array:
//function playIt(arg) {
//console.log(arg)
//}

//const fila = [‘queijo’,‘maionese’,‘ovo’,‘batata’,‘vinho’,‘queijo’, ‘ovo’]
 //Crie uma função que faça o mesmo que a função nativa ‘forEach’ faz.
//Ela irá receber como argumento o array e a função acima e deverá aplicar
//cada elemento do array recebido na função. (Lembrando que ‘forEach’
//retorna ‘undefined’(ou seja, não precisa retornar nada no final do loop).
//Dica(Mais argumentos podem ser criados na função ‘minhaFuncao’). const
//minhaFuncao = ( array , funcao )={ }
//minhaFuncao(fila, playIt) irá mostrar(console.log):
// queijo
// maionese
// ovo
// batata
// vinho
// queijo
// ovo

const Hamburg = ['queijo', 'maionse', 'ovo', 'batata', 'vinho','queijo']

const Baixo = Hamburg.map(function(item){
    return     `\n ${item}`  
})

console.log('\n'+Baixo)


//Escreva uma função que deverá mostrar(console.log) a frase ‘oi amigo’,
//porém, essa função será executada da seguinte forma minhaFuncao( )( )
//(com duas ‘ ( ) ’ em sequencia).
//minhaFuncao( )( ) irá mostrar(console.log):

const frase = (amigo,oi) => amigo +oi

const teste = ['oi '+ 'amigo']
console.log(teste)




//6º - Dado o seguinte objeto:
//const caixa = {
//parcela: (numero)=>{ return numero *3 } ,
//preco: (numero)=>{ return numero / 2 } ,
//bandeira: (nome)=>{ return nome[0] } ,
//}
//Crie uma função que irá receber este objeto acima como argumento, dois
//numeros e uma string, ela deverá mostrar(console.log) os resultados das
//funções executadas dentro do objeto com cada argumento. const
//minhaFuncao = (objeto, parcela, preco, bandeira) => { }

const pagamento = {
    parcela:12,
    preco:2323,
   bandeira:'visa card'
}

const Showdate = (pagamento) =>{
    return  pagamento
}

console.log(Showdate(pagamento))

//7º - Dado o seguinte array:
//const fila = [‘queijo’,‘maionese’,‘ovo’,‘batata’,‘vinho’,‘queijo’, ‘ovo’]
//Crie uma função que receba um array como argumento e remova todos os
//elementos que estejam duplicados, se tiver dois numeros 9, ele irá retirar os
//dois números do array. A função deverá retornar um novo array sem nenhum
//numero duplicado. Dica(Não é possível modificar um array enquanto ele
//estiver rodando um loop forEach, map, etc).
//const minhaFuncao = ( array )=>{
//return [ ]
//}
//minhaFuncao( fila ) deverá retornar [ ‘maionese’,‘batata,‘vinho’ ]

const Vetor = ['batata', 'cebola','ovo','vinho','ovo','cebola','tomate','cerveja']
const Due = (mother ,son) =>{
    if(!mother[son]){
        mother[son] = {
            father : son,
            vo : 0
        }
    }
    mother[son].vo  = mother [son].vo + 1
    return mother
}


const Family = Vetor.reduce(Due, {})
const Mall = Object.keys(Family)

const Equal = Mall.filter(Mall => Family[Mall].vo ===1)
const Observe = Equal.map (son => Family[son].father)

console.log(Observe)