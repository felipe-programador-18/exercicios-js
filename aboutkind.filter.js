const get  = function(item){
    return item >2000
}

const Vector = [4324,4324,234,34,234,23412,435,6234,123,321,23].filter(get)


//remember about practice reduce
const Pure = [321,3,123,54,123,5435,13,543,213]
const Union = (one, two) => one *two
console.log(Pure.reduce(Union))

console.log(Vector)
