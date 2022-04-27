//pratice about little bit high other function
// it's called high order function
//create reducer and map to practice is very import to use always
const Vetor = [12,321,321,3213,213342,41,123,12323,41233]
const Reducer = (a,b) => (a+b)
console.log(Vetor.reduce(Reducer))


const table = [1,2,3,4,5,6,7,8,9,10]
const caught =  table.map(function(item){
    return {create:item**2}
})
console.log(caught,table)

const Soma = function(a,b) {
    return a+b
}
console.log(Soma(100,12))

const Vezes = function (c,d,e){
    return c*d-e
}

console.log(Vezes(100,2,50))


const Decrement = function(j,k,l){
   return j-k*l
}
console.log(Decrement(500,100,2))



const multiplic = (a,b) => a *b
const Resultade = (op, a,b) => op(a,b)
const RetornaOps = op=> {
    const Sinais = {
    
        '*': multiplic
    }

     return Sinais[op]    
}

const seeing = multiplic (10,50)
console.log(seeing)


const CreateBuild = (z,y) => (z/y)
const Split = (opop, z,y) => opop(z,y)

const needretunri = opop => {
    const Felipe ={
       "/": CreateBuild
    }
    return Felipe[opop]
}

const PractimoreAlways = CreateBuild(1123,4)
console.log(PractimoreAlways)