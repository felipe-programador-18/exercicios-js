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