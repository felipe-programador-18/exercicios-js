const multiply = (a,b) => a*b  
const operation = (op,a,b) => (a,b)

const split = (a,b) => a/b
const newoperation = ( op , a,b) => op(a,b)

const sum = (a,b) => a+b
const newoperationsun = (op, a,b) => op(a,b)

const apend = (a,b) => a-b
const newoperationapend = (op, a,b) => op(a,b)

const basicOp = op =>{
    ops ={
        "x":op,
        "/":op,
        "+":op,
        "-":op
    }
    return ops
}

console.log((basicOp('x',10,2)))

const abcmore = operation(2,3)
console.log(abcmore)


const place = basicOp(12,'x',3)
console.log(place)

//const double = multiply(5,4)
//const splitMore = split(10,2)
//const didSun = sum(10,65) 
//const apendCode = apend(32,4) 
//console.log(double)
//console.log(splitMore)
//console.log(didSun)
//console.log(apendCode)