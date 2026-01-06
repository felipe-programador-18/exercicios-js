const NamesTimes =(name) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> resolve(name), name)
    })
}

async function ReciveName(){
    const Recebe= await NamesTimes(2000)
    console.log('My name is'+ Recebe)
}

let names = 'aparecendo antes do nome de dois segundos'
console.log(names)
console.log(ReciveName('Felipe Martins'))