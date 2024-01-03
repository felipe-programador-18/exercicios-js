

function ToFilter (item){
  return item <1000
}

let Testing=[23,23,3423.43].filter(ToFilter)
console.table(Testing)




const LessThan = (less) => {
    return less <50
}

let PuttingTesting =[123,32,43,64,67,34,1,2,3,5,6,10].forEach((element) => console.log(element*2))
// let manage = PuttingTesting.filter(LessThan);

console.table(PuttingTesting)