const sum = (a,b) => a*b
const operation = (op, a,b) => op(a,b)

const workMe = op =>{
    ops ={
        "x":op
    }
    return ops
}

const multiply = sum(5,4)
console.log(multiply)