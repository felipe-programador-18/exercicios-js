const More = function(item){
    return item > 50 || item < 20
}

const vetor = [321,23,1,323,12,32,456,65,10,5,6].filter(More)

console.log(vetor)


const troubleshooting = [12,123,31,232,5435,6756,123,534]


//use MAP !!!
const array = [1,2,3,4,5,6]
const Double = array.map(function (item){
    return  {original:item , triplicado :item *3 }
})
console.log(array, Double)
