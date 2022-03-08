const Soma = (a,b) => a+b
const union = Soma(23,32)
console.log(union)


module.exports={
    Soma
}

const fill = [3213,34,123,545,123]

const Seeing= fill.filter(function(item){
    return item <1000
})

console.log(Seeing, fill)


// traning about value and reffered
let Name = {nome:'Felipe Programer', age:12}
let Fother = Name
Fother.age = 325

console.log(Name)