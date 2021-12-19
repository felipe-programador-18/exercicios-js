
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