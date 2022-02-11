
let Phase = 'I have struggling more and more for the future much better to me'
let name = 'programer martins'
let togetherUnion = `let me think ${name} is person lot effors in the life and
too ${Phase}`

console.log(togetherUnion)

console.log(name)

const fs = require('fs')
fs.readdir('./', (err, list) =>{
    if(err){
        console.log(err)
    }else{
        console.log(list)
    }
})




const Array = ['felipe', 'programmer', 'dataanother function']

const Father = Array.map(function(item){
   return {union: item + 'is truth'}
})

console.log(Father)