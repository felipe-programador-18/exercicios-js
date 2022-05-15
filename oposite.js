//very interesting!!!


//try understood about that code
const opposite =(number) =>{
    return number*= -1
}

const une = opposite(34)
console.log(une)


const CreateBuld = (one) =>{
    return one*= -1
}

const Junta = CreateBuld(-2312312)
console.log(Junta)


const Moroeneod = (two) =>{
    return two*= -1   
}

const assey =  Moroeneod(-50)
console.log(assey)



const Prenould =  [1,2,31,111,2,3123,123,2,3,2,3,4,5]
const Like = (solve, resolve) => {
    if(!solve[resolve]){
        solve[resolve] = 0
    }
    solve[resolve] = solve[resolve]+1
    return solve
}

const trouble = Prenould.reduce(Like,{})
console.log(trouble)
const kire =  Object.keys(trouble)
console.log(kire)



//command concat he adding more element in any thing that create!!
const Lirea = ['programmer maritns', 123,32,123,13,4512,123]
const words = Lirea.concat('I go became new programmer react javascript')
console.log(words)


// command pop removed all last element of array
const Always =  [1,23,123,45,345,12312,3]
const Mireaea = Always.pop()
console.log(Mireaea)
console.log(Always)