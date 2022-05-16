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

const file = ['queijo','maionese','queijo', 'maionese','presento','carne','salada', 'queijo']

const minhaFuncao = (eat, food) =>{
    if(!eat[food]){
        eat[food]={
            eating: eat,
            stunning : 0
        }
    }
    eat[food].stunning = eat[food].stunning +1
    return eat
}

const Repeate =  file.reduce(minhaFuncao,{})
console.log(Repeate)
const key = Object.keys(Repeate)
const removedFood =  file.filter(create => Repeate[create].stunning ===1)
console.log(removedFood)