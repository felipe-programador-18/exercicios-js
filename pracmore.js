
const Vetor= [1,2,3,4,5,6,7]

const test = (value, index, Arr) => {
    console.log(value,index, Arr)
}

Vetor.forEach(test)


const cost = [10,20,30,50]
const Caught = (value) => {
   console.log('teste here now', value)
}
cost.forEach(Caught)





const Wakeup = pense => new Promise(resolve =>{
    setTimeout(resolve, pense)
})

const realiza = async() => {
    console.log('lets right jump');
    await Wakeup (2000)
    console.log('hi there, maybe you can seeing for me')
    await Wakeup(4000)
    console.log('least more sure')
}
realiza()