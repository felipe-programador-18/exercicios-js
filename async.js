//practice more bit about async await!!

function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(ms), ms)
    })
}

async function Greetw(){
    const ms = await tempo(2000)
    console.log('finally', ms)
} 

console.log(Greetw())