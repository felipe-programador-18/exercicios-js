//A Narcissistic Number is a positive number which is the sum of its own digits,
//each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).
//For example, take 153 (3 digits), which is narcisstic:
//1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

const Vetor = [1,6,5,2]
//const thuth = (one , two) => one + two
const allow = Vetor.map(function(item){
    return {teste: item**4, pensa :`the item is ${item + item}`}    
})

//const pensa = Vetor.reduce(item+1)
//console.log(Vetor.reduce(thuth))
console.log(allow)
