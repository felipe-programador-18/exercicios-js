//pratice little bit about split
//and reverse too

const makeSomet = (a) =>{
    let smarter = a+''
    smarter = smarter.split("").reverse().map(x => Number(x))
    return smarter
}

const notSmarter = makeSomet(50434)
console.log(notSmarter)


const anotherGure = (b) =>{
    let see = b+''
    see = see.split("").reverse().map(more => Number(more))
    return see
}

const Pire = anotherGure(54250)
console.log(Pire)


const feet = 'thought in solution to winner in the life'
const save = feet.split('').reverse()
console.log(save)