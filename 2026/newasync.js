const NamesTimes =(name) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> resolve(name), name)
    })
}

async function ReciveName(){
    const Recebe= await NamesTimes(2000)
    console.log('Felipe Martins'+ Recebe)
}

let names = 'aparecendo antes do nome de dois segundos'
console.log(names)
console.log(ReciveName())


function Soma (num1, num2){
    return num1 + num2
}

async function recebeSoma (){
    const guardando= await Soma(10,50)
    console.log('recebendo a soma de dois numeros depois de 4 segundos', guardando
    )
}
setTimeout(recebeSoma, 4000);
const users = [{ id: 1, nome: "João" }];
const newUsers = users.map((user) => user);
//console.log(newUsers)

function maisUmaVez(one, two){
     return one + ' ' + two
}
console.log('testando mais uma vez', maisUmaVez())

async function RecebendoMaisumavez (){
    const teste= await maisUmaVez('felipe','martins')
    console.log('recebendo mais uma vez', teste) 
}
setInterval(RecebendoMaisumavez);



const DepoisDeumtempo = (newUsers) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>resolve(newUsers), newUsers)
    }, 5000)
}

async function RecebendoTesteUsers (){
    const testandoUsers = await DepoisDeumtempo(3000)
    console.log('recebendo os users depois de 3 segundos',testandoUsers)
}

//console.log(RecebendoTesteUsers())