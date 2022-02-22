
function Seeing(ns){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(ns)  
      }, 2000);
    })
}
 
async function Show(){
    const ns = Seeing(3000)
    console.log('remember about async', ns)
}

console.log(Show())


async function Other(){
    setInterval(() => {
        console.log('lot grateful and lot graceful')
    }, 3000);
}
console.log(Other())