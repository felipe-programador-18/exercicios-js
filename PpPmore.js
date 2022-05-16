//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício

let Namenumber = [1,2,3,4,1,1,1,23,3,45,6,1,3,4,5]
const Remain = (a,b) =>{
    if(!a[b]){
        a[b]={
            crea :a,
            sum:0
        }
    }
    a[b].sum = a[b].sum +1
    return a
}

const Release = Namenumber.reduce(Remain,{})
//console.log(Release)
const chave = Object.keys(Release)
const Search = chave.filter(together => Release[together].sum  === 1)
console.log(Search)


const Subore = (a) => {
   //is type 1*1
    return a*= -1
}

const adidng = Subore(12)
console.log(adidng)