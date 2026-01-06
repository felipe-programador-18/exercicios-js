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


function greetings (time){
   return new Promise((resolve,reject)=>{
       setTimeout(()=> resolve(time), time)
   })
}


 async function received (){
      const time = await greetings(7000)
      console.log('practice little bit about async', time)
 }

 console.log(received())

 // praticando e lembrando sobre async await
function recebendoMyTime (newtime){
    return new Promise((resolve, reject) =>  {
        setTimeout(() => resolve(newtime),newtime)
    })
 }

  const TestMoreOneTime = async() =>{
        const recebendoTime= await recebendoMyTime(9000)
        console.log('recebendo outro tempo de 9 segundos', recebendoTime)
  }
     console.log(TestMoreOneTime())

 
  function TestandoOutroTime (moreonetime){
    return new Promise((resolve, reject)=> {
        setTimeout(() => resolve(moreonetime), moreonetime)
    })
  }    

  const TheLastOne = async() =>{
    const recebendoLastOne = await TestandoOutroTime(8000);
    console.log('testando meu sexto tempo de 6 segundos', recebendoLastOne)
  }

  console.log(TheLastOne())