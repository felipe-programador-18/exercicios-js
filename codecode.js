const count =['aba',12,1,1,1]
const test = (redone, redtwo) => redone + redtwo
console.log(count.reduce(test))
console.log(Object.keys(count))


const Vector =[name='felipe', subname='programmer18']
console.log(Object.keys(Vector))


const getall = (one, tow) => one + tow
const receiveReducer = count.reduce(getall)
console.log(`testing my coding here ${receiveReducer} `)