const More = function(item){
    return item > 50 || item < 20
}

const vetor = [321,23,1,323,12,32,456,65,10,5,6].filter(More)

console.log(vetor)