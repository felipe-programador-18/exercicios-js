//the command find he return one the first element before this rules!!!

const vetor = [5,6,7,20,43]
const found = vetor.find(Element => Element >10)
console.log(found)



const more = function(item){
    return item <1000
}


const fila = [323,232,4335,5654,7777].filter(more)
console.log(fila)



const Adoptem = [20,10,320,231]
const splint = Adoptem.find(Element => Element <100)
console.log(splint)





let Pure = ["felipe", "felipe","cristiano"]

const Testing = Pure.find(test => test !== "felipe")
console.log(Testing)