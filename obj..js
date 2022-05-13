//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício

const Novo = [1,2,3,4,5,1,3,4,3,6,7, 'martins', 'martins', 'felipe martins']

const Atencao = (agr, value) => {
    if(!agr [value]){
        agr[value]= {
            val: value,
            ocurr: 0
        }
    }
    agr[value].ocurr = agr [value].ocurr + 1
    return agr
}
const Contagem = Novo.reduce(Atencao, {})
const Key= Object.keys(Contagem)


const Unique = Key.filter( key => Contagem[key].ocurr === 1)
const Volta = Unique.map(value => Contagem[value].val)
console.log(Volta)



//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício


const AnyVector = ['felipe',12,1,1,1,1323,323,45,765,123,4,5,67]

const BuildMachine = (name,onename) => {
   if(!name[onename]){
      name[onename] ={
          nam : name,
          othername : 0
      } 
    }
    name[onename].othername = name[onename].othername +1
    return name
}
const Caught = AnyVector.reduce(BuildMachine,{})
console.log(Caught)
const anotherKey = Object.keys(Caught)

const Sobreaone =  anotherKey.filter(fitre =>  Caught[fitre].othername === 1)
console.log(Sobreaone)

const Pure =  Sobreaone.map(struc => Caught[struc].nam)
console.log(Pure)