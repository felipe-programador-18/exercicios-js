//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any //numbers then you should return 0.



//const tought = (a,b) => a+b
//const pense = Vector.filter()
//console.log(Vector.reduce(tought))
const filtermore =  function(item){
    return item !== 0 & item > 0
}
let Vector = [1,5.2,4,0,,0,0,0,-1].filter(filtermore)
console.log(Vector)
const Pensa = (a,b) => a+b
console.log(Vector.reduce(Pensa))