const array = [12,23,123,23,123,4324,121]
const isPrime = (a,b) => a+b 
console.log(array.reduce(isPrime))


const Filtermore = function(more){
    return more <1000
}
const Vector = [1233,1231,2312,3123,12,32,123,123,15,35,12].filter(Filtermore)
console.log(Vector)



//practice more about filter
const CaughtFilter = function(item){
    return item === 'Martins'
}
const RemberFileter = ['Martins', 'Programmer'].filter(CaughtFilter)
console.log(RemberFileter)

const buildMore= function(item){
    return item <1999
}
const borns = [2323,1232,3123,213,1995,2002,2052,323].filter(buildMore)
console.log("more and more testing", borns)


//practice about foreEach
RemberFileter.forEach(Element => console.log(Element === 'Martins'))

let Number = [123,123,1234,54,123,5453,123123,55]
Number.forEach(Element  => console.log(Element**2))