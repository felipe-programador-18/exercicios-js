

const giveNunber  = (str) => {
    let arrey = Array.from(str)
    let newarray = []

    for(var i=0; i< arrey.length; i++){
      //theoritical this case i am create push to adding old arrey to repeat two times    
     newarray.push(arrey[i].repeat(2))
    }
    console.log(newarray.join(''))
}
giveNunber('martins')



const caughtString = (more) =>{
    let oldarrey = Array.from(more)
    let newnewarrey = []

    for(var i =0; i< oldarrey.length; i++){
        //create push to caught all index of old arrey
        newnewarrey.push(oldarrey[i].repeat(2))
    }
    console.log(newnewarrey.join(""))
}

caughtString('Igobebecameprogrammerbetter')