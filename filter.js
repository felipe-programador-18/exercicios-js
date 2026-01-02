const More = function(item){
    return item > 50 || item < 20
}

const vetor = [321,23,1,323,12,32,456,65,10,5,6].filter(More)
console.log(`testando se esta funcionando o vetor vetor ${vetor} `)


//const troubleshooting = [12,123,31,232,5435,6756,123,534]


//use MAP !!!
const array = [1,2,3,4,5,6]
const Double = array.map(function (item){
    return  {original:item , triplicado :item *3 }
})
//console.log(array, Double)


const penseiMore = [321,2321,3213,123,14]
const Traning = penseiMore.map(function(item){
    return item * 2
})

console.log(Traning)



const Name = [12,123,32,321,123,50]

const income = Name.map(function(item){
    return {pai: item **2}
})

console.log(income)



let paparwork = `hi there, Im felipe have 27 year old ${27}
currently i have looking opportunity of work in the area how developers software`

console.log(paparwork)



let eliminandoNome=['felipe','martins','felipe','felipe','martins','julia','eu vou ser aprovado em 2026']
const RecebeEliminadoNome=eliminandoNome.filter(function(nome){
    return nome != ["felipe"]
})

console.log(`testando meu conhecimento novamente ${RecebeEliminadoNome}`)