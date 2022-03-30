//practice more bit about async await!!

function createdNewP(ts){
    return new Promise((resolve, reject)=>{
     setTimeout(() => resolve(ts), ts)
    })
}

async function caughtHere(){
    const ts = await createdNewP(4000)
    console.log('is very import async function', ts)
}

function tempo(ms){
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(ms), ms)
    })
}

async function Greetw(){
    const ms = await tempo(3000)
    console.log('finally', ms)
} 
console.log(caughtHere())
console.log(Greetw())





function buildNew(sr){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(sr), sr)
    })
}

async function builtData(){
   const sr = await buildNew(5000)
   console.log('test here sr',sr)
 
   const Vector = [1,2,3454,65,3234]
   const reducer = (one,two) => one+two
   console.log(Vector.map(reducer))
    
}

console.log(builtData())