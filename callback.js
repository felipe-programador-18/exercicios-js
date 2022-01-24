// practice about callback and process about executive
// this command  i get  read all file that my file!!!
const fs = require('fs')

fs.readdir('./', function (err, lista) {
    if(err){
        console.log('Show error', err)
    }else{
        console.log(lista)
    }
})

//when i thought about callback i always knowd that first going command of outside 
//later going of command of inside
console.log('teste here !!!')