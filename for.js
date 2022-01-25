const Four = () =>{

    let Test = 'abcdefghijklmnopqrstuvxz'
    let empty = ''
     
    for (var i =0; i< 10000; i ++){
        const Number = Math.floor((Math.random() * Test.lenght))
        empty += Test.substring(Number, Number+1)
    }

    return empty
}

console.log(Four())



const Practice = () =>{

    let Morein = 10
    let Least = ''

    for(var i = 0 ; i<10000; i++){
     const Caught = Math.floor(Math.random()* Morein)
     Least += Morein.toFixed(Caught, Caught+1)

     return Least
    }
}

console.log(Practice())
console.log(Four())