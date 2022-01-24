const Novo = ['a','b','c','d','e','a','b',4,3,6,7, 'martins', 'martins', 'felipe martins']
 
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
console.log(Unique, Contagem)