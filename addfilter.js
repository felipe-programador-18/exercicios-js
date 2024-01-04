const Vetor = [1,2,3,4,5,6,7,1,3,4,10,1,1,1,1,1,1]

const Adoptem = (one, string) =>{
    if(!one[string]){
        one[string]=0
    }
    one[string] += one[string] + 1
    return one
}

const Test = Vetor.reduce( Adoptem, {})

console.table(Object.keys(Test))






// lemme suppose that i have to create one function to elimitate the equal things

let CreateOne = [{id:1, name:"felipe", age:28, status:single},{id:2, name:"felipe", age:28, status:single}, {id:3, name:"felipe", age:28, status:single}, {id:4, name:"felipe", age:28, status:single}
, {id:5, name:"felipe", age:28, status:single}, {id:1, name:"felipe", age:28, status:single}, {id:7, name:"felipe", age:30, status:married}]


const Thought = (certo,errado) => {
    
    // vendo se o paramento com nome errado existe dentro do certo
    if(!certo[errado]){
        certo[errado] = 0
    }
    
    certo[errado] += certo[erradp + 1]
    return certo

}

const ThouhgtMore = CreateOne.reduce(Thought, {})

console.log(ThouhgtMore)