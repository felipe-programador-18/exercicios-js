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