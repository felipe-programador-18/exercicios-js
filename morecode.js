
//pure  function traning more an little bit
const Caughttwo = (a,b) => a+b
const receive = Caughttwo(400,3213)
console.log(receive)

// remember and practice about functions!!
const Double = (a,b) => a ** b
const Douop = (op, a,b) => op (a,b)

const Signal = op => {
    const Caught = {
        '**':Double
    }
    return Caught[op]
}
const More = Double(300,2)
console.log(More)