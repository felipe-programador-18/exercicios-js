


let PrhaseAndEmail ="lemme typing my email here now: machadofelipe@outlook.com "

// to practice a lot about this small thing!
let regex= /([a-z0-9]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g ; 
let manageAll=PrhaseAndEmail.match(regex)
console.log(manageAll)


const testing ='FELipe'
const Cutting = /E|e/g

console.log(testing.match(Cutting))
