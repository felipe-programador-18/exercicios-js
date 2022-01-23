//arrow functions!!

const Tell = function(vocabulary){
    console.log(vocabulary)
}

Tell('Learning little')

const adding = function(n1, n2){
    return n1 + n2
}

//observar this!!
//i can make one function without adding name
const animal =  (nome, granido) =>  nome+ ' ' +granido()
console.log(animal('aligator', ()=> 'morder'))


const Dogargentino = (name, morder) => name+ ' ' + morder()
console.log(Dogargentino('dogo canario' , () =>'pega ladrao'))


const Call = (Called) =>{
    console.log(Called)
}

Call('hi there i can help  you')