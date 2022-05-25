const between =  (a, b) => {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
}

const improvesSolve = between(1,10)
console.log(improvesSolve)