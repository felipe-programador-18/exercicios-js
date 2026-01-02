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

let CreateOne =["felipe", "martins", "felipe"]


const Thought = (certo,errado) => {
    
    // vendo se o paramento com nome errado existe dentro do certo
    if(!certo[errado]){
        certo[errado] = 0
    }
    
    certo[errado] += certo[errado] +1
    
    return certo

}

const ThouhgtMore = CreateOne.reduce(Thought, {})
console.log('testing my code here now',ThouhgtMore)

let managing = Object.keys(ThouhgtMore)

console.log(managing)







const OtherWay = (item) => {
    return item !== "felipe"
}


// creating another function
let SeparaOsDiferentes = ["felipe","martins","felipe","testing","testing"].filter(OtherWay)
console.log(SeparaOsDiferentes)






const Havetocomeback = [1,2,3,44,5,6,7]

const ManageAllMorethanthat= Havetocomeback.map((item) => item * 2)
console.log(ManageAllMorethanthat)

const SumAll = [22,44,66,12,55].reduce( (a ,b) => a*b )
console.log(SumAll)


const tobacktocode="eu voltei a programar"
console.log(tobacktocode)

const PraticeMoreAndMore= [22, 55,90,180].reduce((f,g) => f*g)
console.log(PraticeMoreAndMore)

const colocamap= [2,4,6,8,10].map((newitem)=> newitem *3)
console.log(colocamap.concat('e'))
