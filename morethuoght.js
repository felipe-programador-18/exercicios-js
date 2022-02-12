const Novo = [1,2,3,4,5,6,1,2,3,5, 'martins', 'martins', 'felipe martins']

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
//test and thought about solution
console.log(Key)

const Unique = Key.filter( key => Contagem[key].ocurr === 1)
const Volta = Unique.map(value => Contagem[value].val)
console.log(Volta)