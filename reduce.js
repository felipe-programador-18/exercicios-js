//try about reduce

const More = [32,332,323,23,123,321,231,123]
const kin = (kinone, kintwo)=> kinone + kintwo
console.log(More.reduce(kin))





const rangeOfNumber = (index) => {
    return index > 50
}
const Shifted = [12,32,43,2,34234,123213,545,676876].filter(rangeOfNumber)


const PracticeReduce = [12,32,545,123,5435,123,34234,123]
const Together = (union, uniontwo) => union + uniontwo


console.log(Shifted)
console.log(PracticeReduce.reduce(Together))